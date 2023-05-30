import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter, Text } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  assetId?: string
  query?: Record<string, string>
  empty?: boolean
}

const AssetListLink: React.FC<Props> = ({ empty, query, children, assetId = '', className }) => {
  if (empty) {
    return <Text>-</Text>
  }
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className="text-sm" href={`/asset_token${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? assetId}
    </LinkRouter>
  )
}

export default AssetListLink
