import { Boundary, PageContent, Container, Flex, Pagination } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { GetParachainBidsProps, getParachainBids } from '@/utils/api/parachain'
import { BidList } from '@/components/Pages/Parachain/BidList'

export const getServerSideProps: GetServerSideProps<{ data: GetParachainBidsProps; page: number } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const host = context.req.headers.host || ''
  const data = await getParachainBids(host, {
    row: PAGE_ROW,
    page: page - 1,
    order: 'auction_index desc',
    status: 0,
  })

  const chainProps = await getChainProps(host)

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
      <Container className="flex-1">
        <Boundary>
          <BidList bids={data.bids} chain={chain} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/bid?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
