import { Boundary, PageContent, Container, Text, TabsServer, Table, Th, Td, Tr, LinkRouter, Button, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getDemocracyProposalById, getDemocracyProposals, GetDemocracyProposalByIdDataProps, useDemocracySeconded } from '@/utils/api';
import { ProposalInfo, ProposalPreImage, ProposalSecondsClient, ProposalTimeLine } from '@/components/Governance';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';


export const getServerSideProps: GetServerSideProps<{ host: string; data: GetDemocracyProposalByIdDataProps, tab: string, democracyId: number } & BareServerSideProps, { id: string }> = async (context) => {
  const host = context.req.headers.host || '';
  const tab = (context.query.tab || '')?.toString();
  const democracyId = context.params?.id;

  if (typeof democracyId === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getDemocracyProposalById(host, { democracy_id: parseInt(democracyId) });
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
      democracyId: parseInt(democracyId),
      chain: chainProps,
    },
  }
}


export default function Page({ host, data, chain, democracyId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-4 break-all'>Democracy Proposals#{democracyId}</Text>

        <Boundary>
          <ProposalInfo proposal={data.info} />
        </Boundary>

        <Boundary className='mt-5'>
          <TabGroup>
            <TabList>
              <Tab>Seconds</Tab>
              <Tab>TimeLine</Tab>
              <Tab>Proposal Preimage</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel><ProposalSecondsClient host={host} page={0} proposalId={democracyId} /></TabPanel>
              <TabPanel><ProposalTimeLine timeline={data.info.timeline} /></TabPanel>
              <TabPanel><ProposalPreImage preimage={data.info.pre_image} chain={chain} /></TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  );
}
