import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

export interface LinkProps extends BareProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

const getExternalLinkProps = (): { target: string; rel: string } => ({
  target: '_blank',
  rel: 'noreferrer noopener'
});

const Link: React.FC<LinkProps> = ({ children, className, external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};

  return (<a className={clsx('text-sm', className)} {...internalProps} {...props}>
    {children}
  </a>)
};

export default Link;
