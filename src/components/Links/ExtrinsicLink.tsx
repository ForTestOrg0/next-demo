import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter, Text } from '@/ui'
import { objectToSearchParams } from '@/utils/url'
import { formatHash } from '@/utils/formatText'

interface Props extends BareProps {
  extrinsicIndex?: string
  query?: Record<string, string>
  empty?: boolean
  ellipsis?: boolean
}

const ExtrinsicLink: React.FC<Props> = ({ empty, query, children, extrinsicIndex = '', className, ellipsis }) => {
  if (empty) {
    return <Text>-</Text>
  }
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className="text-sm whitespace-nowrap" href={`/extrinsic/${extrinsicIndex}${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? (ellipsis ? formatHash(extrinsicIndex) : extrinsicIndex)}
    </LinkRouter>
  )
}

export default ExtrinsicLink
