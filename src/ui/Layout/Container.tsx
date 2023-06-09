import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx('max-w-screen-xl', className)} {...props}>
    {children}
  </div>
);

export default Container;
