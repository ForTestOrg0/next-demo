import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { SystemTokenLink, ExtrinsicLink } from '@/components/Links'
import { AssetHolder } from '@/types/api'
import { Token } from '@/types/page'
import { Balance } from '@/components/Balance'
import { Identicon } from '@/components/Identicon'

interface Props extends BareProps {
  token: Token
  holders: AssetHolder[]
  pageSize?: number
  showSymbol?: boolean
  current?: number
}

export const HolderList: React.FC<Props> = ({ token, showSymbol = true, holders, current = 1, pageSize = 10 }) => {
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
          <Th>Balance</Th>
        </Tr>

        {holders?.map((item, index) => {
          return (
            <Tr key={item.account_display.address}>
              <Td>{getRowIndex(index)}</Td>
              <Td>
                <Identicon account={item.account_display} />
              </Td>
              <Td>
                <Balance
                  showSymbol={showSymbol}
                  value={item.balance}
                  token={{
                    decimals: token.decimals,
                    symbol: token.symbol,
                  }}
                />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
