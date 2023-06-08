'use client'

import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { AssetHolder, Account, EvmToken } from '@/types/api'
import { unwrap, useTokenDetail, useEvmTransactions } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { TransactionList } from './TransactionList'
import { EvmTransactionListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseEvmTransactionsArgs = Parameters<typeof useEvmTransactions>[1]
interface Props extends BareProps, BareServerSideProps, UseEvmTransactionsArgs {
  host: string
  page: number
  row: number
  token: EvmToken
}

export const TransactionListClient: React.FC<Props> = ({ host, token, page = 0, row = TAB_ROW }) => {
  const { data, isLoading } = useEvmTransactions(host, {
    page,
    row,
    contract: token.contract,
  })
  const transactions = unwrap(data)

  if (isLoading) return <Loading />
  if (!transactions?.count) return <Empty />
  const transactionList = transactions?.list
  const count = transactions?.count || 0

  return (
    <div>
      <TransactionList token={token} transactions={transactionList} />
      {count - TAB_ROW > 0 ? (
        <EvmTransactionListLink query={{ block: token.contract }}>
          <Button outline className="mt-4">
            View Other {count - TAB_ROW} Transaction
          </Button>
        </EvmTransactionListLink>
      ) : null}
    </div>
  )
}
