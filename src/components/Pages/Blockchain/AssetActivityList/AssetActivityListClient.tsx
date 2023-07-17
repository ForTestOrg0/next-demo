'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { unwrap, useAssetActivities } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { PAGE_ROW } from '@/config/constants'
import { AssetActivityList } from './AssetActivityList'
import { Button } from '@/ui'
import { EventLink } from '@/components/Links'

type UseAssetActivitiesArgs = Parameters<typeof useAssetActivities>[1]
interface Props extends BareProps, UseAssetActivitiesArgs {
  host: string
}

export const AssetActivityListClient: React.FC<Props> = ({ host, ...props }) => {
  const { data, error, isLoading } = useAssetActivities(host, {
    ...props,
  })
  const events = unwrap(data)

  if (isLoading) return <Loading />
  if (!events) return <Empty />

  return (
    <div>
      <AssetActivityList events={events?.list || []} />
      {events?.count - PAGE_ROW > 0 ? (
        <EventLink
          query={{
            asset_id: props.asset_id?.toString() || '',
          }}>
          <Button outline className="mt-4">
            View Other {events?.count - PAGE_ROW} Activity
          </Button>
        </EventLink>
      ) : null}
    </div>
  )
}
