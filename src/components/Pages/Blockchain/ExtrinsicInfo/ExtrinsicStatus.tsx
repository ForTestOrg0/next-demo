import React from 'react'
import { BareProps } from '@/types/page'
import { ResultStatus } from '@/components/Status'

interface Props extends BareProps {
  status: boolean
}

export const ExtrinsicStatus: React.FC<Props> = ({ children, status, className }) => {
  return <ResultStatus className={className} type={status ? 1 : -1} text={status ? 'Success' : 'Failed'} />
}
