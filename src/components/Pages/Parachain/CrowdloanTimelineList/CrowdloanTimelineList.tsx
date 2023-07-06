import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { BlockLink, EventLink, ExtrinsicLink } from '@/components/Links'
import { ParachainFundTimeline } from '@/types/api'
import { TimeFromNow } from '@/components/Time'

interface Props extends BareProps, BareServerSideProps {
  timelines: ParachainFundTimeline[]
}

export const CrowdloanTimelineList: React.FC<Props> = ({ children, className, chain, style, timelines }) => {
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
        {timelines.map((timeline) => {
          return (
            <Tr key={timeline.extrinsic_index}>
              <Td>
                <ExtrinsicLink extrinsicIndex={timeline.extrinsic_index} query={{ event: timeline.event_index }}>
                  {timeline.event_index}
                </ExtrinsicLink>
              </Td>
              <Td>
                <BlockLink blockNumber={timeline.block_num} />
              </Td>
              <Td>
                <ExtrinsicLink extrinsicIndex={timeline.extrinsic_index} />
              </Td>
              <Td>
                <TimeFromNow date={timeline.block_timestamp} />
              </Td>
              <Td>
                <EventLink
                  query={{
                    module: timeline.module_name,
                    event: timeline.event_name,
                  }}>
                  {timeline.module_name} ({timeline.event_name})
                </EventLink>
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
