'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { AssetHolder, Account, Asset } from '@/types/api'
import { unwrap, useTokenDetail, useAssetHolders } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { HolderList } from './HolderList'
import { CustomTokenHolderLink } from '@/components/Links'
import { Button } from '@/ui'

type useAssetHoldersArgs = Parameters<typeof useAssetHolders>[1]
interface Props extends BareProps, useAssetHoldersArgs {
  host: string
  page: number
  row: number
  asset: Asset
}

export const AssetHolderListClient: React.FC<Props> = ({ host, asset, page = 0, row = TAB_ROW }) => {
  const { data, isLoading } = useAssetHolders(host, {
    page,
    row,
    asset_id: asset?.asset_id,
  })
  const holder = unwrap(data)

  if (isLoading) return <Loading />
  if (!holder?.count) return <Empty />
  const holders = holder?.list as AssetHolder[]
  holders.forEach((holder) => {
    if (holder.holder) {
      holder.account_display = holder.holder
    }
  })
  const count = holder?.count || 0

  return (
    <div>
      <HolderList token={asset.metadata} holders={holders} showSymbol={false} />
      {count - TAB_ROW > 0 ? (
        <CustomTokenHolderLink query={{ assetId: asset.asset_id }}>
          <Button outline className="mt-4">
            View Other {count - TAB_ROW} Holder
          </Button>
        </CustomTokenHolderLink>
      ) : null}
    </div>
  )
}
