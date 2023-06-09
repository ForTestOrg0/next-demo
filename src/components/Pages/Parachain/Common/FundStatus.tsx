import React from 'react'
import { BareProps } from '@/types/page'
import { Text } from '@/ui'

interface Props extends BareProps {
  status: number
}

const parachainFundStatusMap = {
  1: 'Locked (Raising)',
  2: 'Locked (Parachain)',
  3: 'Withdraw',
  4: 'Dissolve',
  5: 'Locked (Parachain)',
}

export const FundStatus: React.FC<Props> = ({ children, status, className }) => {
  const defaultStatus = parachainFundStatusMap[2]
  return <Text className={className}>{parachainFundStatusMap[status as keyof typeof parachainFundStatusMap] || defaultStatus}</Text>
}
