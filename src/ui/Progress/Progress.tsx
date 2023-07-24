import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'

interface Props extends BareProps {
  /** 1-100 */
  value: number
}

const Progress: React.FC<Props> = ({ children, className, value }) => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(value)
  }, [value])
  return (
    <div className={clsx('flex relative h-2 w-full bg-sub-b3 rounded-full overflow-hidden', className)}>
      <div className={`transition-all duration-500 absolute h-2 top-0 left-0 bg-sub-network rounded-full w-0`} style={{ width: `${width}%` }}></div>
    </div>
  )
}

export default Progress
