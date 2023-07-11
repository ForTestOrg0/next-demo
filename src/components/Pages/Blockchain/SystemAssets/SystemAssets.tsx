import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { SystemTokenLink, ExtrinsicLink, SystemTokenHolderLink } from '@/components/Links'
import { Token } from '@/types/api'

interface Props extends BareProps {
  tokens: Token[]
}

export const SystemAssets: React.FC<Props> = ({ tokens }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Symbol</Th>
          <Th>Decimals</Th>
          <Th>Holders</Th>
        </Tr>

        {tokens?.map((item, index) => {
          return (
            <Tr key={item.unique_id}>
              <Td>
                <SystemTokenLink query={{ unique_id: item.unique_id }}></SystemTokenLink>
              </Td>
              <Td>
                <Text>{item.decimals}</Text>
              </Td>
              <Td>
                {item.extends?.holders && item.extends?.holders > 0 ? (
                  <SystemTokenHolderLink
                    query={{
                      unique_id: item.unique_id,
                    }}>
                    {item.extends?.holders}
                  </SystemTokenHolderLink>
                ) : (
                  <Text>{item.extends?.holders}</Text>
                )}
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
