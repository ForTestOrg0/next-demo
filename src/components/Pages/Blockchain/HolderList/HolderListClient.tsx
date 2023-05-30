'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { Token, Account } from '@/types/api'
import { unwrap, useTokenDetail, useTokenHolders } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { HolderList } from './HolderList'
import { CustomTokenHolderLink } from '@/components/Links'
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
  const token = unwrap(data)
  const provider = id?.split('/')[0] || 'system'
  const tokenDetail = token?.[provider]?.[0] as Token
  const { data: holderData, isLoading: isHolderLoading } = useTokenHolders(host, {
    order: 'desc',
    order_field: 'balance',
    page,
    row,
    token: tokenDetail?.symbol,
  })
  const holder = unwrap(holderData)

  if (isLoading || isHolderLoading) return <Loading />
  if (!token || !id) return <Empty />
  const holders = holder?.list as Account[]
  const count = holder?.count || 0

  return (
    <div>
      <HolderList token={tokenDetail} holders={holders} />
      {count - TAB_ROW > 0 ? (
        <CustomTokenHolderLink query={{ customTokenUniqueId: id }}>
          <Button outline className="mt-4">
            View Other {count - TAB_ROW} Holder
          </Button>
        </CustomTokenHolderLink>
      ) : null}
    </div>
  )
}
