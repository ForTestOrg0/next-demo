import { Boundary, PageContent, Container, Flex, Pagination } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getExtrinsics, GetExtrinsicsProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';
import { BlockExtrinsics } from '@/components/Pages/Blockchain/BlockExtrinsics';

export const getServerSideProps: GetServerSideProps<{ data: GetExtrinsicsProps, page: number, } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const data = await getExtrinsics(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1, signed: 'signed' });
  const chainProps = await getChainProps(context.req.headers.host);
  
  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ data, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Boundary>
          <BlockExtrinsics extrinsics={data.extrinsics} />
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/block?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}
