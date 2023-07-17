import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter, Text } from '@/ui'
import { objectToSearchParams } from '@/utils/url'
import clsx from 'clsx'

interface Props extends BareProps {
  address?: string
  query?: Record<string, string>
  empty?: boolean
}

const Components: React.FC<Props> = ({ empty, query, children, address = '', className }) => {
  if (empty) {
    return <Text>-</Text>
  }
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className={clsx('text-sm', className)} href={`/account/${address}${searchParams ? `?${searchParams}` : ''}`}>
      {children ?? address}
    </LinkRouter>
  )
}

export default Components
