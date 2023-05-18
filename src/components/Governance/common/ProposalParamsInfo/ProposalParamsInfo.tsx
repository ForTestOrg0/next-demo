import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Tr } from '@/ui';
import { ExtrinsicCall, ExtrinsicModule } from '@/components/ExtrinsicModuleCall';
import { Parameters } from '@/components/Parameters';

interface Props extends BareProps {
  callModule?: string;
  callName?: string;
  params?: string;
}

const ProposalParamsInfo: React.FC<Props> = ({ callModule, callName, params }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Module</Td>
        <Td><ExtrinsicModule module={callModule}/></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Call</Td>
        <Td><ExtrinsicCall call={callName}/></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Parameters</Td>
        <Td><Parameters value={params}/></Td>
      </Tr>
    </tbody>
  </Table>)
};

export default ProposalParamsInfo;
