import React, { AnchorHTMLAttributes } from 'react';
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

  return (<a className={className} {...internalProps} {...props}>
    {children}
  </a>)
};

export default Link;
