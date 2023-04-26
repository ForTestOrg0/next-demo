import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, LinkRouter, Button } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getDemocracyReferendum, GetDemocracyReferendumProps } from '@/utils/api';
import { ProposalPreImage, ProposalTimeLine, ReferendaInfo, ReferendaVotesClient } from '@/components/Governance';
import { PAGE_ROW } from '@/config/constants';

export const getServerSideProps: GetServerSideProps<{ host: string; data: GetDemocracyReferendumProps, tab: string, referendumIndex: number }, { id: string }> = async (context) => {
  const host = context.req.headers.host || '';
  const tab = (context.query.tab || '')?.toString();
  const referendumIndex = context.params?.id;

  if (typeof referendumIndex === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getDemocracyReferendum(host, { referendum_index: parseInt(referendumIndex) });

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
      referendumIndex: parseInt(referendumIndex),
    },
  }
}


export default function Page({ host, data, tab, referendumIndex }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2'>Democracy Proposals#{referendumIndex}</Text>

        <Boundary>
          <ReferendaInfo referenda={data.info} />
        </Boundary>

        <Boundary className='mt-5'>
          <TabGroup>
            <TabList>
              <Tab>Voting Detail</Tab>
              <Tab>TimeLine</Tab>
              <Tab>Proposal Preimage</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ReferendaVotesClient host={host} page={0} row={PAGE_ROW} referendumIndex={referendumIndex} />
              </TabPanel>
              <TabPanel><ProposalTimeLine timeline={data.info.timeline} /></TabPanel>
              <TabPanel>{data.info?.pre_image ? <ProposalPreImage preimage={data.info?.pre_image} /> : null}</TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  );
}
