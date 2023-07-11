import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { CheckCircleIcon, CircleTimesIcon, WaitIcon } from '@/ui/Svg'
import { Flex, Text } from '@/ui'

export type ResultStatusType = 1 | -1 | 0

interface Props extends BareProps {
  type: ResultStatusType
  text?: string
}

const Component: React.FC<Props> = ({ children, type, text, className }) => {
  return (
    <div className={clsx('flex', className)}>
      {type === 1 ? (
        <Flex className="items-center">
          <CheckCircleIcon className="w-[21.34px] text-sub-success-light" />
          <Text className="ml-2">{text}</Text>
        </Flex>
      ) : null}
      {type === -1 ? (
        <Flex className="items-center">
          <CircleTimesIcon className="w-[21.34px] text-sub-error-light" />
          <Text className="ml-2">{text}</Text>
        </Flex>
      ) : null}
      {type === 0 ? (
        <Flex className="items-center">
          <WaitIcon className="w-[21.34px] text-sub-warning-light" />
          <Text className="ml-2">{text}</Text>
        </Flex>
      ) : null}
    </div>
  )
}

export default Component
