import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  query?: Record<string, string>
}

const BlockLink: React.FC<Props> = ({ children, className, query }) => {
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className={className} href={`/system_token_detail${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? query?.unique_id}
    </LinkRouter>
  )
}

export default BlockLink
