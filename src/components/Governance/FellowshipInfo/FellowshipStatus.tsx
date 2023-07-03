import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { ResultStatus } from '@/components/Status'
import { ResultStatusType } from '@/components/Status/ResultStatus'

interface Props extends BareProps {
  status: string
}

function getReferendaV2Status(status: string): ResultStatusType {
  // timeline.status enum
  // Submitted Decision ConfirmStarted Confirm Approved ConfirmAborted Rejected Cancelled Timeout Killed Executed ExecutedFailed

  switch (status) {
    case 'Approved':
    case 'Executed':
      return 1
    case 'Submitted':
    case 'Decision':
    case 'ConfirmStarted':
    case 'Confirm':
      return 0
    case 'ConfirmAborted':
    case 'Rejected':
    case 'Cancelled':
    case 'Timeout':
    case 'Killed':
    case 'ExecutedFailed':
      return -1
    default:
      return 0
  }
}

export const FellowshipStatus: React.FC<Props> = ({ children, className, status }) => {
  return (
    <div className={clsx('flex', className)}>
      <ResultStatus type={getReferendaV2Status(status)} />
    </div>
  )
}
