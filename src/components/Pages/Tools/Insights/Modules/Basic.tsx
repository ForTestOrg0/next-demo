import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import TabBox from '../TabBox'
import { Flex, Text } from '@/ui'
import { Card, CardX } from '../Card'
import { Balance } from '@/components/Balance'
import EChartsReact from '@/components/Echart'
import { areaChartOption } from '@/components/Echart/chartOptions'
import { ExtrinsicsIcon, TransferIcon, HotIcon, TokenIcon } from '@/ui/Svg'
import { stringToNumber, getFixedNumber } from '@/utils/bigNumber'
import dayjs from 'dayjs'
import { GetDataStatisticsProps, unwrap } from '@/utils/api'
import { usePriceHistory } from '@/utils/api/price'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { formatNumber } from '@/utils/formatBalance'

type UsePriceHistoryParams = Parameters<typeof usePriceHistory>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  dataStatistics: GetDataStatisticsProps
  args: UsePriceHistoryParams
}

export const InsightsBasic: React.FC<Props> = ({ children, host, chain, dataStatistics, className, args }) => {
  const { data, error, isLoading } = usePriceHistory(host, args)
  const priceHistory = unwrap(data)

  if (isLoading) return <Loading />
  if (!priceHistory) return <Empty />

  return (
    <TabBox title="Basic" boxClassName="flex space-x-3 flex-1">
      <Flex className="flex-col space-y-3 basis-44 justify-between">
        <CardX
          icon={<ExtrinsicsIcon className="text-sub-white-light" width={18} />}
          title="Extrinsic"
          value={formatNumber(dataStatistics.extrinsic_count)}
        />
        <CardX
          icon={<TransferIcon className="text-sub-white-light" width={18} />}
          title="Transfers"
          value={formatNumber(dataStatistics.transfers_count)}
        />
        <CardX
          icon={<HotIcon className="text-sub-white-light" width={18} />}
          title="Used Fee"
          value={<Balance value={dataStatistics.extrinsic_fee_used} token={chain.nativeTokenConf} />}
        />
        <CardX
          icon={<TokenIcon className="text-sub-white-light" width={18} />}
          title="Transfer Value"
          value={formatNumber(dataStatistics.transfers_usd_amount)}
        />
      </Flex>
      <Card className="flex-1 flex flex-col justify-between">
        <Text>Daily Price ({chain.nativeTokenConf.symbol})</Text>
        <EChartsReact
          className="w-full h-[220px]"
          option={{
            ...areaChartOption({
              dataset: {
                source: priceHistory.list.map((item) => {
                  return [dayjs.unix(item.feed_at).format('YYYY-MM-DD'), stringToNumber(getFixedNumber(item.price))]
                }),
              },
            }),
            color: chain.chainConf.theme.gradient,
          }}
        />
      </Card>
    </TabBox>
  )
}
