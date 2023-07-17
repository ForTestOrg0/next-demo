'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { unwrap, useAssets } from '@/utils/api'
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
}

const AssetListClient: React.FC<Props> = ({ host, page = 0, row = TAB_ROW }) => {
  const { data, error, isLoading } = useAssets(host, {
    page,
    row,
  })
  const asset = unwrap(data)

  if (isLoading) return <Loading />
  if (!asset) return <Empty />

  return (
    <div>
      <AssetList assets={asset.list} />
      {asset.count - row > 0 ? (
        <AssetListLink query={{}}>
          <Button outline className="mt-4">
            View Other {asset.count - row} Asset
          </Button>
        </AssetListLink>
      ) : null}
    </div>
  )
}
export default AssetListClient
