import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import dayjs from 'dayjs'
import { BlockNumber } from '@/types/base'
import { Text } from '@/ui'

interface Props extends BareProps {
  currentBlock: BlockNumber
  targetBlock: BlockNumber
  /** Second */
  BlockTime: number
}

const Time: React.FC<Props> = ({ currentBlock, targetBlock, BlockTime, className }) => {
  const time = dayjs()
    .add((targetBlock - currentBlock) * BlockTime, 'second')
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
  return <Text className={className}>{time}</Text>
}

export default Time
