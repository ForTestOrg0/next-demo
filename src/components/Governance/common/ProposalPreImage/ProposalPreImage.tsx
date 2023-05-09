import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { Table, Td, Tr } from '@/ui';
import { Identicon } from '@/components/Identicon';
import { BlockLink } from '@/components/Links';
import { ProposalPreImage } from '@/types/api';
import { ExtrinsicCall, ExtrinsicModule } from '@/components/ExtrinsicModuleCall';
import { Parameters } from '@/components/Parameters';
import { Balance } from '@/components/Balance';

interface Props extends BareProps, BareServerSideProps {
  preimage: ProposalPreImage;
}

const Component: React.FC<Props> = ({ preimage, chain }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold w-52'>Created at Block</Td>
        <Td><BlockLink blockNumber={preimage?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Updated at Block</Td>
        <Td><BlockLink blockNumber={preimage?.updated_block || preimage?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Proposed Hash</Td>
        <Td>{preimage?.hash}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Author</Td>
        <Td><Identicon account={preimage?.author} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Module</Td>
        <Td><ExtrinsicModule module={preimage?.call_module} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Call</Td>
        <Td><ExtrinsicCall call={preimage?.call_name} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Deposit</Td>
        <Td><Balance value={preimage?.amount} token={chain.nativeTokenConf} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Status</Td>
        <Td>{preimage?.status}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Parameters</Td>
        <Td><Parameters value={preimage?.params} /></Td>
      </Tr>
    </tbody>
  </Table>)
};

export default Component;
