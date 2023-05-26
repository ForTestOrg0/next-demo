'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { unwrap, useTokensFromProvider } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { SystemAssets } from './SystemAssets'
import { ExtrinsicLink } from '@/components/Links'
import { Button } from '@/ui'

type UseTokensFromProviderArgs = Parameters<typeof useTokensFromProvider>[1]
interface Props extends BareProps, UseTokensFromProviderArgs {
  host: string
}

export const SystemAssetsClient: React.FC<Props> = ({ host, page = 0, row = TAB_ROW }) => {
  const { data, error, isLoading } = useTokensFromProvider(host, {
    page,
    row,
    include_extends: true,
    provider: 'system',
  })
  const providers = unwrap(data)

  if (isLoading) return <Loading />
  if (!providers) return <Empty />

  return (
    <div>
      <SystemAssets tokens={providers?.tokens || []} />
      {providers?.count - TAB_ROW > 0 ? (
        <ExtrinsicLink query={{ block: '' }}>
          <Button outline className="mt-4">
            View Other {providers?.count - TAB_ROW} System Token
          </Button>
        </ExtrinsicLink>
      ) : null}
    </div>
  )
}
