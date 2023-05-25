'use client';

import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { unwrap, useDemocracyVotes } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { Button, LinkRouter } from '@/ui';
import { Empty } from '@/components/Empty';
import ReferendaVotes from './ReferendaVotes';
import { Loading } from '@/components/Loading';

interface Props extends BareProps, BareServerSideProps {
  host: string;
  row?: number;
  page?: number;
  referendumIndex: number;
}

const ReferendaVotesClient: React.FC<Props> = ({
  host,
  page = 0,
  row = PAGE_ROW,
  referendumIndex,
  chain,
}) => {
  const { data, error, isLoading } = useDemocracyVotes(host, {
    page,
    row,
    referendum_index: referendumIndex,
  });
  const seconds = unwrap(data);

  if (isLoading) return <Loading />;
  if (!seconds) return <Empty />;

  return (
    <div>
      <ReferendaVotes votes={seconds?.list || []} chain={chain} />
      <LinkRouter href={`/referenda_vote/${referendumIndex}`}>
        <Button outline className="mt-4">
          View Other {seconds.count - PAGE_ROW} Voting Details
        </Button>
      </LinkRouter>
    </div>
  );
};

export default ReferendaVotesClient;
