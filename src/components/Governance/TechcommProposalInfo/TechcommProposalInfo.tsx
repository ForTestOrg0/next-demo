import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Tr } from '@/ui';
import { BlockLink } from '@/components/Links';
import { CouncilProposalDetail } from '@/types/api';
import { BaseVoteStatistics } from '@/components/VoteThreshold';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposal: CouncilProposalDetail;
}

const Page: React.FC<Props> = ({ proposal }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold whitespace-nowrap w-44'>Created at Block</Td>
        <Td><BlockLink blockNumber={proposal?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Updated at Block</Td>
        <Td><BlockLink blockNumber={proposal?.updated_block || proposal?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Motion Hash</Td>
        <Td>{proposal?.proposal_hash}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Proposer</Td>
        <Td><Identicon account={proposal?.proposer} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Member Threshold</Td>
        <Td>{proposal?.member_count}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Vote Statistics</Td>
        <Td><BaseVoteStatistics ayeAmount={proposal.aye_votes} nayAmount={proposal.nay_votes} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Status</Td>
        <Td>{proposal?.status}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Execution Result</Td>
        <Td>{proposal.executed_success.toString()}</Td>
      </Tr>
    </tbody>
  </Table>)
};

export default Page;
