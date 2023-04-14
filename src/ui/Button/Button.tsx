'use client';

import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

const Flex: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
  <button
    type="button"
    className={clsx('rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50', className)}
    {...props}
  >
    {children}
  </button>
);

export default Flex;
