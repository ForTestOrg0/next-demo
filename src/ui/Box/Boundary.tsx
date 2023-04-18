import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

const Boundary: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx('rounded bg-sub-white border border-sub-b4 shadow-module py-2 px-5', className)} {...props}>
    {children}
  </div>
);

export default Boundary;
