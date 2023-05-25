import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

const Boundary: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clsx(
      'rounded bg-sub-white border border-sub-b4 shadow-module p-2 lg:px-5 w-full',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Boundary;
