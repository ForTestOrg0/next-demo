import React from 'react'
import clsx from 'clsx'
import { BareProps, Token } from '@/types/page'
import { formatNumber, getDisplayBalanceWithFixd, getFullDisplayBalance } from '@/utils/formatBalance'
import BigNumber from 'bignumber.js'

interface Props extends BareProps {
  value: string | number
  token: Token
  showSymbol?: boolean
  displayDecimals?: number
}

const Component: React.FC<Props> = ({ value, token, showSymbol = true, className, displayDecimals = 3 }) => {
  const balance = getDisplayBalanceWithFixd(new BigNumber(value), token.decimals, displayDecimals).toString()
  return (
    <span className={clsx('whitespace-nowrap', className)}>
      {formatNumber(balance)} {showSymbol && token.symbol}
    </span>
  )
}

export default Component
