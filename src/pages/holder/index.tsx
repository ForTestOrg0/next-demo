import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import {
  getAssetHolders,
  GetAssetHoldersProps,
  GetEvmTokenHoldersProps,
  getEvmTokens,
  getTokenDetail,
  getAssetDetail,
  getEvmTokenHolders,
} from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { AssetHolder, EvmToken } from '@/types/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps, Token } from '@/types/page'
import { HolderList } from '@/components/Pages/Blockchain/HolderList'
import { AssetLink, ERC20TokenLink } from '@/components/Links'

export const getServerSideProps: GetServerSideProps<
  {
    data: GetAssetHoldersProps | GetEvmTokenHoldersProps
    asset_id: string
    tokenDetail: (Token | EvmToken) | null
    page: number
  } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const asset_unique_id = (context.query.asset_unique_id || '')?.toString()
  const asset_id = (context.query.assetId || '')?.toString()
  const address = (context.query.address || '')?.toString()
  let data
  if (asset_id) {
    data = await getAssetHolders(context.req.headers.host || '', {
      row: PAGE_ROW,
      page: page - 1,
      asset_id,
    })
  } else if (address) {
    data = await getEvmTokenHolders(context.req.headers.host || '', {
      row: PAGE_ROW,
      page: page - 1,
      contract: address,
    })
    data.data?.list.forEach((holder) => {
      if (holder.holder) {
        holder.account_display = {
          address: holder.holder,
        }
      }
    })
  }
  let tokenData = null
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
  } else if (address) {
    const data = await getEvmTokens(context.req.headers.host || '', {
      contracts: [address || ''],
    })
    tokenData = data.data.list[0]
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
      asset_id,
      tokenDetail: tokenData,
      chain: chainProps,
    },
  }
}

export default function Page({ data, tokenDetail, asset_id, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const holders = data?.list as AssetHolder[]
  holders.forEach((holder) => {
    if (!holder.account_display && holder.holder) {
      holder.account_display = holder.holder
    }
  })
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Holders
        </Text>
        {tokenDetail && (tokenDetail as EvmToken).category === 'erc20' && (
          <Text block bold className="mb-4 break-all">
            For <ERC20TokenLink address={(tokenDetail as EvmToken).contract}>{tokenDetail.symbol}</ERC20TokenLink>
          </Text>
        )}
        {tokenDetail && !(tokenDetail as EvmToken).category && (
          <Text block bold className="mb-4 break-all">
            For <AssetLink assetId={asset_id}>{tokenDetail.symbol}</AssetLink>
          </Text>
        )}
        <Boundary>
          <HolderList token={tokenDetail ? tokenDetail : chain.nativeTokenConf} holders={holders} showSymbol={false} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/holder?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
