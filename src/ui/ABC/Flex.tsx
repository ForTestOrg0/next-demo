import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

interface Props extends BareProps {
  key?: string;
}


const Flex: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={clsx('flex', className)} {...props}>
    {children}
  </div>
);

export default Flex;
