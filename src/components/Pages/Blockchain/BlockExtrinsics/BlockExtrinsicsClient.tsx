'use client'

import React from 'react';
import { BareProps } from '@/types/page';
import { unwrap, useExtrinsics } from '@/utils/api';
import { Empty } from '@/components/Empty';
import { Loading } from '@/components/Loading';
import { PAGE_ROW } from '@/config/constants';
import { BlockExtrinsics } from './BlockExtrinsics';
import { BlockLink, ExtrinsicLink } from '@/components/Links';
import { Button } from '@/ui';

type UseExtrinsicsArgs = Parameters<typeof useExtrinsics>[1];
interface Props extends BareProps, UseExtrinsicsArgs {
  host: string;
}

export const BlockExtrinsicsClient: React.FC<Props> = ({ host, block_num, page = 0, row = PAGE_ROW, order }) => {
  const { data, error, isLoading } = useExtrinsics(host, {
    order, page, row, block_num
  });
  const extrinsics = unwrap(data);

  if (isLoading) return <Loading />
  if (!extrinsics) return <Empty />;

  return (<div>
    <BlockExtrinsics extrinsics={extrinsics?.extrinsics || []} />
    {extrinsics?.count - PAGE_ROW > 0 ?
      <ExtrinsicLink query={{ block: block_num?.toString() || '' }}>
        <Button outline className='mt-4'>View Other {extrinsics?.count - PAGE_ROW} Events Details</Button>
      </ExtrinsicLink>
      : null}
  </div>)
};
