import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  query?: Record<string, string>
}

const CustomTokenLink: React.FC<Props> = ({ children, className, query }) => {
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className={className} href={`/custom_token${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? query?.customTokenId}
    </LinkRouter>
  )
}

export default CustomTokenLink
