import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {
  disablePadding?: boolean
}

const PageContent: React.FC<Props> = ({ children, className, disablePadding, ...props }) => (
  <div className={clsx('flex justify-center', { 'py-4': !disablePadding }, className)} {...props}>
    {children}
  </div>
);

export default PageContent;
