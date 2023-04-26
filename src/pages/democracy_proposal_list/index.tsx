import { Boundary, PageContent, Container, Text, Table, Th, Td, Tr, LinkRouter, Pagination, Flex } from '@/ui';
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

export const getServerSideProps: GetServerSideProps<{
  data: GetDemocracyProposalsDataProps,
  type: keyof typeof orderFieldMap,
  page: number,
}> = async (context) => {
  const tab = (context.query.status || '')?.toString() as (keyof typeof orderFieldMap);
  const page = parseInt(context.query.page as string) || 1;

  const type = typeof orderFieldMap[tab] === 'undefined' ? 'waiting' : tab;
  const orderField = typeof orderFieldMap[type] === 'undefined' ? orderFieldMap.waiting : orderFieldMap[type];
  const status = typeof statusMap[type] === 'undefined' ? statusMap.waiting : statusMap[type];
  const data = await getDemocracyProposals(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1, "order_field": orderField, "status": status });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      type,
      page: page,
    },
  }
}

export default function Layout({ data, type, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2'>Democracy Proposals - {type} ({data.count})</Text>
        <Boundary>
          <ProposalList proposals={data.list} />
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/democracy_proposal_list?status=${type}&page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}
