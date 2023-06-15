import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import TabBox from '../TabBox'
import { Flex, Text } from '@/ui'
import { Card } from '../Card'
import EChartsReact from '@/components/Echart'
import { pieChartOption } from '@/components/Echart/chartOptions'
import { stringToNumber } from '@/utils/bigNumber'
import { GetDataStatisticsProps, unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import BigNumber from 'bignumber.js'
import { formatNumber } from '@/utils/formatBalance'
import { Percentage } from '@/components/Percentage'
import { useAccountStatistics } from '@/utils/api/account'
import { AccountStatisticsAssets } from '@/types/api'
import { DolphinIcon, FishIcon, ShrimpIcon, WhaleIcon } from '@/ui/Svg'

type UseAccountStatisticsParams = Parameters<typeof useAccountStatistics>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  dataStatistics: GetDataStatisticsProps
  args: UseAccountStatisticsParams
}

interface LegendProps extends BareProps {
  color: string
  title: string
  value: ReactElement
}

const assetsAccountMap = (color: string) => {
  return {
    Whale: <WhaleIcon className={'w-8 h-8'} style={{ color }} />,
    Dolphin: <DolphinIcon className={'w-8 h-8'} style={{ color }} />,
    Fish: <FishIcon className={'w-8 h-8'} style={{ color }} />,
    Shrimp: <ShrimpIcon className={'w-8 h-8'} style={{ color }} />,
  }
}

const Legend: React.FC<LegendProps> = ({ children, title, value, color, className }) => {
  return (
    <div className={clsx('flex', className)}>
      <div>{assetsAccountMap(color)[title as keyof typeof assetsAccountMap]}</div>

      {/* <div className={clsx('w-2 h-8 mr-2 rounded-sm', colorCls)}></div> */}
      <div className="ml-2">
        <Text block className="scale-[0.83] origin-[0%_50%] text-sub-b2 mt-[-4px]">
          {title} Account
        </Text>
        <Text block>{value}</Text>
      </div>
    </div>
  )
}

export const InsightsAccount: React.FC<Props> = ({ children, host, chain, dataStatistics, className, args }) => {
  const { data, error, isLoading } = useAccountStatistics(host, args)
  const accountStatistics = unwrap(data)
  const isHolderGrow = new BigNumber(dataStatistics.up_holder_account_count).gte(dataStatistics.down_holder_account_count)
  const isActiveAccountGrow = new BigNumber(dataStatistics.up_active_account_count).gte(dataStatistics.down_active_account_count)

  if (isLoading) return <Loading />
  if (!accountStatistics) return <Empty />
  const totalAccount = (accountStatistics as AccountStatisticsAssets[]).reduce((total, item) => {
    return total + item.account_count
  }, 0)
  return (
    <TabBox title="Account" boxClassName="flex space-y-3 flex-1 flex-col">
      <Flex className="space-x-3 justify-between">
        <Card className="flex-1">
          <Text>Holders</Text>
          <Flex className="justify-between mt-5">
            <Text bold className="!text-[22px]">
              {dataStatistics.up_holder_account_count}
            </Text>
            <Text bold className={clsx('!text-[22px]', isHolderGrow ? 'text-sub-success' : 'text-sub-error')}>
              {isHolderGrow && '+'}
              {formatNumber(new BigNumber(dataStatistics.up_holder_account_count).minus(dataStatistics.down_holder_account_count))}
            </Text>
          </Flex>
          <Flex className="justify-between mt-1">
            <Text>Total</Text>
            <Text>MoM</Text>
          </Flex>
        </Card>
        <Card className="flex-1">
          <Text>Active Accounts</Text>
          <Flex className="justify-between  mt-5">
            <Text bold className="!text-[22px]">
              {dataStatistics.up_active_account_count}
            </Text>
            <Text bold className={clsx('!text-[22px]', isActiveAccountGrow ? 'text-sub-success' : 'text-sub-error')}>
              {isActiveAccountGrow ? '+' : '-'}
              <Percentage
                numerator={new BigNumber(dataStatistics.up_active_account_count).minus(dataStatistics.down_active_account_count).abs().toNumber()}
                denominator={stringToNumber(dataStatistics.up_active_account_count)}
              />
            </Text>
          </Flex>
          <Flex className="justify-between mt-1">
            <Text>Daily Active Accounts</Text>
            <Text>24h Change</Text>
          </Flex>
        </Card>
      </Flex>
      <Card className="flex-1 flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <EChartsReact
            className="w-[150px] h-[150px]"
            option={{
              ...pieChartOption({
                dataset: {
                  source: (accountStatistics as AccountStatisticsAssets[]).map((item) => {
                    return [item.name, item.account_count]
                  }),
                },
              }),
              color: chain.chainConf.theme.gradient,
            }}
          />
        </div>
        <div className="flex-[2] grid grid-cols-2 gap-8">
          {(accountStatistics as AccountStatisticsAssets[]).map((item, index) => {
            const colorCls = chain.chainConf.theme.gradient[index]
            return (
              <Legend
                key={item.name}
                color={colorCls}
                title={item.name}
                value={
                  <>
                    <Text bold className="text-sub-network">
                      {item.account_count}
                    </Text>
                    <Percentage className="ml-2 text-xs" numerator={item.account_count} denominator={totalAccount} />
                  </>
                }
              />
            )
          })}
        </div>
      </Card>
    </TabBox>
  )
}
