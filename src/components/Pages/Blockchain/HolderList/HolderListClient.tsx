'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { Token, Holder } from '@/types/api'
import { unwrap, useTokenDetail, useTokenHolders } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { HolderList } from './HolderList'
import { SystemTokenHolderLink } from '@/components/Links'
import { Button } from '@/ui'

type UseTokenDetail = Parameters<typeof useTokenDetail>[1]
interface Props extends BareProps, UseTokenDetail {
  host: string
  page: number
  row: number
  id: string
}

export const HolderListClient: React.FC<Props> = ({ host, id, page = 0, row = TAB_ROW }) => {
  const { data, error, isLoading } = useTokenDetail(host, {
    unique_ids: [id],
    include_extends: true,
  })
  const { data: holderData } = useTokenHolders(host, {
    order: 'desc',
    order_field: 'balance',
    page,
    row,
    unique_id: id,
  })
  const token = unwrap(data)
  const holder = unwrap(holderData)

  if (isLoading) return <Loading />
  if (!token || !id) return <Empty />
  // const provider = id?.split('/').length <= 2 ? 'system' : id?.split('/')[0]
  const tokenDetail = token['system']?.[0] as Token
  const holders = holder?.list as Holder[]
  const count = holder?.count || 0

  return (
    <div>
      <HolderList token={tokenDetail} holders={holders} />
      {count - TAB_ROW > 0 ? (
        <SystemTokenHolderLink query={{ unique_id: id }}>
          <Button outline className="mt-4">
            View Other {count - TAB_ROW} Holder
          </Button>
        </SystemTokenHolderLink>
      ) : null}
    </div>
  )
}
