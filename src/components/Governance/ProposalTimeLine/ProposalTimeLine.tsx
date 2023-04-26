import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr } from '@/ui';
import { ExtrinsicLink } from '@/components/Links';
import { ProposalTimeline } from '@/types/api';
import { TimeFromNow } from '@/components/Time';

interface Props extends BareProps {
  timeline: ProposalTimeline[];
}

const ProposalTimeLine: React.FC<Props> = ({ timeline }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Status</Th>
        <Th>Time</Th>
        <Th>Event ID</Th>
      </Tr>

      {timeline.map((item, index) => {
        return (
          <Tr key={`${item.extrinsic_index}${item.index}`}>
            <Td>
              {item.status}
            </Td>
            <Td>
              <TimeFromNow date={item.time}/>
            </Td>
            <Td>
              <ExtrinsicLink extrinsicIndex={item.extrinsic_index} />
            </Td>
          </Tr>
        );
      })}
    </tbody>
  </Table>)
};

export default ProposalTimeLine;
