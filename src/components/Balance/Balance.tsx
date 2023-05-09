import React from 'react';
import clsx from 'clsx';
import { BareProps, Token } from '@/types/page';
import { formatNumber, getDisplayBalanceWithFixd, getFullDisplayBalance } from '@/utils/formatBalance';
import BigNumber from 'bignumber.js';

interface Props extends BareProps {
  value: string | number;
  token: Token;
}

const Component: React.FC<Props> = ({ value, token, className }) => {
  const balance = getFullDisplayBalance(new BigNumber(value), token.decimals).toString();
  return (<div className={clsx('flex whitespace-nowrap', className)}>
    {formatNumber(balance)} {token.symbol}
  </div>);
};

export default Component;
