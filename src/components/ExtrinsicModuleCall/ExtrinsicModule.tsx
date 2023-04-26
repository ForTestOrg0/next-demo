import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

interface Props extends BareProps {
  module?: string;
}


const ExtrinsicModule: React.FC<Props> = ({ module, className }) => (
  <div className={clsx('flex', className)}>
    {module}
  </div>
);

export default ExtrinsicModule;
