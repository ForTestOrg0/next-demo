import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

const Loading: React.FC<BareProps> = ({ children, className }) => (
  <div className={clsx('flex', className)}>Loading</div>
);

export default Loading;
