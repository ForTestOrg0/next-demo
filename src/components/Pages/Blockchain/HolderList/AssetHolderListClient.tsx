'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { AssetHolder, Asset } from '@/types/api'
import { unwrap, useAssetHolders } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { HolderList } from './HolderList'
import { HolderListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseAssetHoldersArgs = Parameters<typeof useAssetHolders>[1]
interface Props extends BareProps, UseAssetHoldersArgs {
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
      <HolderList token={asset.metadata} holders={holders} showSymbol={false} baseRank={page * row} />
      {count - row > 0 ? (
        <HolderListLink query={{ asset_id: asset.asset_id }}>
          <Button outline className="mt-4">
            View Other {count - row} Holder
          </Button>
        </HolderListLink>
      ) : null}
    </div>
  )
}
