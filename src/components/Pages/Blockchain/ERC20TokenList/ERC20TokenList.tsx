import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { AccountLink, ERC20TokenLink } from '@/components/Links'
import { EvmToken } from '@/types/api'
import { Balance } from '@/components/Balance'
import { Identicon } from '@/components/Identicon'
import { formatHash } from '@/utils/formatText'

interface Props extends BareProps {
  tokens: EvmToken[]
  useDecimal?: boolean
}

const Page: React.FC<Props> = ({ tokens, useDecimal }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Symbol</Th>
          <Th>Name</Th>
          <Th>Contract</Th>
          <Th>Decimals</Th>
          <Th>Total Supply</Th>
        </Tr>
        {tokens.map((token, index) => {
          return (
            <Tr key={token.contract}>
              <Td>
                <ERC20TokenLink address={token.contract}>{token.symbol}</ERC20TokenLink>
              </Td>
              <Td>
                <Text>{token.name}</Text>
              </Td>
              <Td>
                <ERC20TokenLink address={token.contract}>{formatHash(token.contract)}</ERC20TokenLink>
              </Td>
              <Td>
                <Text>{token.decimals}</Text>
              </Td>
              <Td>
                <Balance value={token.totalSupply} showSymbol={false} token={token} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
