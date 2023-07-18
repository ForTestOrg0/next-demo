import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import EChartsReact from '@/components/Echart'
import { stackLineChartOption } from '@/components/Echart/chartOptions'
import { stringToNumber, getFixedNumber } from '@/utils/bigNumber'
import dayjs from 'dayjs'
import { unwrap, useDailyToken } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { getBalanceAmount } from '@/utils/formatBalance'
import BigNumber from 'bignumber.js'

type UseDailyTokenParams = Parameters<typeof useDailyToken>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  args: UseDailyTokenParams
}

const Chart: React.FC<Props> = ({ children, host, chain, className, args }) => {
  const { data, error, isLoading } = useDailyToken(host, args)
  const dailyStatistics = unwrap(data)

  if (isLoading) return <Loading />
  if (!dailyStatistics) return <Empty />

  return (
    <div className="w-full">
      <EChartsReact
        className="w-full h-[480px]"
        option={{
          ...stackLineChartOption({
            dataset: {
              source: dailyStatistics.list.map((item) => {
                const circulate = getBalanceAmount(
                  new BigNumber(item.available).minus(new BigNumber(item.systemTotal || 0)),
                  chain.nativeTokenConf.decimals
                ).toNumber()
                const stakeData = getBalanceAmount(new BigNumber(item.staking), chain.nativeTokenConf.decimals).toNumber()
                const otherData = getBalanceAmount(new BigNumber(item.other), chain.nativeTokenConf.decimals).toNumber()
                const totalData = getBalanceAmount(new BigNumber(item.total_issuance), chain.nativeTokenConf.decimals).toNumber()
                return [
                  dayjs.utc(item.time_utc).format('YYYY-MM-DD'),
                  stringToNumber(getFixedNumber(circulate)),
                  stringToNumber(getFixedNumber(stakeData)),
                  stringToNumber(getFixedNumber(otherData)),
                  stringToNumber(getFixedNumber(totalData)),
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
