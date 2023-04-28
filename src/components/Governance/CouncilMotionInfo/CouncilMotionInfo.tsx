import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Tr } from '@/ui';
import { BlockLink } from '@/components/Links';
import { CouncilProposalDetail } from '@/types/api';
import { BaseVoteStatistics, SuperMajorityApprove } from '@/components/VoteThreshold';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposal: CouncilProposalDetail;
}

const CouncilMotionInfo: React.FC<Props> = ({ proposal }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold w-44'>Created at Block</Td>
        <Td><BlockLink blockNumber={proposal?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Updated at Block</Td>
        <Td><BlockLink blockNumber={proposal?.updated_block || proposal?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Motion Hash</Td>
        <Td>{proposal?.proposal_hash}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Proposer</Td>
        <Td><Identicon account={proposal?.proposer} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Member Threshold</Td>
        <Td>{proposal?.member_count}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Vote Statistics</Td>
        <Td><BaseVoteStatistics ayeAmount={proposal.aye_votes} nayAmount={proposal.nay_votes} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Status</Td>
        <Td>{proposal?.status}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Execution Result</Td>
        <Td>{proposal.executed_success.toString()}</Td>
      </Tr>
    </tbody>
  </Table>)
};

export default CouncilMotionInfo;
