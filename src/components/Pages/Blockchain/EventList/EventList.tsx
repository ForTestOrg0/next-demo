import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { Table, Td, Th, Tr } from '@/ui';
import { BlockLink, ExtrinsicLink } from '@/components/Links';
import { Event } from '@/types/api';
import { TimeFromNow } from '@/components/Time';

interface Props extends BareProps, BareServerSideProps {
    events: Event[];
}

const Page: React.FC<Props> = ({ events, chain }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Event ID</Th>
        <Th>Block</Th>
        <Th>Extrinsic ID</Th>
        <Th>Time</Th>
        <Th>Action</Th>
      </Tr>
      {events.map((event) => {
        const block = event.event_index.split('-')[0];
        return (
          <Tr key={event.id}>
            <Td>{event.event_index}</Td>
            <Td><BlockLink blockNumber={block} /></Td>
            <Td>
                <ExtrinsicLink empty={!event.extrinsic_index} extrinsicIndex={event.extrinsic_index} />
            </Td>
            <Td><TimeFromNow date={event.block_timestamp}/></Td>
            <Td>
                <ExtrinsicLink empty={!event.module_id} query={{ module: event?.module_id.toLowerCase(), event: event?.event_id.toLowerCase() }}>{`${event.module_id} (${event.event_id})`}</ExtrinsicLink>
            </Td>
          </Tr>)
      })}
    </tbody>
  </Table>)
};

export default Page;
