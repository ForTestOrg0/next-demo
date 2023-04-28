import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Tr } from '@/ui';
import { BlockLink } from '@/components/Links';
import { DemocracyReferendumDetail } from '@/types/api';
import { SuperMajorityApprove } from '@/components/VoteThreshold';

interface Props extends BareProps {
  referenda: DemocracyReferendumDetail;
}

const ReferendaInfo: React.FC<Props> = ({ referenda }) => {
  return (<Table className='w-full'>
    <tbody>
      <Tr>
        <Td className='font-semibold w-44'>Created at Block</Td>
        <Td><BlockLink blockNumber={referenda?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Updated at Block</Td>
        <Td><BlockLink blockNumber={referenda?.updated_block || referenda?.created_block} /></Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Status</Td>
        <Td>{referenda?.status}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Delay</Td>
        <Td>{referenda?.delay}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>End</Td>
        <Td>{referenda?.end}</Td>
      </Tr>

      <Tr>
        <Td className='font-semibold'>Vote Threshold</Td>
        <Td>{referenda?.vote_threshold}</Td>
      </Tr>
      <Tr>
        <Td className='font-semibold'>Outcome Prediction</Td>
        <Td><SuperMajorityApprove ayeAmount={referenda.aye_amount} nayAmount={referenda.nay_amount} /></Td>
      </Tr>
    </tbody>
  </Table>)
};

export default ReferendaInfo;
