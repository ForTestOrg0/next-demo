import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Tr, Text } from '@/ui';
import { BlockLink } from '@/components/Links';
import { BountiesProposalDetail } from '@/types/api';
import { Identicon } from '@/components/Identicon';

interface Props extends BareProps {
  proposal: BountiesProposalDetail;
}

const Page: React.FC<Props> = ({ proposal }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Created at Block</Td>
        <Td><BlockLink blockNumber={proposal?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Proposer</Td>
        <Td><Identicon account={proposal?.proposer} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Curator</Td>
        <Td><Identicon account={proposal?.curator} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Description</Td>
        <Td><Text>{proposal?.description}</Text></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Bounty Value</Td>
        <Td><Text>{proposal?.value}</Text></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Proposer Bond</Td>
        <Td><Text>{proposal?.bond}</Text></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Curator Deposit</Td>
        <Td><Text>{proposal?.curator_deposit}</Text></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Curator Fee</Td>
        <Td><Text>{proposal?.curator_fee}</Text></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Expiry Time</Td>
        <Td><Text>{proposal?.expire_block}</Text></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold whitespace-nowrap'>Status</Td>
        <Td><Text>{proposal?.status}</Text></Td>
      </Tr>
    </tbody>
  </Table>)
};

export default Page;
