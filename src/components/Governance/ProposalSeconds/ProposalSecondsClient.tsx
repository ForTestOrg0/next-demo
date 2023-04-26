import React from 'react';
import { BareProps } from '@/types/page';
import { unwrap, useDemocracySeconded } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { Table, Td, Th, Tr } from '@/ui';
import { Identicon } from '@/components/Identicon';
import { ExtrinsicLink } from '@/components/Links';
import ProposalSeconds from './ProposalSeconds';

interface Props extends BareProps {
  host: string;
  row?: number;
  page?: number;
  proposalId: number;
}

const ProposalSecondsClient: React.FC<Props> = ({ host, page = 0, row = PAGE_ROW, children, proposalId, className }) => {
  const { data, error } = useDemocracySeconded(host, {
    page,
    row,
    proposal_id: proposalId
  });
  const seconds = unwrap(data);
  return (<ProposalSeconds seconds={seconds?.list || []} />)
};

export default ProposalSecondsClient;
