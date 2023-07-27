import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { BlockLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { Block } from '@/types/api'
import { BlockStatus } from './BlockStatus'
import { Identicon } from '@/components/Identicon'
import { formatHash } from '@/utils/formatText'

interface Props extends BareProps, BareServerSideProps {
  blocks: Block[]
}

const Page: React.FC<Props> = ({ blocks, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Block</Th>
          <Th>Status</Th>
          <Th>Time</Th>
          <Th>Extrinsics</Th>
          <Th>Events</Th>
          <Th>Validator</Th>
          <Th>Block hash</Th>
        </Tr>
        {blocks.map((block) => {
          return (
            <Tr key={block.hash}>
              <Td>
                <BlockLink blockNumber={block.block_num} />
              </Td>
              <Td>
                <BlockStatus finalized={block.finalized} />
              </Td>
              <Td>
                <TimeFromNow date={block.block_timestamp} />
              </Td>
              <Td>
                <BlockLink blockNumber={block.block_num} query={{ tab: 'extrinsic' }}>
                  {block.extrinsics_count}
                </BlockLink>
              </Td>
              <Td>
                <BlockLink blockNumber={block.block_num} query={{ tab: 'event' }}>
                  {block.event_count}
                </BlockLink>
              </Td>
              <Td>
                <Identicon account={block.account_display} type="validator" />
              </Td>
              <Td>
                <BlockLink blockNumber={block.hash}>{formatHash(block.hash)}</BlockLink>
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
