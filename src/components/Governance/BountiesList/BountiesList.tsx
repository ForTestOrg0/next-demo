import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { BountiesProposal } from '@/types/api';
import { Identicon } from '@/components/Identicon';
import { BountyLink } from '@/components/Links';
import { TimeFromNow } from '@/components/Time';
import { Balance } from '@/components/Balance';

interface Props extends BareProps, BareServerSideProps {
  proposals: BountiesProposal[];
}

const Page: React.FC<Props> = ({ proposals, chain }) => {
  return (
    <Table className="w-full">
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
              <Td>
                <BountyLink index={proposal.proposal_id} />
              </Td>
              <Td>
                <Identicon account={proposal.proposer} />
              </Td>
              <Td>
                <Text>{proposal.description}</Text>
              </Td>
              <Td>
                <Balance value={proposal.value} token={chain.nativeTokenConf} />
              </Td>
              <Td>
                <TimeFromNow date={proposal.block_timestamp} />
              </Td>
              <Td>
                <Text>{proposal.status}</Text>
              </Td>
              <Td>action</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Page;
