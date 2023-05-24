import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { ExtrinsicLink } from '@/components/Links';
import { Event } from '@/types/api';
import { TimeFromNow } from '@/components/Time';
import { BlockEventType } from './BlockEventType';

interface Props extends BareProps {
  events: Event[];
}

export const BlockEvents: React.FC<Props> = ({ events }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Event Id</Th>
        <Th>Extrinsic Id</Th>
        <Th>Action</Th>
        <Th>Type</Th>
      </Tr>

      {events?.map((item, index) => {
        return (
          <Tr key={`${item.event_index}${item.id}`}>
            <Td>
              <Text>{item.event_index}</Text>
            </Td>
            <Td>
              <ExtrinsicLink empty={!item.extrinsic_index}  extrinsicIndex={item.extrinsic_index} />
            </Td>
            <Td>
              <ExtrinsicLink empty={!item.module_id} query={{ module: item?.module_id.toLowerCase(), event: item?.event_id.toLowerCase() }}>{`${item.module_id} (${item.event_id})`}</ExtrinsicLink>
            </Td>
            <Td>
              <BlockEventType phase={item.phase} />
            </Td>
          </Tr>
        );
      })}
    </tbody>
  </Table>)
};
