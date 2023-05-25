import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';
import { ResultStatus } from '@/components/Status';
import { ResultStatusType } from '@/components/Status/ResultStatus';

interface Props extends BareProps {
  status: keyof typeof map;
  text?: string;
}

const map: Record<string, ResultStatusType> = {
  executed: 1,
  disapproved: -1,
  proposed: 0,
};

const Component: React.FC<Props> = ({ children, status, className, text }) => {
  return <ResultStatus type={map[status]} text={text} />;
};

export default Component;
