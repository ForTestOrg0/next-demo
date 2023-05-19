import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { Identicon } from '@/components/Identicon';
import { ExtrinsicLink } from '@/components/Links';
import { SimpleProposalVote } from '@/types/api';
import { Time } from '@/components/Time';
import { ReplyStatus } from '@/components/Status';

interface Props extends BareProps {
  votes: SimpleProposalVote[];
}

const SimpleProposalVotes: React.FC<Props> = ({ votes }) => {
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
              <ReplyStatus type={item.passed} />
            </Td>
          </Tr>
        );
      })}
    </tbody>
  </Table>)
};

export default SimpleProposalVotes;
