import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getTreasuryTips, GetTreasuryTipsProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { TreasuryTipsList } from '@/components/Governance';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';
import { serializeContext } from '@/utils/contextProps';

export const getServerSideProps: GetServerSideProps<{
  data: GetTreasuryTipsProps,
  page: number,
} & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const data = await getTreasuryTips(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1 });
  const chainProps = await getChainProps(context.req.headers.host);
  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page: page,
      chain: chainProps,
      context: serializeContext(context),
    },
  }
}

export default function Layout({ data, page, chain }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-4 break-all'>Treasury Tips</Text>
        <Boundary>
          <TreasuryTipsList proposals={data.list} chain={chain}/>
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/treasury_tip?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}
