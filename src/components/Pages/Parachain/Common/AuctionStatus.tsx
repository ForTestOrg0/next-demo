import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'

interface Props extends BareProps {
  status: number
}

const parachainAuctionStatusMap = {
  1: 'In Auction',
  2: 'Auction Termination',
}

export const AuctionStatus: React.FC<Props> = ({ children, status, className }) => {
  return <div className={clsx('flex', className)}>{parachainAuctionStatusMap[status as keyof typeof parachainAuctionStatusMap] || '-'}</div>
}
