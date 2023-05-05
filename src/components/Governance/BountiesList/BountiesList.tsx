import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { BountiesProposal } from '@/types/api';
import { Identicon } from '@/components/Identicon';
import { BountyLink } from '@/components/Links';

interface Props extends BareProps {
  proposals: BountiesProposal[];
}

const Page: React.FC<Props> = ({ proposals }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Proposal ID</Th>
        <Th>Proposer</Th>
        <Th>Description</Th>
        <Th>Value</Th>
        <Th>Time</Th>
        <Th>Status</Th>
        <Th></Th>
      </Tr>
      {proposals.map((proposal) => {
        return (
          <Tr key={proposal.proposal_id}>
            <Td><BountyLink index={proposal.proposal_id} /></Td>
            <Td><Identicon account={proposal.proposer} /></Td>
            <Td><Text>{proposal.description}</Text></Td>
            <Td><Text>{proposal.value}</Text></Td>
            <Td><Text>{proposal.block_timestamp}</Text></Td>
            <Td><Text>{proposal.status}</Text></Td>
            <Td>action</Td>
          </Tr>)
      })}
    </tbody>
  </Table>)
};

export default Page;
