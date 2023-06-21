import { Boundary, PageContent, Container, Flex, Pagination } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { GetParachainAuctionsProps, getParachainAuctions, getParachainMeta } from '@/utils/api/parachain'
import { AuctionList } from '@/components/Pages/Parachain/AuctionList'
import { ParachainMeta } from '@/types/api'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { data: GetParachainAuctionsProps; page: number; parachainMetaInfo: ParachainMeta } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const data = await getParachainAuctions(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
  })
  const parachainMetaInfo = await getParachainMeta(subdomain)
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !chainProps || parachainMetaInfo.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page,
      chain: chainProps,
      parachainMetaInfo: parachainMetaInfo.data,
    },
  }
}

export default function Page({ data, chain, page, parachainMetaInfo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Boundary>
          <AuctionList auctions={data.auctions} chain={chain} metaInfo={parachainMetaInfo} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/block?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
