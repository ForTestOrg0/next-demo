import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Button, Flex, LinkRouter, Text } from '@/ui'
import { unwrap, useDailyStatistics } from '@/utils/api'
import dayjs from 'dayjs'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import _ from 'lodash'
import { formatNumber } from '@/utils/formatBalance'
import { ToolsChartsLink } from '@/components/Links'

interface Props extends BareProps, BareServerSideProps {
  host: string
}

const Component: React.FC<Props> = ({ children, className, host, chain }) => {
  const [holderChange, setHolderChange] = useState(0)
  const end = dayjs().subtract(0, 'days')
  const start = dayjs().subtract(1, 'days')
  const { data, error, isLoading } = useDailyStatistics(host, {
    start: start.format('YYYY-MM-DD'),
    end: end.format('YYYY-MM-DD'),
    format: 'hour',
    category: 'AccountHolderTotal',
  })
  const dailyStatistics = unwrap(data)

  useEffect(() => {
    if (dailyStatistics?.list) {
      let noZero = _.filter(dailyStatistics.list, (item) => {
        return item.total !== 0
      })
      if (noZero.length) {
        setHolderChange(chain.metadata.count_account - noZero[0]['total'])
      }
    }
  }, [chain.metadata.count_account, dailyStatistics?.list])

  if (isLoading) return <Loading />
  if (!dailyStatistics) return <Empty />

  return (
    <div className={clsx('flex flex-col', className)}>
      <Flex className="justify-between items-center">
        <Text>Holders</Text>
        <ToolsChartsLink query={{ type: 'holder' }}>
          <Button outline>Detail</Button>
        </ToolsChartsLink>
      </Flex>
      <Flex className="justify-between items-center mt-5">
        <Text bold className="!text-[26px]">
          {formatNumber(chain.metadata.count_account)}
        </Text>
        <Text bold className={`!text-[26px] ${holderChange >= 0 ? 'text-sub-success' : 'text-sub-error'}`}>
          {holderChange >= 0 && '+'}
          {formatNumber(holderChange)}
        </Text>
      </Flex>
      <Flex className="justify-between items-center mt-2">
        <Text>Total</Text>
        <Text>Last 24h</Text>
      </Flex>
    </div>
  )
}

export default Component
