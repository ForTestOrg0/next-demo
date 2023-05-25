import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter } from '@/ui'

interface Props extends BareProps {
  index: string | number
}

const Component: React.FC<Props> = ({ children, index, className }) => (
  <LinkRouter className={className} href={`/treasury/${index}`}>
    {children ?? index}
  </LinkRouter>
)

export default Component
