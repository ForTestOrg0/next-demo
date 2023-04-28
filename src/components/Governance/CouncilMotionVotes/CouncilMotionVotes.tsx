import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { Identicon } from '@/components/Identicon';
import { ExtrinsicLink } from '@/components/Links';
import { CouncilProposalVote } from '@/types/api';
import { Time } from '@/components/Time';

interface Props extends BareProps {
  votes: CouncilProposalVote[];
}

const CouncilMotionVotes: React.FC<Props> = ({ votes }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Extrinsic ID</Th>
        <Th>Account</Th>
        <Th>Time</Th>
        <Th>Voted</Th>
      </Tr>

      {votes?.map((item, index) => {
        return (
          <Tr key={item.extrinsic_index}>
            <Td>
              <ExtrinsicLink extrinsicIndex={item.extrinsic_index} />
            </Td>
            <Td>
              <Identicon account={item.account} />
            </Td>
            <Td>
              <Time date={item.voting_time} />
            </Td>
            <Td>
              <Text>{item.passed.toString()}</Text>
            </Td>
          </Tr>
        );
      })}
    </tbody>
  </Table>)
};

export default CouncilMotionVotes;
