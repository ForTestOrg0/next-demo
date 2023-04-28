import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, LinkRouter, Button } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getCouncilProposal, GetCouncilProposalProps, getDemocracyReferendum, GetDemocracyReferendumProps, unwrap } from '@/utils/api';
import { CouncilMotionInfo, SimpleProposalVotes, ProposalParamsInfo, ProposalPreImage, ProposalTimeLine, ReferendaInfo, ReferendaVotesClient } from '@/components/Governance';

export const getServerSideProps: GetServerSideProps<{ host: string; data: GetCouncilProposalProps, tab: string, proposalId: number }, { id: string }> = async (context) => {
  const host = context.req.headers.host || '';
  const tab = (context.query.tab || '')?.toString();
  const proposalId = context.params?.id;

  if (typeof proposalId === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getCouncilProposal(host, { proposal_id: parseInt(proposalId) });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      data: data.data,
      tab,
      proposalId: parseInt(proposalId),
    },
  }
}


export default function Page({ host, data, tab, proposalId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const council = data.info;

  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2'>Council Motions#{proposalId}</Text>

        <Boundary>
          <CouncilMotionInfo proposal={council} />
        </Boundary>

        <Boundary className='mt-5'>
          <TabGroup>
            <TabList>
              <Tab>Voting Detail</Tab>
              <Tab>TimeLine</Tab>
              <Tab>Proposal Preimage</Tab>
              <Tab>Proposal</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleProposalVotes votes={council.votes} />
              </TabPanel>
              <TabPanel><ProposalTimeLine timeline={council.timeline} /></TabPanel>
              <TabPanel>{council?.pre_image ? <ProposalPreImage preimage={council?.pre_image} /> : null}</TabPanel>
              <TabPanel>{council?.params ? <ProposalParamsInfo callModule={council?.call_module} callName={council?.call_name} params={council?.params} /> : null}</TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  );
}
