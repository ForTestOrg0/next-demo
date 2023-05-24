import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { Table, Td, Th, Tr } from '@/ui';
import { BlockLink, ValidatorLink } from '@/components/Links';
import { Log } from '@/types/api';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps, BareServerSideProps {
    logs: Log[];
}

const Page: React.FC<Props> = ({ logs, chain }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Log Index</Th>
        <Th>Block</Th>
        <Th>Type</Th>
        <Th>Engine</Th>
      </Tr>
      {logs.map((log) => {
        return (
          <Tr key={log.id}>
            <Td>{log.log_index}</Td>
            <Td><BlockLink blockNumber={log.block_num} /></Td>
            <Td>{log.log_type}</Td>
            <Td>{log.engine}</Td>
          </Tr>)
      })}
    </tbody>
  </Table>)
};

export default Page;
