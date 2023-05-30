import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { AccountLink } from '@/components/Links'
import { Account } from '@/types/api'
import { Balance } from '@/components/Balance'
import { Identicon } from '@/components/Identicon'

interface Props extends BareProps, BareServerSideProps {
  accounts: Account[]
  useDecimal?: boolean
}

const Page: React.FC<Props> = ({ accounts, useDecimal, chain }) => {
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
        {accounts.map((account, index) => {
          return (
            <Tr key={account.address}>
              <Td>
                <Text>{index + 1}</Text>
              </Td>
              <Td>
                <Identicon account={account.account_display} />
              </Td>
              <Td>
                <AccountLink address={account.address}>{account.count_extrinsic}</AccountLink>
              </Td>
              <Td>
                <Balance
                  value={account.balance_lock}
                  token={{
                    decimals: useDecimal ? chain.nativeTokenConf.decimals : 0,
                    symbol: chain.nativeTokenConf.symbol,
                  }}
                />
              </Td>
              <Td>
                <Balance
                  value={account.balance}
                  token={{
                    decimals: useDecimal ? chain.nativeTokenConf.decimals : 0,
                    symbol: chain.nativeTokenConf.symbol,
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

export default Page
