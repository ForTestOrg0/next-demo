import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter, Text } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

interface Props extends BareProps {
  index: string | number
  query?: Record<string, string>
  empty?: boolean
}

const Components: React.FC<Props> = ({ empty, query, children, className, index }) => {
  if (empty) {
    return <Text>-</Text>
  }
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className="text-sm" href={`/fellowship/${index}${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? index}
    </LinkRouter>
  )
}

export default Components
