import { Boundary, PageContent, Container, Flex, Pagination } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getTransfers, getAssetTransfers, GetTransfersProps, getTokenDetail, getAssetDetail } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps, Token } from '@/types/page'
import { TransferList } from '@/components/Pages/Blockchain/TransferList'

export const getServerSideProps: GetServerSideProps<
  { data: GetTransfersProps; tokenDetail: Token | undefined; page: number } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const asset_unique_id = (context.query.asset_unique_id || '')?.toString()
  const asset_id = (context.query.assetId || '')?.toString()
  let data
  if (asset_id) {
    data = await getAssetTransfers(context.req.headers.host || '', {
      row: PAGE_ROW,
      page: page - 1,
      asset_id,
    })
  } else {
    data = await getTransfers(context.req.headers.host || '', {
      row: PAGE_ROW,
      page: page - 1,
      asset_unique_id,
    })
  }
  let tokenData
  if (asset_unique_id) {
    const data = await getTokenDetail(context.req.headers.host || '', {
      include_extends: true,
      unique_ids: [asset_unique_id],
    })
    const provider = asset_unique_id?.split('/')[0] || 'system'
    tokenData = data.data?.[provider]?.[0] as Token
  } else if (asset_id) {
    const data = await getAssetDetail(context.req.headers.host || '', {
      asset_id,
    })
    tokenData = data.data.metadata
  }
  const chainProps = await getChainProps(context.req.headers.host)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page,
      tokenDetail: tokenData,
      chain: chainProps,
    },
  }
}

export default function Page({ data, tokenDetail, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Boundary>
          <TransferList transfers={data.transfers} chain={chain} token={tokenDetail ? tokenDetail : chain.nativeTokenConf} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/transfer?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
