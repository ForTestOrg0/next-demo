import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import EChartsReact from '@/components/Echart'
import { basicAreaChartOption } from '@/components/Echart/chartOptions'
import { stringToNumber, getFixedNumber } from '@/utils/bigNumber'
import dayjs from 'dayjs'
import { unwrap, useDailyStatistics } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { abbreviateNumber } from '@/utils/bigNumber'

type UseDailyStatisticsParams = Parameters<typeof useDailyStatistics>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  args: UseDailyStatisticsParams
}

const Chart: React.FC<Props> = ({ children, host, chain, className, args }) => {
  const { data, error, isLoading } = useDailyStatistics(host, args)
  const dailyStatistics = unwrap(data)

  if (isLoading) return <Loading />
  if (!dailyStatistics) return <Empty />

  return (
    <div className="w-full">
      <EChartsReact
        className="w-full h-[480px]"
        option={{
          ...basicAreaChartOption({
            dataset: {
              source: dailyStatistics.list.map((item) => {
                return [dayjs.utc(item.time_utc).format('YYYY-MM-DD'), stringToNumber(getFixedNumber(item.total))]
              }),
            },
          }),
          yAxis: {
            type: 'value',
            show: true,
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: '#E7EAF3',
              },
            },
            axisLabel: {
              formatter(value: number) {
                return abbreviateNumber(value, 1) + ' s'
              },
            },
            axisTick: {
              show: false,
            },
            nameTextStyle: {
              align: 'right',
              padding: [0, 6, 0, 0],
            },
          },
          color: chain.chainConf.theme.gradient,
        }}
      />
    </div>
  )
}

export default Chart
