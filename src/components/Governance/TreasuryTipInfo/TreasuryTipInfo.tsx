import React from 'react';
import { BareProps } from '@/types/page';
import { TableCol, TdCol, TrCol, Text } from '@/ui';
import { BlockLink } from '@/components/Links';
import { TreasuryProposalDetail, TreasuryTipDetail } from '@/types/api';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposal: TreasuryTipDetail;
}

const Page: React.FC<Props> = ({ proposal }) => {
  return (<TableCol className='w-full'>
    <tbody>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap w-44'>Created at Block</TdCol>
        <TdCol><BlockLink blockNumber={proposal?.block_num} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap w-44'>Updated at Block</TdCol>
        <TdCol>{proposal?.close_block_num ? <BlockLink blockNumber={proposal?.close_block_num} /> : '-'}</TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Finder</TdCol>
        <TdCol><Identicon account={proposal?.finder} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Beneficiary</TdCol>
        <TdCol><Identicon account={proposal?.beneficiary} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Status</TdCol>
        <TdCol>{proposal?.status}</TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Motion Hash</TdCol>
        <TdCol>{proposal?.hash}</TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Reson</TdCol>
        <TdCol><Text>{proposal?.reason}</Text></TdCol>
      </TrCol>
    </tbody>
  </TableCol>)
};

export default Page;
