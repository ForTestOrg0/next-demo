import React, { useMemo } from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import EChartsReact from '@/components/Echart'
import { basicAreaChartOption, stackBarChartOption } from '@/components/Echart/chartOptions'
import { stringToNumber, getFixedNumber } from '@/utils/bigNumber'
import dayjs from 'dayjs'
import { EChartsOption } from 'echarts'
import { unwrap, useDailyXCMState } from '@/utils/api'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'

type UseDailyXCMStateParams = Parameters<typeof useDailyXCMState>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  type?: string
  config?: EChartsOption
  style?: React.CSSProperties
  args: UseDailyXCMStateParams
}

const Chart: React.FC<Props> = ({ children, host, type = 'msg', chain, style, config, className, args }) => {
  const relaySubdomain = getRelaySubdomainFromSubdomain(host)
  const { data, error, isLoading } = useDailyXCMState(relaySubdomain, {
    filter_para_id: relaySubdomain === host ? undefined : chain?.chainConf.parachain?.id,
    ...args,
  })
  const isRelayChain = relaySubdomain === host
  const dailyStatistics = unwrap(data)
  const getDailyData = () => {
    let result: any[] = []
    let valueField: 'total' | 'message_total' = 'message_total'
    if (type === 'transfer') {
      valueField = 'total'
    }
    if (dailyStatistics) {
      let startDate = dailyStatistics['all']?.[0]?.['time_utc'] || dailyStatistics['send']?.[0]?.['time_utc'] || dayjs().subtract(30, 'days')
      if (dailyStatistics['all']?.[0]) {
        let firstItem = dailyStatistics['all'].find(function (o) {
          return o[valueField] > 0
        })
        if (firstItem?.['time_utc']) {
          startDate = firstItem['time_utc']
        }
      } else if (dailyStatistics['send']?.[0]) {
        let sendFirstItem = dailyStatistics['send'].find(function (o) {
          return o[valueField] > 0
        })
        let receiveFirstItem = dailyStatistics['receiver']?.find(function (o) {
          return o[valueField] > 0
        })
        if (dayjs(sendFirstItem?.['time_utc']).isBefore(dayjs(receiveFirstItem?.['time_utc']))) {
          if (sendFirstItem?.['time_utc']) {
            startDate = sendFirstItem['time_utc']
          }
        } else {
          if (receiveFirstItem?.['time_utc']) {
            startDate = receiveFirstItem['time_utc']
          }
        }
      }
      const start = dayjs(startDate)
      const end = dayjs()
      const days = (end.valueOf() - start.valueOf()) / (24 * 3600 * 1000)
      const result = []
      const timeUTC = 'time_utc'
      const timeFormat = 'YYYY-MM-DD'
      for (let i = 0; i < days - 1; i++) {
        result.push({
          time: start.add(i, 'days').format(timeFormat),
          transfer_count: 0,
          received: 0,
          sent: 0,
          isEmpty: true,
        })
      }
      result.forEach((emptyItem) => {
        dailyStatistics['receiver']?.forEach((item) => {
          if (emptyItem.time === dayjs(item[timeUTC]).format(timeFormat)) {
            emptyItem.received = item[valueField]
            return false
          }
        })
        dailyStatistics['send']?.forEach((item) => {
          if (emptyItem.time === dayjs(item[timeUTC]).format(timeFormat)) {
            emptyItem.sent = item[valueField]
            return false
          }
        })
      })
      return result
    }
    return []
  }
  const dailyData = getDailyData()
  if (isLoading) return <Loading />
  if (!dailyStatistics) return <Empty />

  return (
    <div className="w-full">
      {isRelayChain && (
        <EChartsReact
          className="w-full h-[480px]"
          style={style}
          option={{
            ...basicAreaChartOption({
              dataset: {
                source: dailyStatistics?.all?.map((item) => {
                  if (type === 'transfer') {
                    return [dayjs.utc(item.time_utc).format('YYYY-MM-DD'), stringToNumber(getFixedNumber(item.total))]
                  } else {
                    return [dayjs.utc(item.time_utc).format('YYYY-MM-DD'), stringToNumber(getFixedNumber(item.message_total))]
                  }
                }),
              },
            }),
            ...config,
            color: chain.chainConf.theme.gradient,
          }}
        />
      )}
      {!isRelayChain && (
        <EChartsReact
          className="w-full h-[480px]"
          option={{
            ...stackBarChartOption({
              dataset: {
                source: dailyData?.map((item, index) => {
                  return [
                    dayjs.utc(item.time).format('YYYY-MM-DD'),
                    stringToNumber(getFixedNumber(item.received)),
                    stringToNumber(getFixedNumber(item.sent)),
                  ]
                }),
              },
            }),
            ...config,
            color: chain.chainConf.theme.gradient,
          }}
        />
      )}
    </div>
  )
}

export default Chart
