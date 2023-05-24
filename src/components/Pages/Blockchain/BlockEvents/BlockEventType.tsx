import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';
import { Text } from '@/ui';
import { EVENT_PHASE } from '@/config/constants';

interface Props extends BareProps {
  phase: number;
}

export const BlockEventType: React.FC<Props> = ({ children, phase, className }) => {
  return (<div className={clsx('flex', className)}>
    {phase === EVENT_PHASE.FINALIZATION ? <Text>Finalization</Text> : null}
    {phase === EVENT_PHASE.INITIALIZATION ? <Text>Initialization</Text> : null}
    {phase === EVENT_PHASE.EXTRINSIC ? <Text>Extrinsic</Text> : null}
  </div>);
};

