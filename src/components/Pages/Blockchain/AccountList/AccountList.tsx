import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { AccountLink } from '@/components/Links'
import { Account } from '@/types/api'
import { Balance } from '@/components/Balance'
import { Identicon } from '@/components/Identicon'
import { Rank } from '@/components/Rank'

interface Props extends BareProps, BareServerSideProps {
  baseRank?: number
  accounts: Account[]
  useDecimal?: boolean
}

const Page: React.FC<Props> = ({ baseRank = 0, accounts, useDecimal, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Rank</Th>
          <Th>Account</Th>
          <Th>Extrinsics</Th>
          <Th>Locked ({chain.nativeToken.symbol})</Th>
          <Th>Balance ({chain.nativeToken.symbol})</Th>
        </Tr>
        {accounts?.map((account, index) => {
          return (
            <Tr key={account.address}>
              <Td>
                <Rank rank={baseRank + index + 1}></Rank>
              </Td>
              <Td>
                <Identicon account={account.account_display} />
              </Td>
              <Td>
                {account.count_extrinsic > 0 ? (
                  <AccountLink address={account.address}>{account.count_extrinsic}</AccountLink>
                ) : (
                  <Text>{account.count_extrinsic}</Text>
                )}
              </Td>
              <Td>
                <Balance
                  value={account.balance_lock}
                  token={{
                    decimals: useDecimal ? chain.nativeTokenConf.decimals : 0,
                    symbol: chain.nativeTokenConf.symbol,
                  }}
                  showSymbol={false}
                />
              </Td>
              <Td>
                <Balance
                  value={account.balance}
                  token={{
                    decimals: useDecimal ? chain.nativeTokenConf.decimals : 0,
                    symbol: chain.nativeTokenConf.symbol,
                  }}
                  showSymbol={false}
                />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
