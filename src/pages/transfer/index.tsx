import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getTransfers, getAssetTransfers, GetTransfersProps, getTokenDetail, getAssetDetail } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps, Token } from '@/types/page'
import { TransferList } from '@/components/Pages/Blockchain/TransferList'
import { AssetLink } from '@/components/Links'
import { getSubdomainFromHeaders, objectToSearchParams } from '@/utils/url'
import { TransferHistoryChart } from '@/components/Pages/Blockchain/TransferHistoryChart'

export const getServerSideProps: GetServerSideProps<
  { data: GetTransfersProps; assetId: string; assetUniqueId: string; tokenDetail: Token | null; page: number; host: string } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  const asset_unique_id = (context.query.asset_unique_id || '')?.toString()
  const asset_id = (context.query.asset_id || '')?.toString()
  let data
  if (asset_id) {
    data = await getAssetTransfers(subdomain, {
      row: PAGE_ROW,
      page: page - 1,
      asset_id,
    })
  } else if (asset_unique_id) {
    data = await getTransfers(subdomain, {
      row: PAGE_ROW,
      page: page - 1,
      asset_unique_id,
    })
  } else {
    data = await getTransfers(subdomain, {
      row: PAGE_ROW,
      page: page - 1,
    })
  }
  let tokenData = null
  if (asset_unique_id) {
    const data = await getTokenDetail(subdomain, {
      include_extends: true,
      unique_ids: [asset_unique_id],
    })
    const provider = asset_unique_id?.indexOf('/') > 0 ? asset_unique_id?.split('/')[0] : 'system'
    tokenData = data.data?.[provider]?.[0] as Token
  } else if (asset_id) {
    const data = await getAssetDetail(subdomain, {
      asset_id,
    })
    tokenData = data.data.metadata
  }
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page,
      assetUniqueId: asset_unique_id,
      assetId: asset_id,
      tokenDetail: tokenData,
      chain: chainProps,
      host: subdomain,
    },
  }
}

export default function Page({
  data,
  tokenDetail,
  assetId,
  assetUniqueId,
  chain,
  page,
  host,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        {!assetId && !assetUniqueId && (
          <div className="mb-module">
            <TransferHistoryChart host={host} chain={chain} />
          </div>
        )}
        <Text block bold className="mb-4 break-all">
          Transfers
        </Text>
        {!!assetId && (
          <Text block bold className="mb-4 break-all">
            For <AssetLink assetId={assetId}>{tokenDetail?.symbol}</AssetLink>
          </Text>
        )}
        <Boundary>
          <TransferList transfers={data.transfers} chain={chain} token={tokenDetail ? tokenDetail : chain.nativeTokenConf} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={data.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) =>
              `/transfer?${objectToSearchParams({
                asset_unique_id: assetUniqueId,
                asset_id: assetId,
                page: _page.toString(),
              })}`
            }
          />
        </Flex>
      </Container>
    </PageContent>
  )
}
