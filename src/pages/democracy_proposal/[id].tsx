import { Boundary, PageContent, Container, Text, TabsServer, Table, Th, Td, Tr, LinkRouter, Button, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getDemocracyProposalById, getDemocracyProposals, GetDemocracyProposalByIdDataProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import useSWR from 'swr'


export const getServerSideProps: GetServerSideProps<{ data: GetDemocracyProposalByIdDataProps, tab: string, democracyId: number }, { id: string }> = async (context) => {
  const tab = (context.query.tab || '')?.toString();
  const democracyId = context.params?.id;

  if (typeof democracyId === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getDemocracyProposalById(context.req.headers.host || '', { democracy_id: parseInt(democracyId) });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      tab,
      democracyId: parseInt(democracyId),
    },
  }
}


export default function Page({ data, tab, democracyId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: secondsData, error } = useSWR('/api/profile-data', fetcher)

  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2'>Democracy Proposals#{democracyId}</Text>

        <Boundary>
          <Table className='w-full'>
            <tbody>
              <Tr>
                <Td className='font-semibold table-fixed w-44'>Topic</Td>
                <Td>Unknown</Td>
              </Tr>
              <Tr>
                <Td className='font-semibold'>Created at Block</Td>
                <Td>{data?.info?.created_block}</Td>
              </Tr>
              <Tr>
                <Td className='font-semibold'>Updated at Block</Td>
                <Td>{data?.info?.updated_block}</Td>
              </Tr>
              <Tr>
                <Td className='font-semibold'>Motion Hash</Td>
                <Td>{data?.info?.proposal_hash}</Td>
              </Tr>
              <Tr>
                <Td className='font-semibold'>Seconds</Td>
                <Td>{data?.info?.seconded_count}</Td>
              </Tr>
              <Tr>
                <Td className='font-semibold'>Status</Td>
                <Td>{data?.info?.status}</Td>
              </Tr>
            </tbody>
          </Table>
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
              <TabPanel>Content 1</TabPanel>
              <TabPanel>Content 2</TabPanel>
              <TabPanel>Content 3</TabPanel>
              <TabPanel>Content 3</TabPanel>
              <TabPanel>Content 3</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  );
}
