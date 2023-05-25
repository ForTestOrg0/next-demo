import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { Log } from '@/types/api';
import { BlockLink } from '@/components/Links';

interface Props extends BareProps {
  logs: Log[];
}

export const BlockLogs: React.FC<Props> = ({ logs }) => {
  return (
    <Table className="w-full">
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
                <BlockLink blockNumber={item.block_num} />
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
    </Table>
  );
};
