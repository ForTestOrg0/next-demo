import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

interface Props extends BareProps {
  date: string | number;
}


const TimeFromNow: React.FC<Props> = ({ date, className }) => (
  <div className={clsx('flex', className)}>
    {date}
  </div>
);

export default TimeFromNow;
