import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import BigNumber from 'bignumber.js'
import { Percentage } from '@/components/Percentage'

interface Props extends BareProps {
  myBond: string | number
  nominatorBond: string | number
  validatorBond: string | number
}

export const MyShare: React.FC<Props> = ({ myBond, nominatorBond, validatorBond, className }) => {
  const bondTotal = new BigNumber(nominatorBond).plus(validatorBond).toString()
  return <Percentage className={clsx('flex', className)} numerator={myBond} denominator={bondTotal} />
}
