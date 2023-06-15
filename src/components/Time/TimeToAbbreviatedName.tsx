import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import dayjs from 'dayjs'
import { BlockNumber } from '@/types/base'
import { Text } from '@/ui'
import { ordinalSuffixOf } from '@/utils/bigNumber'

interface Props extends BareProps {
  date: number | string
}

const Time: React.FC<Props> = ({ date, className }) => {
  const timeDayjs = dayjs(date)
  const startPart = timeDayjs.format('YYYY MMM')
  const endPart = ordinalSuffixOf(timeDayjs.date())

  return (
    <Text className={className}>
      {startPart} {endPart}
    </Text>
  )
}

export default Time
