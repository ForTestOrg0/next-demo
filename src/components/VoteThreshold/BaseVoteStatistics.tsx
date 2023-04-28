import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

interface Props extends BareProps {
  ayeAmount: number;
  nayAmount: number;
}


const BaseVoteStatistics: React.FC<Props> = ({ ayeAmount, nayAmount, className }) => (
  <div className={clsx('flex', className)}>
    aye:{ayeAmount}, nay:{nayAmount}
  </div>
);

export default BaseVoteStatistics;
