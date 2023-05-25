import React from 'react';
import { BareProps } from '@/types/page';
import { TableCol, TdCol, TrCol } from '@/ui';
import {
  ExtrinsicCall,
  ExtrinsicModule,
} from '@/components/ExtrinsicModuleCall';
import { Parameters } from '@/components/Parameters';

interface Props extends BareProps {
  callModule?: string;
  callName?: string;
  params?: string;
}

const ProposalParamsInfo: React.FC<Props> = ({
  callModule,
  callName,
  params,
}) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Module</TdCol>
          <TdCol>
            <ExtrinsicModule module={callModule} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Call</TdCol>
          <TdCol>
            <ExtrinsicCall call={callName} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Parameters</TdCol>
          <TdCol>
            <Parameters value={params} />
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  );
};

export default ProposalParamsInfo;
