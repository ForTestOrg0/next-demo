import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'

interface Props extends BareProps {
  index: number
}

export const parachainBidStatusMap = {
  1: 'In Progress',
  2: 'Succeeded',
  3: 'Failed',
}

export const BidStatus: React.FC<Props> = ({ children, index, className }) => {
  return <div className={clsx('flex', className)}>{parachainBidStatusMap[index as keyof typeof parachainBidStatusMap] || '-'}</div>
}
