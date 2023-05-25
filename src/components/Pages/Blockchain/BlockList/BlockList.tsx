import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { BlockLink, ValidatorLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { Block } from '@/types/api'
import { BlockStatus } from './BlockStatus'
import { Identicon } from '@/components/Identicon'

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
                <ValidatorLink address={block?.account_display?.address}>
                  <Identicon account={block.account_display} />
                </ValidatorLink>
              </Td>
              <Td>
                <BlockLink blockNumber={block.hash} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
