import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { CustomTokenLink } from '@/components/Links'
import { Token } from '@/types/api'

interface Props extends BareProps {
  tokens: Token[]
}

export const CustomAssets: React.FC<Props> = ({ tokens }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Token ID</Th>
          <Th>Symbol</Th>
          <Th>Decimals</Th>
          <Th>Holders</Th>
        </Tr>

        {tokens?.map((item, index) => {
          return (
            <Tr key={item.unique_id}>
              <Td>
                <CustomTokenLink query={{ customTokenId: item.unique_id }}>{item.currency_id}</CustomTokenLink>
              </Td>
              <Td>{item.symbol}</Td>
              <Td>{item.decimals}</Td>
              <Td>{item.extends?.holders}</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
