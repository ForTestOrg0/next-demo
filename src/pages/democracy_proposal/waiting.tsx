
import Chart from '@/components/Echart';
import styles from './styles.module.scss';
import { Tab, Tabs, TabList, TabPanel, Button, Boundary, PageContent, Container, Text, TabsServer } from '@/ui';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getDemocracyProposals, GetDemocracyProposalsDataProps } from '@/utils/api';

export const getServerSideProps: GetServerSideProps<{ data: GetDemocracyProposalsDataProps }> = async (context) => {
  const data = await getDemocracyProposals(context.req.headers.host || '', { "row": 10, "page": 0, "order_field": "seconded_count", "status": "active" });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data
    },
  }
}

export default function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2'>Democracy Proposals</Text>
        <Boundary>
          <TabsServer items={
            [
              {
                label: 'Waiting Queue',
                value: '/democracy_proposal/waiting'
              },
              {
                label: 'Historical Proposal',
                value: '/democracy_proposal/historical'
              }
            ]
          }/>
          {data.list.map((proposal) => {
            return <div key={proposal.proposal_id}>{proposal.proposal_id}</div>
          })}
        </Boundary>
      </Container>
    </PageContent>
  );
}
