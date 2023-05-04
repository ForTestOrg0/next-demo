'use client'

import React from 'react';
import { BareProps } from '@/types/page';
import { unwrap, useTreasuryTippers } from '@/utils/api';
import { Empty } from '@/components/Empty';
import { Loading } from '@/components/Loading';
import TreasuryTippers from './TreasuryTippers';

interface Props extends BareProps {
  host: string;
  hash: string;
}

const ReferendaVotesClient: React.FC<Props> = ({ host, hash }) => {
  const { data, error, isLoading } = useTreasuryTippers(host, {
    hash
  });
  const tippers = unwrap(data);

  if (isLoading) return <Loading />
  if (!tippers) return <Empty />;

  return (<div>
    <TreasuryTippers tippers={tippers?.list || []} />
  </div>)
};

export default ReferendaVotesClient;
