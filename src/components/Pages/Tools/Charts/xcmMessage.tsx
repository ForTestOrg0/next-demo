import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import EChartsReact from '@/components/Echart'
import { basicAreaChartOption } from '@/components/Echart/chartOptions'
import { stringToNumber, getFixedNumber } from '@/utils/bigNumber'
import dayjs from 'dayjs'
import { unwrap, useDailyXCMState } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'

type UseDailyXCMStateParams = Parameters<typeof useDailyXCMState>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  type?: string
  args: UseDailyXCMStateParams
}

const Chart: React.FC<Props> = ({ children, host, type = 'msg', chain, className, args }) => {
  const { data, error, isLoading } = useDailyXCMState(host, args)
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
              source: dailyStatistics.all.map((item) => {
                if (type === 'transfer') {
                  return [dayjs.utc(item.time_utc).format('YYYY-MM-DD'), stringToNumber(getFixedNumber(item.total))]
                } else {
                  return [dayjs.utc(item.time_utc).format('YYYY-MM-DD'), stringToNumber(getFixedNumber(item.message_total))]
                }
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
