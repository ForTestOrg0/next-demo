import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { Percentage } from '../Percentage'

interface Props extends BareProps {
  pref: number
}

const Component: React.FC<Props> = ({ pref, className }) => {
  return <Percentage className={clsx('flex', className)} numerator={pref} denominator={1000000000} />
}

export default Component
