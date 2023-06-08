import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { SystemTokenLink, ExtrinsicLink } from '@/components/Links'
import { EvmTransaction } from '@/types/api'
import { TimeFromNow } from '@/components/Time'
import { Token } from '@/types/page'
import { Balance } from '@/components/Balance'
import { Identicon } from '@/components/Identicon'
import { formatHash } from '@/utils/formatText'
import { TransferStatus } from './TransferStatus'

interface Props extends BareProps {
  token: Token
  transactions: EvmTransaction[]
  pageSize?: number
  showSymbol?: boolean
  current?: number
}

export const TransactionList: React.FC<Props> = ({ token, showSymbol = true, transactions, current = 1, pageSize = 10 }) => {
  const getRowIndex = (index = 0) => {
    const count = index + (current - 1) * pageSize + 1
    return count.toString()
  }
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Txn Hash</Th>
          <Th>From</Th>
          <Th>To</Th>
          <Th>Method</Th>
          <Th>Time</Th>
          <Th>Txn Fee</Th>
          <Th>Result</Th>
        </Tr>

        {transactions?.map((item, index) => {
          return (
            <Tr key={item.hash}>
              <Td>
                <ExtrinsicLink extrinsicIndex={item.hash}>{formatHash(item.hash)}</ExtrinsicLink>
              </Td>
              <Td>
                <Identicon account={item.from_display} />
              </Td>
              <Td>
                <Identicon account={item.to_display} />
              </Td>
              <Td>{item.method}</Td>
              <Td>
                <TimeFromNow date={item.block_timestamp} />
              </Td>
              <Td>{item.gas_used}</Td>
              <Td>
                <TransferStatus success={item.success} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
