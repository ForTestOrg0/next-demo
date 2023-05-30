import React from 'react'
import clsx from 'clsx'
import { BareProps, Token } from '@/types/page'
import { formatNumber, getDisplayBalanceWithFixd, getFullDisplayBalance } from '@/utils/formatBalance'
import BigNumber from 'bignumber.js'

interface Props extends BareProps {
  value: string | number
  token: Token
  showSymbol?: boolean
}

const Component: React.FC<Props> = ({ value, token, showSymbol = true, className }) => {
  const balance = getFullDisplayBalance(new BigNumber(value), token.decimals).toString()
  return (
    <span className={clsx('whitespace-nowrap', className)}>
      {formatNumber(balance)} {showSymbol && token.symbol}
    </span>
  )
}

export default Component
