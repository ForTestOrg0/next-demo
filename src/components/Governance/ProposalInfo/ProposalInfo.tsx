import React from 'react';
import { BareProps } from '@/types/page';
import { TableCol, TdCol, TrCol } from '@/ui';
import { BlockLink } from '@/components/Links';
import { GetDemocracyProposalByIdDataProps } from '@/utils/api';

interface Props extends BareProps {
  proposal: GetDemocracyProposalByIdDataProps['info'];
}

const ProposalInfo: React.FC<Props> = ({ proposal }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">
            Created at Block
          </TdCol>
          <TdCol>
            <BlockLink blockNumber={proposal?.created_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">
            Updated at Block
          </TdCol>
          <TdCol>
            <BlockLink blockNumber={proposal?.updated_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Motion Hash</TdCol>
          <TdCol>{proposal?.proposal_hash}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Seconds</TdCol>
          <TdCol>{proposal?.seconded_count}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Status</TdCol>
          <TdCol>{proposal?.status}</TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  );
};

export default ProposalInfo;
