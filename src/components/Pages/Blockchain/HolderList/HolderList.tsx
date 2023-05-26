import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { SystemTokenLink, ExtrinsicLink } from '@/components/Links'
import { Token, Holder } from '@/types/api'
import { Identicon } from '@/components/Identicon'

interface Props extends BareProps {
  token: Token
  holders: Holder[]
  pageSize?: number
  current?: number
}

export const HolderList: React.FC<Props> = ({ token, holders, current = 1, pageSize = 10 }) => {
  const getRowIndex = (index = 0) => {
    const count = index + (current - 1) * pageSize + 1
    return count.toString()
  }
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Rank</Th>
          <Th>Account</Th>
          <Th>Extrinsic</Th>
          <Th>Locked</Th>
          <Th>Balance</Th>
        </Tr>

        {holders?.map((item, index) => {
          return (
            <Tr key={item.address}>
              <Td>{getRowIndex(index)}</Td>
              <Td>
                <Identicon account={item.account_display} />
              </Td>
              <Td>{item.count_extrinsic}</Td>
              <Td>{item.balance_lock}</Td>
              <Td>{item.balance}</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
