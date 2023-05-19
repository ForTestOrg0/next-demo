import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { TableCol, TdCol, TrCol, Text } from '@/ui';
import { BlockLink } from '@/components/Links';
import { BountiesProposalDetail } from '@/types/api';
import { Identicon } from '@/components/Identicon';
import { Balance } from '@/components/Balance';

interface Props extends BareProps, BareServerSideProps {
  proposal: BountiesProposalDetail;
}

const Page: React.FC<Props> = ({ proposal, chain }) => {
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
        <TdCol><Balance value={proposal.value} token={chain.nativeTokenConf}/></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Proposer Bond</TdCol>
        <TdCol><Balance value={proposal.bond} token={chain.nativeTokenConf}/></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Curator Deposit</TdCol>
        <TdCol><Balance value={proposal.curator_deposit} token={chain.nativeTokenConf}/></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Curator Fee</TdCol>
        <TdCol><Balance value={proposal.curator_fee} token={chain.nativeTokenConf}/></TdCol>
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
