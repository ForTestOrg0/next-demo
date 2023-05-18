import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, LinkRouter, Button } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getCouncilProposal, GetCouncilProposalProps, getDemocracyReferendum, GetDemocracyReferendumProps, unwrap } from '@/utils/api';
import { CouncilMotionInfo, SimpleProposalVotes, ProposalParamsInfo, ProposalPreImage, ProposalTimeLine, ReferendaInfo, ReferendaVotesClient } from '@/components/Governance';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';
// import { useTranslation } from 'next-i18next'

export const getServerSideProps: GetServerSideProps<{ host: string; data: GetCouncilProposalProps, tab: string, proposalId: number } & BareServerSideProps, { id: string }> = async (context) => {
  const host = context.req.headers.host || '';
  const tab = (context.query.tab || '')?.toString();
  const proposalId = context.params?.id;

  if (typeof proposalId === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getCouncilProposal(host, { proposal_id: parseInt(proposalId) });
  const chainProps = await getChainProps(context.req.headers.host);
  
  if (!data || data.code !== 0 || !chainProps) {
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
      chain: chainProps
    },
  }
}


export default function Page({ data, proposalId, chain }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const council = data.info;
  // const { t } = useTranslation('common')

  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2 break-all'>Council Motions#{proposalId}</Text>

        <Boundary>
          <CouncilMotionInfo proposal={council} />
        </Boundary>

        <Boundary className='mt-5'>
          <TabGroup>
            <TabList>
              <Tab>Voting Detail</Tab>
              <Tab>Timeline</Tab>
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
              <TabPanel>{council?.pre_image ? <ProposalPreImage preimage={council?.pre_image} chain={chain}/> : null}</TabPanel>
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
