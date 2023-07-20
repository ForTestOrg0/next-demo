import React, { useMemo } from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Flex, Text } from '@/ui'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import _ from 'lodash'
import { Percentage } from '@/components/Percentage'
import { useAccountStatistics } from '@/utils/api/account'
import EChartsReact from '@/components/Echart'
import { pieDoughnutThinChartOption } from '@/components/Echart/chartOptions'
import { abbreviateNumber, stringToNumber } from '@/utils/bigNumber'
import { formatNumber, getBalanceAmount } from '@/utils/formatBalance'
import BigNumber from 'bignumber.js'
import { AccountStatisticsAssets } from '@/types/api'
import { DolphinIcon, FishIcon, ShrimpIcon, WhaleIcon } from '@/ui/Svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface Props extends BareProps, BareServerSideProps {
  host: string
  excludeSystem?: boolean
}

const Component: React.FC<Props> = ({ children, className, host, chain, excludeSystem }) => {
  const { data, error, isLoading } = useAccountStatistics(host, {
    exclude_system: excludeSystem,
    type: 'assets',
  })
  const accountStatistics = unwrap(data) as AccountStatisticsAssets[] | null
  const roleConfig = useMemo(() => {
    return [
      {
        key: 'Whale',
        name: 'Whale Account',
        icon: <WhaleIcon className="w-8 text-sub-b2 group-hover:text-sub-network" />,
        tip: 'Whale Account',
      },
      {
        key: 'Dolphin',
        name: 'Dolphin Account',
        icon: <DolphinIcon className="w-8 text-sub-b2 group-hover:text-sub-network" />,
        tip: 'Dolphin Account',
      },
      {
        key: 'Fish',
        name: 'Fish Account',
        icon: <FishIcon className="w-8 text-sub-b2 group-hover:text-sub-network" />,
        tip: 'Fish Account',
      },
      {
        key: 'Shrimp',
        name: 'Shrimp Account',
        icon: <ShrimpIcon className="w-8 text-sub-b2 group-hover:text-sub-network" />,
        tip: 'Shrimp Account',
      },
    ]
  }, [])
  if (isLoading) return <Loading />
  if (!accountStatistics) return <Empty />

  return (
    <div className={clsx('flex flex-col', className)}>
      <Flex className="justify-between items-center space-x-7">
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} className="w-[240px]" slidesPerView="auto">
          {roleConfig.map((role) => {
            const roleData = _.findLast(accountStatistics, { name: role.key })
            if (!roleData) return null
            const otherBalance = getBalanceAmount(
              new BigNumber(chain.nativeToken.total_issuance).minus(roleData.total),
              chain.nativeTokenConf.decimals
            )

            const roleBalance = getBalanceAmount(new BigNumber(roleData.total), chain.nativeTokenConf.decimals)
            return (
              <SwiperSlide className="w-full pb-6" key={role.key}>
                <div className="relative">
                  <EChartsReact
                    className="w-[240px] h-[240px]"
                    option={{
                      ...pieDoughnutThinChartOption({
                        dataset: {
                          source: [
                            ['Whale', stringToNumber(roleBalance.toFixed(2))],
                            ['Other', stringToNumber(otherBalance.toFixed(2))],
                          ],
                        },
                      }),
                      tooltip: {
                        show: false,
                      },
                      color: [chain.chainConf.theme.colors[0], chain.chainConf.theme.colors[2]],
                    }}
                  />
                  <div className="absolute w-full text-center top-1/3  flex flex-col space-y-2">
                    <Percentage
                      className="text-[26px] text-sub-network font-semibold"
                      numerator={roleBalance.toString()}
                      denominator={roleBalance.plus(otherBalance).toString()}
                    />
                    <Text className="text-xs text-sub-b2">{role.name}</Text>
                    <Text bold>{abbreviateNumber(roleBalance.toString())}</Text>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Flex className="flex-col space-y-5">
          {roleConfig.map((role) => {
            const roleData = _.findLast(accountStatistics, { name: role.key })
            if (!roleData) return null
            return (
              <Flex key={role.key} className="hover:cursor-pointer group">
                {role.icon}
                <Flex className="flex-col ml-2">
                  <Flex>
                    <Text small className="text-sub-b2">
                      {role.name}
                    </Text>
                  </Flex>
                  <Text bold>{formatNumber(roleData.account_count)}</Text>
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </div>
  )
}

export default Component
