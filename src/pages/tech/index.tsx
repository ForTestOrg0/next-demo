import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getTechcommProposals, GetTechcommProposalsProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { TechcommProposalList } from '@/components/Governance';

export const getServerSideProps: GetServerSideProps<{
  data: GetTechcommProposalsProps,
  page: number,
}> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const data = await getTechcommProposals(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1 });

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
        <Text block bold className='mb-2 break-all'>Technical Committee Proposals</Text>
        <Boundary>
          <TechcommProposalList proposals={data.list} />
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/tech?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}
