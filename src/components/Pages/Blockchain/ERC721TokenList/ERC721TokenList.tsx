import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { AccountLink, ERC721TokenLink } from '@/components/Links'
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
          <Th>Transfers</Th>
          <Th>Holders</Th>
          <Th>Total Supply</Th>
        </Tr>
        {tokens.map((token, index) => {
          return (
            <Tr key={token.contract}>
              <Td>
                <ERC721TokenLink address={token.contract}>{token.symbol}</ERC721TokenLink>
              </Td>
              <Td>
                <Text>{token.name}</Text>
              </Td>
              <Td>
                <ERC721TokenLink address={token.contract}>{formatHash(token.contract)}</ERC721TokenLink>
              </Td>
              <Td>
                <Text>{token.transfer_count}</Text>
              </Td>
              <Td>
                <Text>{token.holders}</Text>
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
