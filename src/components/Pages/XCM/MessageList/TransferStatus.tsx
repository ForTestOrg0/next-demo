import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { CheckCircleIcon, CircleTimesIcon, WaitIcon } from '@/ui/Svg'
import { Flex, Text } from '@/ui'

// export type ResultStatusType = 'success' | 'failed' | 'pending' | 'relayed'

interface Props extends BareProps {
  type: string
  iconClass?: string
  text?: string
}

export const TransferStatus: React.FC<Props> = ({ children, type, text, className, iconClass }) => {
  return (
    <div className={clsx('flex', className)}>
      {type === 'success' ? (
        <Flex className="items-center">
          <CheckCircleIcon className={clsx('w-7 text-sub-success-light', iconClass)} />
          <Text className="ml-1">{text}</Text>
        </Flex>
      ) : null}
      {type === 'failed' ? (
        <Flex className="items-center">
          <CircleTimesIcon className={clsx('w-7 text-sub-error-light', iconClass)} />
          <Text className="ml-1">{text}</Text>
        </Flex>
      ) : null}
      {type === 'pending' ? (
        <Flex className="items-center">
          <WaitIcon className={clsx('w-7 text-sub-warning-light', iconClass)} />
          <Text className="ml-1">{text}</Text>
        </Flex>
      ) : null}
      {type === 'relayed' ? (
        <Flex className="items-center">
          <WaitIcon className={clsx('w-7 text-sub-warning-light', iconClass)} />
          <Text className="ml-1">{text}</Text>
        </Flex>
      ) : null}
    </div>
  )
}
