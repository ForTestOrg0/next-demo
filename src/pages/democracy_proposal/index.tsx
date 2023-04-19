import { Boundary, PageContent, Container, Text, TabsServer, Table, Th, Td, Tr, LinkRouter, Button } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getDemocracyProposals, GetDemocracyProposalsDataProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';

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
          <Table className='w-full'>
            <thead>
              <Tr>
                <Th>Proposal ID</Th>
                <Th>Block</Th>
                <Th>Action</Th>
                <Th>Seconds</Th>
                <Th>Time</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </thead>
            <tbody>
              {data.list.map((proposal) => {
                return (
                  <Tr key={proposal.proposal_id}>
                    <Td><LinkRouter href={`/democracy_proposal/${proposal.proposal_id}`}>{proposal.proposal_id}</LinkRouter></Td>
                    <Td><LinkRouter href={`/block/${proposal.created_block}`}>{proposal.created_block}</LinkRouter></Td>
                    <Td><LinkRouter href={`/extrinsic?module=${proposal.call_module}&call=${proposal.call_name}`}>{proposal.call_module} ({proposal.call_name})</LinkRouter></Td>
                    <Td><LinkRouter href={`/democracy_proposal/proposal_second/${proposal.proposal_id}`}>{proposal.seconded_count}</LinkRouter></Td>
                    <Td>{proposal.block_timestamp}</Td>
                    <Td>{proposal.status}</Td>
                    <Td>action</Td>
                  </Tr>)
              })}
            </tbody>
          </Table>
        </Boundary>
        <LinkRouter href={`/democracy_proposal_list?status=${type}`}>
          <Button outline className='mt-4'>View Other {data.count - PAGE_ROW} {type} </Button>
        </LinkRouter>
      </Container>
    </PageContent >
  );
}
