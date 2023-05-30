import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  query?: Record<string, string>
}

const CustomTokenHolderLink: React.FC<Props> = ({ children, className, query }) => {
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className={className} href={`/custom_token_holders${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? query?.customTokenUniqueId}
    </LinkRouter>
  )
}

export default CustomTokenHolderLink
