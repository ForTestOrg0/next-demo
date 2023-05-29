'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { unwrap, useExtrinsics } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { BlockExtrinsics } from './BlockExtrinsics'
import { ExtrinsicLink } from '@/components/Links'
import { Button } from '@/ui'

type UseExtrinsicsArgs = Parameters<typeof useExtrinsics>[1]
type BlockExtrinsicsArgs = Parameters<typeof BlockExtrinsics>[0]['disableColumn']
interface Props extends BareProps, UseExtrinsicsArgs {
  host: string
  disableColumn?: BlockExtrinsicsArgs
}

export const BlockExtrinsicsClient: React.FC<Props> = ({ host, page = 0, row = TAB_ROW, disableColumn, ...props }) => {
  const { data, error, isLoading } = useExtrinsics(host, {
    page,
    row,
    ...props,
  })
  const extrinsics = unwrap(data)

  if (isLoading) return <Loading />
  if (!extrinsics) return <Empty />

  return (
    <div>
      <BlockExtrinsics extrinsics={extrinsics?.extrinsics || []} disableColumn={disableColumn} />
      {extrinsics?.count - TAB_ROW > 0 ? (
        <ExtrinsicLink query={{ block: props.block_num?.toString() || '', account: props.address?.toString() || '' }}>
          <Button outline className="mt-4">
            View Other {extrinsics?.count - TAB_ROW} Extrinsic Details
          </Button>
        </ExtrinsicLink>
      ) : null}
    </div>
  )
}
