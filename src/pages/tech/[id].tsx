import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getTechcommProposal, GetTechcommProposalProps } from '@/utils/api';
import { SimpleProposalVotes, ProposalParamsInfo, ProposalPreImage, ProposalTimeLine, TechcommProposalInfo } from '@/components/Governance';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';
import METADATA from "@/config/metadata";

export const getServerSideProps: GetServerSideProps<{ host: string; data: GetTechcommProposalProps, tab: string, proposalId: number } & BareServerSideProps, { id: string }> = async (context) => {
  const host = context.req.headers.host || '';
  const tab = (context.query.tab || '')?.toString();
  const proposalId = context.params?.id;
  
  if (typeof proposalId === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getTechcommProposal(host, { proposal_id: parseInt(proposalId) });
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
      chain: chainProps,
      title: METADATA['tech']['title'] + proposalId,
      description: METADATA['tech']['description']
    },
  }
}


export default function Page({ data, proposalId, chain }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const proposal = data.info;

  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-4 break-all'>Technical Committee Proposals#{proposalId}</Text>

        <Boundary>
          <TechcommProposalInfo proposal={proposal} />
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
              <TabPanel><SimpleProposalVotes votes={proposal.votes} /></TabPanel>
              <TabPanel><ProposalTimeLine timeline={proposal.timeline} /></TabPanel>
              <TabPanel>{proposal?.pre_image ? <ProposalPreImage preimage={proposal?.pre_image} chain={chain} /> : null}</TabPanel>
              <TabPanel>{proposal?.params ? <ProposalParamsInfo callModule={proposal?.call_module} callName={proposal?.call_name} params={proposal?.params} /> : null}</TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  );
}
