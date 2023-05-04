import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Tr, Text } from '@/ui';
import { BlockLink } from '@/components/Links';
import { TreasuryProposalDetail } from '@/types/api';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposal: TreasuryProposalDetail;
}

const Page: React.FC<Props> = ({ proposal }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold w-44'>Created at Block</Td>
        <Td><BlockLink blockNumber={proposal?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Proposed by</Td>
        <Td><Identicon account={proposal?.proposer} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Beneficiary</Td>
        <Td><Identicon account={proposal?.beneficiary} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Reward</Td>
        <Td><Text>{proposal.reward}</Text></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Status</Td>
        <Td>{proposal?.status}</Td>
      </Tr>
    </tbody>
  </Table>)
};

export default Page;
