import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

const PageContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx('flex justify-center', className)} {...props}>
    {children}
  </div>
);

export default PageContent;
