import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

interface Props extends BareProps {
  value: string;
}

const Component: React.FC<Props> = ({ children, className }) => {
  return (<div className={clsx('flex', className)}>
    ABC
  </div>);
};

export default Component;
