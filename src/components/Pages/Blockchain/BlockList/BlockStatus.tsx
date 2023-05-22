import React from 'react';
import { BareProps } from '@/types/page';
import { ResultStatus } from '@/components/Status';

interface Props extends BareProps {
  finalized: boolean;
  text?: string;
}

export const BlockStatus: React.FC<Props> = ({ children, finalized, className, text }) => {
  return (<ResultStatus className={className} type={finalized ? 1 : 0} text={text} />)
};

