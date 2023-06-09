import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { ParachainMeta } from '@/types/api'

interface Props extends BareProps {
  leaseIndex: number
  metaInfo: ParachainMeta
}

interface PropsRange extends BareProps {
  firstPeriod: number
  lastPeriod: number
  metaInfo: ParachainMeta
}

export const LeasePeriod: React.FC<Props> = ({ children, leaseIndex, metaInfo, className }) => {
  return (
    <div className={clsx('flex', className)}>
      {leaseIndex} - {leaseIndex + metaInfo.lease_periods_per_slot - 1}
    </div>
  )
}

export const LeasePeriodRange: React.FC<PropsRange> = ({ children, firstPeriod, lastPeriod, metaInfo, className }) => {
  return (
    <div className={clsx('flex', className)}>
      {firstPeriod} - {lastPeriod}
    </div>
  )
}
