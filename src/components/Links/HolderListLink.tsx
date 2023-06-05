import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  address?: string
  query?: Record<string, string>
}

const BlockLink: React.FC<Props> = ({ children, address, className, query }) => {
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className={className} href={`/holder${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? address}
    </LinkRouter>
  )
}

export default BlockLink
