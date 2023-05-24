'use client'

import React from 'react';
import { BareProps } from '@/types/page';
import { unwrap, useEvents } from '@/utils/api';
import { Empty } from '@/components/Empty';
import { Loading } from '@/components/Loading';
import { PAGE_ROW } from '@/config/constants';
import { BlockEvents } from './BlockEvents';
import { Button } from '@/ui';
import { EventLink } from '@/components/Links';

type UseEventsArgs = Parameters<typeof useEvents>[1];
interface Props extends BareProps, UseEventsArgs {
  host: string;
}

export const BlockEventsClient: React.FC<Props> = ({ host, block_num, page = 0, row, order }) => {
  const { data, error, isLoading } = useEvents(host, {
    order, page, row, block_num
  });
  const events = unwrap(data);

  if (isLoading) return <Loading />
  if (!events) return <Empty />;

  return (<div>
    <BlockEvents events={events?.events || []} />
    {events?.count - PAGE_ROW > 0 ?
      <EventLink query={{ block: block_num?.toString() || '' }}>
        <Button outline className='mt-4'>View Other {events?.count - PAGE_ROW} Events Details</Button>
      </EventLink>
      : null}
  </div>)
};

