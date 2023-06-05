'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { AssetHolder, Account, EvmToken } from '@/types/api'
import { unwrap, useTokenDetail, useEvmTokenHolders } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { HolderList } from './HolderList'
import { HolderListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseEvmTokenHoldersArgs = Parameters<typeof useEvmTokenHolders>[1]
interface Props extends BareProps, UseEvmTokenHoldersArgs {
  host: string
  page: number
  row: number
  asset: EvmToken
}

export const EvmTokenHolderListClient: React.FC<Props> = ({ host, asset, page = 0, row = TAB_ROW }) => {
  const { data, isLoading } = useEvmTokenHolders(host, {
    page,
    row,
    contract: asset.contract,
  })
  const holder = unwrap(data)

  if (isLoading) return <Loading />
  if (!holder?.count) return <Empty />
  const holders = holder?.list
  holders.forEach((holder) => {
    if (holder.holder) {
      holder.account_display = {
        address: holder.holder,
      }
    }
  })
  const count = holder?.count || 0

  return (
    <div>
      <HolderList token={asset} holders={holders as AssetHolder[]} showSymbol={false} />
      {count - TAB_ROW > 0 ? (
        <HolderListLink query={{ address: asset.contract }}>
          <Button outline className="mt-4">
            View Other {count - TAB_ROW} Holder
          </Button>
        </HolderListLink>
      ) : null}
    </div>
  )
}
