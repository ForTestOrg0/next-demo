import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { BlockLink, ExtrinsicLink } from '@/components/Links'
import { Event } from '@/types/api'
import { TimeFromNow } from '@/components/Time'
import { BlockEventType } from './BlockEventType'

interface Props extends BareProps {
  events: Event[]
  disableColumn?: Partial<Record<'block' | 'time' | 'type', boolean>>
}

export const BlockEvents: React.FC<Props> = ({ events, disableColumn }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Event Id</Th>
          {!disableColumn?.block && <Th>Block</Th>}
          <Th>Extrinsic Id</Th>
          {!disableColumn?.time && <Th>Time</Th>}
          <Th>Action</Th>
          {!disableColumn?.type && <Th>Type</Th>}
        </Tr>

        {events?.map((item, index) => {
          const blockNum = item.event_index.split('-')[0]

          return (
            <Tr key={`${item.event_index}${item.id}`}>
              <Td>
                <Text>{item.event_index}</Text>
              </Td>
              {!disableColumn?.block && (
                <Td>
                  <BlockLink blockNumber={blockNum} />
                </Td>
              )}
              <Td>
                <ExtrinsicLink empty={!item.extrinsic_index} extrinsicIndex={item.extrinsic_index} />
              </Td>
              {!disableColumn?.time && (
                <Td>
                  <TimeFromNow date={item.block_timestamp} />
                </Td>
              )}
              <Td>
                <ExtrinsicLink
                  empty={!item.module_id}
                  query={{
                    module: item?.module_id.toLowerCase(),
                    event: item?.event_id.toLowerCase(),
                  }}>{`${item.module_id} (${item.event_id})`}</ExtrinsicLink>
              </Td>
              {!disableColumn?.type && (
                <Td>
                  <BlockEventType phase={item.phase} />
                </Td>
              )}
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
