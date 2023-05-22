import { Boundary, PageContent, Container, Text, TabsServer, LinkRouter, Button, Flex, Pagination } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getBlocks, GetBlocksProps, getBountiesProposals, GetBountiesProposalsProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { BountiesList } from '@/components/Governance';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';
import { BlockList } from '@/components/Pages/Blockchain/BlockList';

const statusMap = {
  waiting: 'active',
  historical: 'historical',
}

export const getServerSideProps: GetServerSideProps<{ data: GetBlocksProps, page: number, } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const data = await getBlocks(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1 });
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
          <BlockList blocks={data.blocks} chain={chain} />
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/block?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}
