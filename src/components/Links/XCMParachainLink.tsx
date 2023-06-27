import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { LinkRouter, Text } from '@/ui'
import { objectToSearchParams } from '@/utils/url'

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
    <LinkRouter className={clsx('text-sm', className)} href={`/xcm_parachain${searchParams ? `?${searchParams}` : ''}`}>
      {children}
    </LinkRouter>
  )
}

export default Components
