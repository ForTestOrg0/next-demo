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
  getTokenHolders,
  GetTokenHoldersProps,
} from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { APIWarpperProps, AssetHolder, EvmToken } from '@/types/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps, Token } from '@/types/page'
import { HolderList } from '@/components/Pages/Blockchain/HolderList'
import { AssetLink, ERC20TokenLink } from '@/components/Links'
import { getSubdomainFromHeaders, objectToSearchParams } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    data: GetAssetHoldersProps | GetEvmTokenHoldersProps | GetTokenHoldersProps
    assetId: string
    uniqueId: string
    address: string
    tokenInfo: (Token | EvmToken) | null
    page: number
  } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  const unique_id = (context.query.unique_id || '')?.toString()
  const asset_id = (context.query.asset_id || '')?.toString()
  const address = (context.query.address || '')?.toString()

  const chainProps = await getChainProps(subdomain)

  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  let tokenHolders: APIWarpperProps<GetTokenHoldersProps>
  let tokenInfo: Token
  let assetHolders: APIWarpperProps<GetAssetHoldersProps>
  let assetTokenInfo: Token
  let evmTokenHolders: APIWarpperProps<GetEvmTokenHoldersProps>
  let evmTokenInfo: EvmToken

  if (unique_id) {
    tokenHolders = await getTokenHolders(subdomain, {
      row: PAGE_ROW,
      page: page - 1,
      unique_id,
    })

    const data = await getTokenDetail(subdomain, {
      include_extends: true,
      unique_ids: [unique_id],
    })
    const provider = unique_id?.indexOf('/') > 0 ? unique_id?.split('/')[0] : 'system'
    tokenInfo = data.data?.[provider]?.[0] as Token

    return {
      props: {
        data: tokenHolders.data,
        page,
        assetId: asset_id,
        address,
        uniqueId: unique_id,
        tokenInfo,
        chain: chainProps,
      },
    }
  }

  if (asset_id) {
    assetHolders = await getAssetHolders(subdomain, {
      row: PAGE_ROW,
      page: page - 1,
      asset_id,
    })

    const data = await getAssetDetail(subdomain, {
      asset_id,
    })
    assetTokenInfo = data.data.metadata

    return {
      props: {
        data: assetHolders.data,
        page,
        assetId: asset_id,
        address,
        uniqueId: unique_id,
        tokenInfo: assetTokenInfo,
        chain: chainProps,
      },
    }
  }
  if (address) {
    evmTokenHolders = await getEvmTokenHolders(subdomain, {
      row: PAGE_ROW,
      page: page - 1,
      contract: address,
    })
    evmTokenHolders.data?.list.forEach((holder) => {
      if (holder.holder) {
        holder.account_display = {
          address: holder.holder,
        }
      }
    })

    const data = await getEvmTokens(subdomain, {
      contracts: [address || ''],
    })
    evmTokenInfo = data.data.list[0]

    return {
      props: {
        data: evmTokenHolders.data,
        page,
        assetId: asset_id,
        address,
        uniqueId: unique_id,
        tokenInfo: evmTokenInfo,
        chain: chainProps,
      },
    }
  }

  return {
    notFound: true,
  }
}

export default function Page({ data, tokenInfo, assetId, chain, page, uniqueId, address }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        {tokenInfo && (tokenInfo as EvmToken).category === 'erc20' && (
          <Text block bold className="mb-4 break-all">
            For <ERC20TokenLink address={(tokenInfo as EvmToken).contract}>{tokenInfo.symbol}</ERC20TokenLink>
          </Text>
        )}
        {tokenInfo && !(tokenInfo as EvmToken).category && (
          <Text block bold className="mb-4 break-all">
            For <AssetLink assetId={assetId}>{tokenInfo.symbol}</AssetLink>
          </Text>
        )}
        <Boundary>
          <HolderList token={tokenInfo ? tokenInfo : chain.nativeTokenConf} holders={holders} showSymbol={false} baseRank={(page - 1) * PAGE_ROW} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={data.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) =>
              `/holder?${objectToSearchParams({
                page: _page.toString(),
                address: address,
                unique_id: uniqueId,
                asset_id: assetId,
              })}`
            }
          />
        </Flex>
      </Container>
    </PageContent>
  )
}
