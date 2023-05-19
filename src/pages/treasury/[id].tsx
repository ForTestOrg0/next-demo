import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getTreasuryProposal, GetTreasuryProposalProps } from '@/utils/api';
import { ProposalTimeLine } from '@/components/Governance';
import { TreasuryProposalInfo } from '@/components/Governance/TreasuryProposalInfo';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';

export const getServerSideProps: GetServerSideProps<{ host: string; data: GetTreasuryProposalProps, tab: string, proposalId: number } & BareServerSideProps, { id: string }> = async (context) => {
  const host = context.req.headers.host || '';
  const tab = (context.query.tab || '')?.toString();
  const proposalId = context.params?.id;
  const chainProps = await getChainProps(context.req.headers.host);

  if (typeof proposalId === 'undefined' || !chainProps) {
    return {
      notFound: true,
    }
  }
  const data = await getTreasuryProposal(host, { proposal_id: parseInt(proposalId) });

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
      chain: chainProps,
    },
  }
}


export default function Page({ data, proposalId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const proposal = data.info;

  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-4 break-all'>Treasury Proposals#{proposalId}</Text>

        <Boundary>
          <TreasuryProposalInfo proposal={proposal} />
        </Boundary>

        <Boundary className='mt-5'>
          <TabGroup>
            <TabList>
              <Tab>TimeLine</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel><ProposalTimeLine timeline={proposal.timeline} /></TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  );
}
