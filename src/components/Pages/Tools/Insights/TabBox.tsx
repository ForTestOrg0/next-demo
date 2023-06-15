import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'

interface Props extends BareProps {
  title: string
  boxClassName?: string
}

const Component: React.FC<Props> = ({ children, title, className, boxClassName }) => {
  return (
    <div className={clsx('flex flex-col  w-full', className)}>
      <div className="self-start bg-sub-network rounded-t-xl px-5 py-2 font-bold text-sub-white uppercase">{title}</div>
      <div className={clsx('bg-sub-white rounded-b-lg p-2', boxClassName)}>{children}</div>
    </div>
  )
}

export default Component
