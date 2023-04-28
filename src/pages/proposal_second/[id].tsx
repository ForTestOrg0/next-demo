import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getDemocracySeconded, GetDemocracySecondedProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import ProposalSeconds from '@/components/Governance/ProposalSeconds/ProposalSeconds';

export const getServerSideProps: GetServerSideProps<{
  data: GetDemocracySecondedProps;
  page: number;
  row: number;
  proposalId: number;
}, {
  id: string;
}> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const proposalId = parseInt(context.params?.id.toString() || '');

  if (Number.isNaN(proposalId)) {
    return {
      notFound: true,
    }
  }

  const data = await getDemocracySeconded(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1, proposal_id: proposalId });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page: page,
      row: PAGE_ROW,
      proposalId
    },
  }
}

export default function Layout({ data, page, row, proposalId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2'>For Democracy Proposal#{proposalId} ({data.count})</Text>
        <Boundary>
          <ProposalSeconds total={data.count} start={(page - 1) * row} seconds={data.list} />
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/proposal_second/${proposalId}?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}
