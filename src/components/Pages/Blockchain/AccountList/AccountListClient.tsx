'use client'

import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Token, Account } from '@/types/api'
import { unwrap, useTokenDetail, useTokenHolders } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { AccountList } from '.'
import { SystemTokenHolderLink } from '@/components/Links'
import { Button } from '@/ui'

type UseTokenDetail = Parameters<typeof useTokenDetail>[1]
interface Props extends BareProps, BareServerSideProps, UseTokenDetail {
  host: string
  page: number
  row: number
  id: string
  useDecimal?: boolean
}

const AccountListClient: React.FC<Props> = ({ host, chain, useDecimal, id, page = 0, row = TAB_ROW }) => {
  const { data, error, isLoading } = useTokenDetail(host, {
    unique_ids: [id],
    include_extends: true,
  })
  const { data: holderData, isLoading: isHolderLoading } = useTokenHolders(host, {
    order: 'desc',
    order_field: 'balance',
    page,
    row,
    unique_id: id,
  })
  const token = unwrap(data)
  const holder = unwrap(holderData)

  if (isLoading || isHolderLoading) return <Loading />
  if (!token || !id) return <Empty />
  // const provider = id?.split('/').length <= 2 ? 'system' : id?.split('/')[0]
  const tokenDetail = token['system']?.[0] as Token
  const holders = holder?.list as Account[]
  const count = holder?.count || 0
  holders.forEach((holder) => {
    holder.balance_lock = holder.ring_lock || holder.balance_lock || ''
  })

  return (
    <div>
      <AccountList accounts={holders} chain={chain} useDecimal={useDecimal} />
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
export default AccountListClient
