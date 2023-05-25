import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  blockNumber: string | number
  query?: Record<string, string>
}

const BlockLink: React.FC<Props> = ({ children, blockNumber, className, query }) => {
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className={className} href={`/block/${blockNumber}${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? blockNumber}
    </LinkRouter>
  )
}

export default BlockLink
