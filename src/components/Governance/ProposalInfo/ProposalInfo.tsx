import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Tr } from '@/ui';
import { BlockLink } from '@/components/Links';
import { GetDemocracyProposalByIdDataProps } from '@/utils/api';

interface Props extends BareProps {
  proposal: GetDemocracyProposalByIdDataProps['info'];
}

const ProposalInfo: React.FC<Props> = ({ proposal }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Created at Block</Td>
        <Td><BlockLink blockNumber={proposal?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Updated at Block</Td>
        <Td><BlockLink blockNumber={proposal?.updated_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Motion Hash</Td>
        <Td>{proposal?.proposal_hash}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Seconds</Td>
        <Td>{proposal?.seconded_count}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Status</Td>
        <Td>{proposal?.status}</Td>
      </Tr>
    </tbody>
  </Table>)
};

export default ProposalInfo;
