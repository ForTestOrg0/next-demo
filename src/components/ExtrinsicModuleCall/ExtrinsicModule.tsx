import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'

interface Props extends BareProps {
  module?: string
}

const ExtrinsicModule: React.FC<Props> = ({ module, className }) => (
  <div className={clsx('rounded-2xl text-sub-white-light bg-sub-network px-5 py-1 inline-block', className)}>{module}</div>
)

export default ExtrinsicModule
