import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { BlockLink, ExtrinsicLink } from '@/components/Links';
import { Extrinsic } from '@/types/api';
import { TimeFromNow } from '@/components/Time';
import { ResultStatus } from '@/components/Status';

interface Props extends BareProps {
  extrinsics: Extrinsic[];
  disableBlockTd?: boolean;
}

export const BlockExtrinsics: React.FC<Props> = ({ extrinsics, disableBlockTd }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Extrinsic Id</Th>
        {!disableBlockTd ? <Th>Block</Th> : null}
        <Th>Hash</Th>
        <Th>Time</Th>
        <Th>Result</Th>
        <Th>Action</Th>
      </Tr>

      {extrinsics?.map((item, index) => {
        return (
          <Tr key={item.extrinsic_index}>
            <Td>
              <ExtrinsicLink empty={!item.extrinsic_index} extrinsicIndex={item.extrinsic_index} />
            </Td>
            {!disableBlockTd ? <Td>
              <BlockLink blockNumber={item.block_num} />
            </Td> : null}
            <Td>
              <ExtrinsicLink empty={!item.extrinsic_hash} extrinsicIndex={item.extrinsic_hash} />
            </Td>
            <Td>
              <TimeFromNow date={item.block_timestamp} />
            </Td>
            <Td>
              <ResultStatus type={item.success ? 1 : -1} />
            </Td>
            <Td>
              <ExtrinsicLink empty={!item.call_module} query={{ module: item.call_module, call: item.call_module_function }}>{`${item.call_module} (${item.call_module_function})`}</ExtrinsicLink>
            </Td>
          </Tr>
        );
      })}
    </tbody>
  </Table>)
};
