import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getTechcommProposals, GetTechcommProposalsProps, getTreasuryProposals, GetTreasuryProposalsProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { TechcommProposalList, TreasuryProposalList } from '@/components/Governance';

export const getServerSideProps: GetServerSideProps<{
  data: GetTreasuryProposalsProps,
  page: number,
}> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const data = await getTreasuryProposals(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1 });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page: page,
    },
  }
}

export default function Layout({ data, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-4 break-all'>Treasury Proposals</Text>
        <Boundary>
          <TreasuryProposalList proposals={data.list} />
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/treasury?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}
