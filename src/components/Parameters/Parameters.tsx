import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'

interface Props extends BareProps {
  value?: string
}

const Parameters: React.FC<Props> = ({ value, className }) => <div className={clsx('flex', className)}>{value}</div>

export default Parameters
