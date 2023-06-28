import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { EraStat } from '@/types/api'
import { BlockLink } from '@/components/Links'
import { formatNumber } from '@/utils/formatBalance'

interface Props extends BareProps, BareServerSideProps {
  eraStat: EraStat[]
}

export const EraList: React.FC<Props> = ({ chain, eraStat }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Era</Th>
          <Th>Start Block</Th>
          <Th>End Block</Th>
          <Th>Reward Point</Th>
          <Th>Blocks Produced</Th>
        </Tr>

        {eraStat?.map((item, index) => {
          return (
            <Tr key={item.era}>
              <Td>
                <Text>{item.era}</Text>
              </Td>
              <Td>
                <BlockLink blockNumber={item.start_block_num} />
              </Td>
              <Td>
                <BlockLink blockNumber={item.end_block_num} />
              </Td>
              <Td>
                <Text>{formatNumber(item.reward_point)}</Text>
              </Td>
              <Td>
                <Text>{formatNumber(item.block_produced.split(',').length)}</Text>
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
