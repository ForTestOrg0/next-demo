'use client';

import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  outline?: boolean;
}

const Button: React.FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  outline,
  ...props
}) => (
  <button
    type="button"
    className={clsx(
      'rounded px-8 py-1.5 text-sm border border-sub-network',
      { 'text-sub-network bg-sub-white': outline },
      { 'text-sub-white bg-sub-network': !outline },
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
