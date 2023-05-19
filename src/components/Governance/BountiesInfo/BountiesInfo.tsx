import React from 'react';
import { BareProps } from '@/types/page';
import { TableCol, TdCol, TrCol, Text } from '@/ui';
import { BlockLink } from '@/components/Links';
import { BountiesProposalDetail } from '@/types/api';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposal: BountiesProposalDetail;
}

const Page: React.FC<Props> = ({ proposal }) => {
  return (<TableCol className='w-full'>
    <tbody>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Created at Block</TdCol>
        <TdCol><BlockLink blockNumber={proposal?.created_block} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Proposer</TdCol>
        <TdCol><Identicon account={proposal?.proposer} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Curator</TdCol>
        <TdCol><Identicon account={proposal?.curator} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Description</TdCol>
        <TdCol><Text>{proposal?.description}</Text></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Bounty Value</TdCol>
        <TdCol><Text>{proposal?.value}</Text></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Proposer Bond</TdCol>
        <TdCol><Text>{proposal?.bond}</Text></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Curator Deposit</TdCol>
        <TdCol><Text>{proposal?.curator_deposit}</Text></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Curator Fee</TdCol>
        <TdCol><Text>{proposal?.curator_fee}</Text></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Expiry Time</TdCol>
        <TdCol><Text>{proposal?.expire_block}</Text></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Status</TdCol>
        <TdCol><Text>{proposal?.status}</Text></TdCol>
      </TrCol>
    </tbody>
  </TableCol>)
};

export default Page;
