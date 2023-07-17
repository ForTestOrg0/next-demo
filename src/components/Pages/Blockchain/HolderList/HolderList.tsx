import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { AssetHolder } from '@/types/api'
import { Token } from '@/types/page'
import { Balance } from '@/components/Balance'
import { Identicon } from '@/components/Identicon'
import { Rank } from '@/components/Rank'

interface Props extends BareProps {
  token: Token
  holders: AssetHolder[]
  showSymbol?: boolean
  baseRank?: number
}

export const HolderList: React.FC<Props> = ({ baseRank = 0, token, showSymbol = true, holders }) => {
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
              <Td>
                <Rank rank={index + baseRank + 1} />
              </Td>
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
