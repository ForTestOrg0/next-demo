import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr } from '@/ui';
import { BlockLink, ExtrinsicLink } from '@/components/Links';
import { ProposalTimeline } from '@/types/api';
import { TimeFromNow } from '@/components/Time';

interface Props extends BareProps {
  timeline: ProposalTimeline[];
}

const ProposalTimeLine: React.FC<Props> = ({ timeline }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Status</Th>
          <Th>Time</Th>
          <Th>Event ID</Th>
        </Tr>

        {timeline.map((item, index) => {
          return (
            <Tr key={`${item.block}${item.index}`}>
              <Td>{item.status}</Td>
              <Td>
                <TimeFromNow date={item.time} />
              </Td>
              <Td>
                <BlockLink
                  blockNumber={item.block}
                  query={{ tab: 'event', event: `${item.block}-${item.index}` }}
                >
                  {item.block}-{item.index}
                </BlockLink>
              </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ProposalTimeLine;
