import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter, Text } from '@/ui'
import { objectToSearchParams } from '@/utils/url'
import clsx from 'clsx'

interface Props extends BareProps {
  query?: Record<string, string>
  empty?: boolean
}

const Components: React.FC<Props> = ({ empty, query, children, className }) => {
  if (empty) {
    return <Text>-</Text>
  }
  const searchParams = objectToSearchParams(query)
  return (
    <LinkRouter className={clsx('text-sm', className)} href={`/account_list${searchParams ? `?${searchParams}` : ''}`}>
      {children}
    </LinkRouter>
  )
}

export default Components
