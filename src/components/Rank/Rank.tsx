import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { Text } from '@/ui'

interface Props extends BareProps {
  rank: number
  threshold?: number
}

const Component: React.FC<Props> = ({ children, rank, className, threshold = 10 }) => {
  const inThreshold = rank <= threshold
  const gtThousand = rank >= 1000
  return (
    <div
      className={clsx(
        `h-7 flex flex-grow-0 justify-center items-center rounded-full ${
          inThreshold ? 'bg-sub-network ' : 'text-sub-network border-sub-network border'
        } ${gtThousand ? 'inline-flex px-2' : 'flex w-7'}`,
        className
      )}>
      <Text className={inThreshold ? 'text-sub-white' : 'text-sub-network'}>{rank}</Text>
    </div>
  )
}

export default Component
