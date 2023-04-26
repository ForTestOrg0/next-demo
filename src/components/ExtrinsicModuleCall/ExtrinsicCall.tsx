import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

interface Props extends BareProps {
  call?: string;
}


const ExtrinsicCall: React.FC<Props> = ({ call, className }) => (
  <div className={clsx('flex', className)}>
    {call}
  </div>
);

export default ExtrinsicCall;
