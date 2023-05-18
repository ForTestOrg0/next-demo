import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

export const Table: React.FC<BareProps> = ({ children, className, ...props }) => (
  <table className={clsx('text-sm', className)} {...props}>
    {children}
  </table>
);

export const Th: React.FC<BareProps> = ({ children, className, ...props }) => (
  <th className={clsx('px-2 py-4 bg-sub-b4 text-left font-semibold whitespace-nowrap', className)} {...props}>
    {children}
  </th>
);

export const Tr: React.FC<BareProps> = ({ children, className, ...props }) => (
  <tr className={clsx('group', className)} {...props}>
    {children}
  </tr>
);

export const Td: React.FC<BareProps> = ({ children, className, ...props }) => (
  <td className={clsx('px-2 py-4 border-b border-sub-b4 group-hover:bg-sub-b4/60', className)} {...props}>
    {children}
  </td>
);