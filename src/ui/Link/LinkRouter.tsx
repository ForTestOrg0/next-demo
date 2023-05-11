import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';
import Link, { LinkProps } from 'next/link';

export interface LinkRouterProps extends BareProps, LinkProps { }

const LinkRouter: React.FC<LinkRouterProps> = ({ children, className, ...props }) => {
  return (<Link className={clsx('text-sm text-sub-link', className)} {...props}>
    {children}
  </Link>)
};

export default LinkRouter;
