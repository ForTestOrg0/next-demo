import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import dayjs from 'dayjs'

interface Props extends BareProps {
  date: string | number
}

const Time: React.FC<Props> = ({ date, className }) => {
  const time = dayjs.unix(+date).utc().format('YYYY-MM-DD HH:mm:ss')
  return <div className={clsx('flex', className)}>{time} (+UTC)</div>
}

export default Time
