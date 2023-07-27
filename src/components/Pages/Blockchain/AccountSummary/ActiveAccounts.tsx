import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Button, Flex, Text } from '@/ui'
import { unwrap, useDailyStatistics } from '@/utils/api'
import dayjs from 'dayjs'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import _ from 'lodash'
import { Percentage } from '@/components/Percentage'
import { formatNumber } from '@/utils/formatBalance'
import { ToolsChartsLink } from '@/components/Links'

interface Props extends BareProps, BareServerSideProps {
  host: string
}

const Component: React.FC<Props> = ({ children, className, host, chain }) => {
  const [activeCount, setActiveCount] = useState(0)
  const [activeOrigin, setActiveOrigin] = useState(0)
  const start = dayjs().subtract(2, 'days')
  const end = dayjs().subtract(1, 'days')
  const { data, error, isLoading } = useDailyStatistics(host, {
    start: start.format('YYYY-MM-DD'),
    end: end.format('YYYY-MM-DD'),
    format: 'day',
    category: 'ActiveAccount',
  })
  const dailyStatistics = unwrap(data)

  useEffect(() => {
    if (dailyStatistics?.list) {
      if (dailyStatistics.list.length > 1) {
        setActiveCount(dailyStatistics.list[1]['total'])
        const origin = dailyStatistics.list[0]['total']
        if (origin) {
          setActiveOrigin(origin)
        }
      } else {
        setActiveCount(dailyStatistics.list[0]['total'])
      }
    }
  }, [chain.metadata.count_account, dailyStatistics?.list])

  if (isLoading) return <Loading />
  if (!dailyStatistics) return <Empty />

  return (
    <div className={clsx('flex flex-col', className)}>
      <Flex className="justify-between items-center">
        <Text>Active Accounts</Text>
        <ToolsChartsLink query={{ type: 'account' }}>
          <Button outline>Detail</Button>
        </ToolsChartsLink>
      </Flex>
      <Flex className="justify-between items-center mt-5">
        <Text bold className="!text-[26px]">
          {formatNumber(activeCount)}
        </Text>
        <Text bold className={`${activeCount - activeOrigin >= 0 ? 'text-sub-success' : 'text-sub-error'}`}>
          <Percentage className="!text-[26px]" numerator={activeCount - activeOrigin} denominator={activeOrigin} />
        </Text>
      </Flex>
      <Flex className="justify-between items-center mt-2">
        <Text>Daily Active Account</Text>
        <Text>24h change</Text>
      </Flex>
    </div>
  )
}

export default Component
