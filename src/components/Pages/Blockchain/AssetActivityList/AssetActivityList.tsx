import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { BlockLink, ExtrinsicLink, EventLink } from '@/components/Links'
import { AssetActivity } from '@/types/api'
import { TimeFromNow } from '@/components/Time'

interface Props extends BareProps {
  events: AssetActivity[]
}

export const AssetActivityList: React.FC<Props> = ({ events }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Event ID</Th>
          <Th>Block</Th>
          <Th>Extrinsic ID</Th>
          <Th>Time</Th>
          <Th>Action</Th>
        </Tr>

        {events?.map((item, index) => {
          const blockNum = item.event_index.split('-')[0]

          return (
            <Tr key={`${item.event_index}`}>
              <Td>
                <Text>{item.event_index}</Text>
              </Td>
              <Td>
                <BlockLink blockNumber={blockNum} />
              </Td>
              <Td>
                <ExtrinsicLink empty={!item.extrinsic_index} extrinsicIndex={item.extrinsic_index} />
              </Td>
              <Td>
                <TimeFromNow date={item.block_timestamp} />
              </Td>
              <Td>
                <EventLink
                  query={{
                    module: item?.module_id.toLowerCase(),
                    event: item?.event_id.toLowerCase(),
                  }}>{`${item.module_id} (${item.event_id})`}</EventLink>
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
