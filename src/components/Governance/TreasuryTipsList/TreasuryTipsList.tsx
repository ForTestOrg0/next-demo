import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { TreasuryTipsLink } from '@/components/Links';
import { TimeFromNow } from '@/components/Time';
import { TreasuryTip } from '@/types/api';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposals: TreasuryTip[];
}

const Page: React.FC<Props> = ({ proposals }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Th>Beneficiary</Th>
        <Th>Finder</Th>
        <Th>Reason</Th>
        <Th>Tippers</Th>
        <Th>Value</Th>
        <Th>Time</Th>
        <Th>Status</Th>
        <Th>Link</Th>
      </Tr>
      {proposals.map((proposal) => {
        return (
          <Tr key={proposal.hash}>
            <Td><Identicon account={proposal.beneficiary}/></Td>
            <Td><Identicon account={proposal.finder}/></Td>
            <Td><Text>{proposal.reason}</Text></Td>
            <Td><Text>{proposal.tipper_num}</Text></Td>
            <Td><Text>{proposal.amount}</Text></Td>
            <Td><TimeFromNow date={proposal.block_timestamp} /></Td>
            <Td><Text>{proposal.status}</Text></Td>
            <Td><TreasuryTipsLink index={proposal.hash} /></Td>
          </Tr>)
      })}
    </tbody>
  </Table>)
};

export default Page;
