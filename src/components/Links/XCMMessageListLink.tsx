import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter, Text } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  query?: Record<string, string>
  empty?: boolean
}

const Components: React.FC<Props> = ({ empty, query, children, className }) => {
  if (empty) {
    return <Text>0</Text>
  }
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className="text-sm" href={`/xcm_message${searchParams ? `?${searchParams}` : ''}`}>
      {children}
    </LinkRouter>
  )
}

export default Components