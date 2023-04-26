import { Boundary, PageContent, Container, Text, TabsServer, Table, Th, Td, Tr, LinkRouter, Button } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getDemocracyProposals, GetDemocracyProposalsDataProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { ProposalList } from '@/components/Governance';

const orderFieldMap = {
  waiting: 'seconded_count',
  historical: '',
}

const statusMap = {
  waiting: 'active',
  historical: 'historical',
}

export const getServerSideProps: GetServerSideProps<{ data: GetDemocracyProposalsDataProps, type: keyof typeof orderFieldMap }> = async (context) => {
  const tab = (context.query.status || '')?.toString() as (keyof typeof orderFieldMap);
  const type = typeof orderFieldMap[tab] === 'undefined' ? 'waiting' : tab;
  const orderField = orderFieldMap[type] || orderFieldMap.waiting;
  const status = statusMap[type] || statusMap.waiting;
  const data = await getDemocracyProposals(context.req.headers.host || '', { "row": PAGE_ROW, "page": 0, "order_field": orderField, "status": status });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      type,
    },
  }
}

export default function Page({ data, type }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2'>Democracy Proposals</Text>
        <TabsServer className='mb-4' items={
          [
            {
              label: 'Waiting Queue',
              value: '/democracy_proposal?status=waiting',
              replace: true,
              active: type === 'waiting'
            },
            {
              label: 'Historical Proposal',
              value: '/democracy_proposal?status=historical',
              replace: true,
              active: type === 'historical'
            }
          ]
        } />
        <Boundary>
          <ProposalList proposals={data.list}/>
        </Boundary>
        <LinkRouter href={`/democracy_proposal_list?status=${type}`}>
          <Button outline className='mt-4'>View Other {data.count - PAGE_ROW} {type} </Button>
        </LinkRouter>
      </Container>
    </PageContent >
  );
}
