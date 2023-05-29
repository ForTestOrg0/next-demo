import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import BigNumber from 'bignumber.js'

interface Props extends BareProps {
  numerator: string | number
  denominator: string | number
}

const Component: React.FC<Props> = ({ children, className, numerator, denominator }) => {
  const percent = new BigNumber(numerator).div(denominator).times(100).toFixed(2)
  return <div className={clsx('flex', className)}>{percent} %</div>
}

export default Component
