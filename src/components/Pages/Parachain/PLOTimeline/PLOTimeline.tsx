import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Timeline } from '@/ui'
import { ExtrinsicLink, ParachainLink } from '@/components/Links'
import { ParachainTimeline } from '@/types/api'
import { TimeFromNow } from '@/components/Time'

interface Props extends BareProps {
  timelines: ParachainTimeline[]
}

const Component: React.FC<Props> = ({ children, className, style, timelines }) => {
  return (
    <div className="flex">
      <Timeline timelines={timelines}></Timeline>
      <Table className="w-full">
        <tbody>
          <Tr>
            <Th>Status</Th>
            <Th>Time</Th>
            <Th>Extrinsic Index</Th>
          </Tr>
          {timelines.map((timeline) => {
            return (
              <Tr key={timeline.extrinsic_index}>
                <Td>
                  <ParachainLink id={timeline.para_id} />
                </Td>
                <Td>
                  <TimeFromNow date={timeline.block_timestamp} />
                </Td>
                <Td>
                  <ExtrinsicLink extrinsicIndex={timeline.extrinsic_index} />
                </Td>
              </Tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Component
