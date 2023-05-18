import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Tr, Text } from '@/ui';
import { BlockLink } from '@/components/Links';
import { TreasuryProposalDetail, TreasuryTipDetail } from '@/types/api';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposal: TreasuryTipDetail;
}

const Page: React.FC<Props> = ({ proposal }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold whitespace-nowrap w-44'>Created at Block</Td>
        <Td><BlockLink blockNumber={proposal?.block_num} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap w-44'>Updated at Block</Td>
        <Td>{proposal?.close_block_num ? <BlockLink blockNumber={proposal?.close_block_num} /> : '-'}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Finder</Td>
        <Td><Identicon account={proposal?.finder} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Beneficiary</Td>
        <Td><Identicon account={proposal?.beneficiary} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Status</Td>
        <Td>{proposal?.status}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Motion Hash</Td>
        <Td>{proposal?.hash}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Reson</Td>
        <Td><Text>{proposal?.reason}</Text></Td>
      </Tr>
    </tbody>
  </Table>)
};

export default Page;
