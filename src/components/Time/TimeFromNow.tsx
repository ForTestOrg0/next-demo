import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';
import { timeAgo } from '@/utils/time';

interface Props extends BareProps {
  date: number;
  isMilliseconds?: boolean;
  short?: boolean;
}

const TimeFromNow: React.FC<Props> = ({ date, isMilliseconds, className }) => {
  const fromNow = isMilliseconds? timeAgo(date * 1000) : timeAgo(date);
  return (<div className={clsx('flex whitespace-nowrap', className)}>
    {fromNow}
  </div>);
};

export default TimeFromNow;
