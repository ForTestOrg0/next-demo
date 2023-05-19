import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

export const TableCol: React.FC<BareProps> = ({ children, className, ...props }) => (
  <table className={clsx('text-sm break-all', className)} {...props}>
    {children}
  </table>
);

export const ThCol: React.FC<BareProps> = ({ children, className, ...props }) => (
  <th className={clsx('px-2 py-4 bg-sub-b4 text-left font-semibold whitespace-nowrap', className)} {...props}>
    {children}
  </th>
);

export const TrCol: React.FC<BareProps> = ({ children, className, ...props }) => (
  <tr className={clsx('group flex flex-col lg:table-row', className)} {...props}>
    {children}
  </tr>
);

export const TdCol: React.FC<BareProps> = ({ children, className, ...props }) => (
  <td className={clsx('px-2 py-2 lg:py-4 last-of-type:border-b last-of-type:pt-0 lg:last-of-type:pt-4 lg:border-b border-sub-b4 group-hover:bg-sub-b4/60', className)} {...props}>
    {children}
  </td>
);