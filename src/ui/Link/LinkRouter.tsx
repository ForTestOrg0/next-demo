import React from 'react'
import { BareProps } from '@/types/page'
import Link, { LinkProps } from 'next/link'

export interface LinkRouterProps extends BareProps, LinkProps {}

const LinkRouter: React.FC<LinkRouterProps> = ({ children, className, ...props }) => {
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  )
}

export default LinkRouter
