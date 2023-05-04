import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { BlockLink, TreasuryProposalLink } from '@/components/Links';
import { TimeFromNow } from '@/components/Time';
import { TreasuryProposal } from '@/types/api';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposals: TreasuryProposal[];
}

const Page: React.FC<Props> = ({ proposals }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Proposal ID</Th>
        <Th>Block</Th>
        <Th>Beneficiary</Th>
        <Th>Proposed By</Th>
        <Th>Value</Th>
        <Th>Time</Th>
        <Th>Status</Th>
        <Th></Th>
      </Tr>
      {proposals.map((proposal) => {
        return (
          <Tr key={proposal.proposal_id}>
            <Td><TreasuryProposalLink index={proposal.proposal_id} /></Td>
            <Td><BlockLink blockNumber={proposal.created_block} /></Td>
            <Td><Identicon account={proposal.beneficiary} /></Td>
            <Td><Identicon account={proposal.proposer} /></Td>
            <Td><Text>{proposal.reward}</Text></Td>
            <Td><TimeFromNow date={proposal.block_timestamp} /></Td>
            <Td>{proposal.status}</Td>
            <Td>action</Td>
          </Tr>)
      })}
    </tbody>
  </Table>)
};

export default Page;
