import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';
import { AccountDisplay } from '@/types/api';
import { Text } from '@/ui';

interface Props extends BareProps {
  account: AccountDisplay;
}

const Identicon: React.FC<Props> = ({ account, className }) => (
  <div className={clsx('flex', className)}>
    <Text>{account.display || account.address}</Text>
  </div>
);

export default Identicon;
