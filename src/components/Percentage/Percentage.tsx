import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import BigNumber from 'bignumber.js'
import { Text } from '@/ui'

interface Props extends BareProps {
  numerator: string | number
  denominator: string | number
}

const Component: React.FC<Props> = ({ children, className, numerator, denominator }) => {
  const percent = new BigNumber(numerator).div(denominator).times(100).toFixed(2)
  return <Text className={className}>{percent} %</Text>
}

export default Component
