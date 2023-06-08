import React from 'react'
import { BareProps } from '@/types/page'
import { ResultStatus } from '@/components/Status'

interface Props extends BareProps {
  success: boolean
  text?: string
}

export const TransferStatus: React.FC<Props> = ({ children, success, className, text }) => {
  return <ResultStatus className={className} type={success ? 1 : -1} text={text} />
}
