'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { Token, Account } from '@/types/api'
import { unwrap, useAssets, useTokenHolders } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { AssetList } from '.'
import { AssetListLink } from '@/components/Links'
import { Button } from '@/ui'

type useAssets = Parameters<typeof useAssets>[1]
interface Props extends BareProps, useAssets {
  host: string
  page: number
  row: number
  useDecimal?: boolean
}

const AssetListClient: React.FC<Props> = ({ host, useDecimal, page = 0, row = TAB_ROW }) => {
  const { data, error, isLoading } = useAssets(host, {
    page,
    row,
  })
  const asset = unwrap(data)

  if (isLoading) return <Loading />
  if (!asset) return <Empty />

  return (
    <div>
      <AssetList assets={asset.list} useDecimal={useDecimal} />
      {asset.count - TAB_ROW > 0 ? (
        <AssetListLink query={{}}>
          <Button outline className="mt-4">
            View Other {asset.count - TAB_ROW} Asset
          </Button>
        </AssetListLink>
      ) : null}
    </div>
  )
}
export default AssetListClient
