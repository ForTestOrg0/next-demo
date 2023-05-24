import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { Log } from '@/types/api';

interface Props extends BareProps {
  logs: Log[];
}

export const BlockLogs: React.FC<Props> = ({ logs }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Log Index</Th>
        <Th>Block</Th>
        <Th>Type</Th>
        <Th>Engine</Th>
      </Tr>

      {logs?.map((item, index) => {
        return (
          <Tr key={`${item.id}${item.log_index}`}>
            <Td>
              <Text>{item.log_index}</Text>
            </Td>
            <Td>
              <Text>{item.block_num}</Text>
            </Td>
            <Td>
              <Text>{item.log_type}</Text>
            </Td>
            <Td>
              <Text>{item.engine}</Text>
            </Td>
          </Tr>
        );
      })}
    </tbody>
  </Table>)
};
