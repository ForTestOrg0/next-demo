import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getBountiesProposal, GetBountiesProposalProps } from '@/utils/api';
import { BountiesInfo, ProposalTimeLine } from '@/components/Governance';


export const getServerSideProps: GetServerSideProps<{ host: string; data: GetBountiesProposalProps, tab: string, proposalId: number }, { id: string }> = async (context) => {
  const host = context.req.headers.host || '';
  const tab = (context.query.tab || '')?.toString();
  const proposalId = context.params?.id;

  if (typeof proposalId === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getBountiesProposal(host, { proposal_id: parseInt(proposalId) });
  
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
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2 break-all'>Bounty#{proposalId}</Text>

        <Boundary>
          <BountiesInfo proposal={data}/>
        </Boundary>

        <Boundary className='mt-5'>
          <TabGroup>
            <TabList>
              <Tab>Timeline</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel><ProposalTimeLine timeline={data.timeline}/></TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  );
}
