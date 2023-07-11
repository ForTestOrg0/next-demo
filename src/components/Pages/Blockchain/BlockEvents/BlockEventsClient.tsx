'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { unwrap, useEvents } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { BlockEvents } from './BlockEvents'
import { Button } from '@/ui'
import { EventLink } from '@/components/Links'

type UseEventsArgs = Parameters<typeof useEvents>[1]
type BlockEventsArgs = Parameters<typeof BlockEvents>[0]['disableColumn']
interface Props extends BareProps, UseEventsArgs {
  host: string
  disableColumn?: BlockEventsArgs
}

export const BlockEventsClient: React.FC<Props> = ({ host, row, ...props }) => {
  const { data, error, isLoading } = useEvents(host, {
    row,
    ...props,
  })
  const events = unwrap(data)

  if (isLoading) return <Loading />
  if (!events) return <Empty />

  return (
    <div>
      <BlockEvents events={events?.events || []} disableColumn={props.disableColumn} />
      {events?.count - row > 0 ? (
        <EventLink
          query={{
            block: props.block_num?.toString() || '',
            extrinsic: props.extrinsic_index?.toString() || '',
          }}>
          <Button outline className="mt-4">
            View Other {events?.count - row} Events Details
          </Button>
        </EventLink>
      ) : null}
    </div>
  )
}
