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
import { getBalanceAmount } from '@/utils/formatBalance'
import BigNumber from 'bignumber.js'

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
                const amount = getBalanceAmount(new BigNumber(item.total), chain.nativeTokenConf.decimals).toNumber()
                return [dayjs.utc(item.time_utc).format('YYYY-MM-DD'), stringToNumber(getFixedNumber(amount))]
              }),
            },
          }),
          color: chain.chainConf.theme.gradient,
        }}
      />
    </div>
  )
}

export default Chart
