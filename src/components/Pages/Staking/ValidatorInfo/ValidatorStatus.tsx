import React from 'react'
import { BareProps } from '@/types/page'
import { ResultStatus } from '@/components/Status'
import { ResultStatusType } from '@/components/Status/ResultStatus'

interface Props extends BareProps {
  status: string
  text?: string
}

const statusMap: Record<string, Record<'value', ResultStatusType>> = {
  active: {
    value: 1,
  },
  waiting: {
    value: 0,
  },
  retired: {
    value: -1,
  },
}

export const ValidatorStatus: React.FC<Props> = ({ children, status, className, text }) => {
  const value = statusMap[status as keyof typeof statusMap]
  return <ResultStatus className={className} type={value.value} text={text} />
}
