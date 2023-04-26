import React from 'react';
import { BareProps } from '@/types/page';
import { GetDemocracySecondedProps, unwrap, useDemocracySeconded } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { Identicon } from '@/components/Identicon';
import { ExtrinsicLink } from '@/components/Links';
import { DemocracyVote } from '@/types/api';
import { Time } from '@/components/Time';

interface Props extends BareProps {
  votes: DemocracyVote[];
}

const ReferendaVotes: React.FC<Props> = ({ votes }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Extrinsic ID</Th>
        <Th>Account</Th>
        <Th>Locked Value</Th>
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
              <Text>{item.conviction} * {item.amount}</Text>
            </Td>
            <Td>
              <Time date={item.voting_time}/>
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

export default ReferendaVotes;
