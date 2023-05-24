import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { TableCol, TdCol, TrCol, Text, Flex } from '@/ui';
import { BlockLink } from '@/components/Links';
import { ExtrinsicDetail } from '@/types/api';
import { Time, TimeFromNow } from '@/components/Time';
import { BlockStatus } from '../BlockList';
import { ExtrinsicCall, ExtrinsicModule } from '@/components/ExtrinsicModuleCall';
import { Parameters } from '@/components/Parameters';

interface Props extends BareProps, BareServerSideProps {
  extrinsic: ExtrinsicDetail;
}

const Page: React.FC<Props> = ({ extrinsic, chain }) => {
  return (<TableCol className='w-full'>
    <tbody>
      {extrinsic?.block_timestamp ? <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Timestamp</TdCol>
        <TdCol><Time date={extrinsic?.block_timestamp} /></TdCol>
      </TrCol> : null}
      {extrinsic?.block_timestamp ? <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Block Time</TdCol>
        <TdCol><TimeFromNow date={extrinsic?.block_timestamp} /></TdCol>
      </TrCol> : null}
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Block</TdCol>
        <TdCol><Flex className='items-center'><BlockStatus finalized={extrinsic.finalized} /><BlockLink blockNumber={extrinsic?.block_num} /></Flex></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Life Time</TdCol>
        <TdCol>
          {extrinsic?.lifetime ? <><BlockLink blockNumber={extrinsic?.lifetime?.birth} /> - <BlockLink blockNumber={extrinsic?.lifetime?.death} /></> : <Text>immortal</Text>}
        </TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Extrinsic Hash</TdCol>
        <TdCol><Text>{extrinsic.extrinsic_hash}</Text></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Module</TdCol>
        <TdCol><ExtrinsicModule module={extrinsic.call_module} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Call</TdCol>
        <TdCol><ExtrinsicCall call={extrinsic.call_module_function} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Result</TdCol>
        <TdCol><Text>{extrinsic.success.toString()}</Text></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Parameters</TdCol>
        <TdCol><Parameters value={extrinsic.params.toString()} /></TdCol>
      </TrCol>
      <TrCol>
        <TdCol className='font-semibold whitespace-nowrap'>Signature</TdCol>
        <TdCol><Text>{extrinsic.signature}</Text></TdCol>
      </TrCol>
    </tbody>
  </TableCol>)
};

export default Page;
