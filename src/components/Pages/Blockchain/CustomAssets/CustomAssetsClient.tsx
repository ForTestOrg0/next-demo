'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { unwrap, useTokenProviders, useTokensFromProvider } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { CustomAssets } from './CustomAssets'
import { ExtrinsicLink } from '@/components/Links'
import { Button } from '@/ui'

type UseTokenProvidersArgs = Parameters<typeof useTokenProviders>[1]
type UseTokensFromProviderArgs = Parameters<typeof useTokensFromProvider>[1]
interface Props extends BareProps, UseTokensFromProviderArgs, UseTokenProvidersArgs {
  host: string
}

export const CustomAssetsClient: React.FC<Props> = ({ host, page = 0, row = TAB_ROW }) => {
  const { data, error, isLoading } = useTokenProviders(host, {})
  const providers = unwrap(data)
  let customProvider: string = ''
  providers?.providers?.forEach((provider) => {
    if (provider.is_primary && provider.id !== 'system') {
      customProvider = provider.id
    }
  })
  const { data: customData, isLoading: isCustomLoading } = useTokensFromProvider(host, {
    page,
    row,
    include_extends: true,
    provider: customProvider,
  })
  const customProviders = unwrap(customData)

  if (isLoading || isCustomLoading) return <Loading />
  if (!providers || !customProviders) return <Empty />

  return (
    <div>
      <CustomAssets tokens={customProviders?.tokens || []} />
      {customProviders?.count - TAB_ROW > 0 ? (
        <ExtrinsicLink query={{ block: '' }}>
          <Button outline className="mt-4">
            View Other {customProviders?.count - TAB_ROW} Custom Token
          </Button>
        </ExtrinsicLink>
      ) : null}
    </div>
  )
}
