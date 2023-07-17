import React, { useMemo, useState } from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Text, Flex, Boundary, Button } from '@/ui'
import EChartsReact from '@/components/Echart'
import { multiBarChartOption } from '@/components/Echart/chartOptions'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { unwrap, useDailyStatistics } from '@/utils/api'
import dayjs from 'dayjs'
import { stringToNumber } from '@/utils/bigNumber'

interface Props extends BareProps, BareServerSideProps {
  host: string
}

type DailyStatisticsFormat = 'day' | 'hour' | '6hour'

const Page: React.FC<Props> = ({ chain, host }) => {
  const [format, setFormat] = useState<DailyStatisticsFormat>('hour')
  const start = useMemo(() => {
    let start = dayjs()
    switch (format) {
      case 'hour':
        start = dayjs().subtract(3, 'days')
        break
      case '6hour':
        start = dayjs().subtract(18, 'days')
        break
      case 'day':
        start = dayjs().subtract(72, 'days')
        break
      default:
        break
    }
    return start
  }, [format])
  const end = dayjs()
  const { data, error, isLoading } = useDailyStatistics(host, {
    start: start.format('YYYY-MM-DD'),
    end: end.format('YYYY-MM-DD'),
    format: format,
    category: 'transfer',
  })
  const dailyStatistics = unwrap(data)

  if (isLoading) return <Loading />
  if (!dailyStatistics) return <Empty />

  const dataSource =
    dailyStatistics.list?.map((item) => {
      return [dayjs(item.time_utc).format('YYYY-MM-DD HH:mm'), stringToNumber(item.transfer_amount), stringToNumber(item.total)]
    }) || []

  return (
    <>
      <Text bold className="mb-2">
        Transfer History
      </Text>
      <Boundary>
        <Flex className="space-x-3">
          <Button small outline={format !== 'hour'} onClick={() => setFormat('hour')}>
            1H
          </Button>
          <Button small outline={format !== '6hour'} onClick={() => setFormat('6hour')}>
            6H
          </Button>
          <Button small outline={format !== 'day'} onClick={() => setFormat('day')}>
            1D
          </Button>
        </Flex>
        <EChartsReact
          className="w-full h-[260px]"
          option={{
            ...multiBarChartOption({
              dataset: {
                source: dataSource,
              },
            }),
            color: chain.chainConf.theme.gradient,
          }}
        />
      </Boundary>
    </>
  )
}

export default Page
