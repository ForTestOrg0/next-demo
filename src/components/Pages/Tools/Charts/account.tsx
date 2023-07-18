import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import EChartsReact from '@/components/Echart'
import { Flex, Text } from '@/ui'
import { multiLineChartOption } from '@/components/Echart/chartOptions'
import { stringToNumber, getFixedNumber } from '@/utils/bigNumber'
import dayjs from 'dayjs'
import { unwrap, useDailyStatistics } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'

type UseDailyStatisticsParams = Parameters<typeof useDailyStatistics>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  args: UseDailyStatisticsParams
}

const Chart: React.FC<Props> = ({ children, host, chain, className, args }) => {
  const legends = ['Active Account', 'New Account']
  const { data: newAccountData, isLoading: isNewAccountLoading } = useDailyStatistics(host, {
    ...args,
    category: 'NewAccount',
  })
  const { data: activeAccountData, isLoading: isActiveAccountLoading } = useDailyStatistics(host, args)
  const dailyNewAccount = unwrap(newAccountData)
  const dailyActiveAccount = unwrap(activeAccountData)

  if (isActiveAccountLoading || isNewAccountLoading) return <Loading />
  if (!dailyNewAccount || !dailyActiveAccount) return <Empty />

  return (
    <div className="w-full relative">
      <Flex className="absolute right-5">
        {legends.map((item, index) => {
          const colorCls = chain.chainConf.theme.gradient[index]
          return (
            <div key={item} className="rounded py-[2px] px-4 ml-2" style={{ backgroundColor: colorCls }}>
              <Text className="text-white">{item}</Text>
            </div>
          )
        })}
      </Flex>
      <EChartsReact
        className="w-full h-[480px]"
        option={{
          ...multiLineChartOption({
            dataset: {
              source: dailyActiveAccount.list?.map((item, index) => {
                return [
                  dayjs.utc(item.time_utc).format('YYYY-MM-DD'),
                  stringToNumber(getFixedNumber(item.total)),
                  stringToNumber(getFixedNumber(dailyNewAccount.list[index].total)),
                ]
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
