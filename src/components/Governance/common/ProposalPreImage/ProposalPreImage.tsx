import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { TableCol, TdCol, TrCol } from '@/ui';
import { Identicon } from '@/components/Identicon';
import { BlockLink } from '@/components/Links';
import { ProposalPreImage } from '@/types/api';
import {
  ExtrinsicCall,
  ExtrinsicModule,
} from '@/components/ExtrinsicModuleCall';
import { Parameters } from '@/components/Parameters';
import { Balance } from '@/components/Balance';

interface Props extends BareProps, BareServerSideProps {
  preimage: ProposalPreImage;
}

const Component: React.FC<Props> = ({ preimage, chain }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap w-52">
            Created at Block
          </TdCol>
          <TdCol>
            <BlockLink blockNumber={preimage?.created_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">
            Updated at Block
          </TdCol>
          <TdCol>
            <BlockLink
              blockNumber={preimage?.updated_block || preimage?.created_block}
            />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">
            Proposed Hash
          </TdCol>
          <TdCol>{preimage?.hash}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Author</TdCol>
          <TdCol>
            <Identicon account={preimage?.author} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Module</TdCol>
          <TdCol>
            <ExtrinsicModule module={preimage?.call_module} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Call</TdCol>
          <TdCol>
            <ExtrinsicCall call={preimage?.call_name} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Deposit</TdCol>
          <TdCol>
            <Balance value={preimage?.amount} token={chain.nativeTokenConf} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Status</TdCol>
          <TdCol>{preimage?.status}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Parameters</TdCol>
          <TdCol>
            <Parameters value={preimage?.params} />
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  );
};

export default Component;
