import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter, Text } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  id?: string | number
  query?: Record<string, string>
  empty?: boolean
}

const Components: React.FC<Props> = ({ empty, query, children, id = '', className }) => {
  if (empty) {
    return <Text>-</Text>
  }
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className="text-sm" href={`/crowdloan/${id}${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? id}
    </LinkRouter>
  )
}

export default Components
