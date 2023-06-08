import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { CheckCircleIcon, CircleTimesIcon, WaitIcon } from '@/ui/Svg'
import { Flex, Text } from '@/ui'

// export type ResultStatusType = 'success' | 'failed' | 'pending' | 'relayed'

interface Props extends BareProps {
  type: string
  text?: string
}

export const TransferStatus: React.FC<Props> = ({ children, type, text, className }) => {
  return (
    <div className={clsx('flex', className)}>
      {type === 'success' ? (
        <Flex className="items-center">
          <CheckCircleIcon className="w-7 text-sub-success-light" />
          <Text className="ml-1">{text}</Text>
        </Flex>
      ) : null}
      {type === 'failed' ? (
        <Flex className="items-center">
          <CircleTimesIcon className="w-7 text-sub-error-light" />
          <Text className="ml-1">{text}</Text>
        </Flex>
      ) : null}
      {type === 'pending' ? (
        <Flex className="items-center">
          <WaitIcon className="w-7 text-sub-warning-light" />
          <Text className="ml-1">{text}</Text>
        </Flex>
      ) : null}
      {type === 'relayed' ? (
        <Flex className="items-center">
          <WaitIcon className="w-7 text-sub-warning-light" />
          <Text className="ml-1">{text}</Text>
        </Flex>
      ) : null}
    </div>
  )
}
