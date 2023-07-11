import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Flex } from '@/ui'
import EChartsReact from '@/components/Echart'
import { pieDoughnutThinChartOption } from '@/components/Echart/chartOptions'
import { BIG_ZERO, abbreviateNumber } from '@/utils/bigNumber'
import { Legend01 } from '@/components/Echart/Legend01'
import BigNumber from 'bignumber.js'
import { getBalanceAmount } from '@/utils/formatBalance'

interface Props extends BareProps, BareServerSideProps {}

const Page: React.FC<Props> = ({ chain }) => {
  const decimals = chain.nativeTokenConf.decimals

  const totalBalance = getBalanceAmount(new BigNumber(chain.nativeToken.total_issuance), decimals)
  const transferableBalance = getBalanceAmount(new BigNumber(chain.nativeToken.available_balance), decimals)
  const stakingBalance = getBalanceAmount(new BigNumber(chain.nativeToken.bonded_locked_balance), decimals)

  let otherBalance = totalBalance.minus(transferableBalance).minus(stakingBalance)
  if (otherBalance.isNegative()) otherBalance = BIG_ZERO

  const dataSource = [
    ['Circulating', transferableBalance.toNumber()],
    ...(chain.chainConf.modules?.VALIDATOR ? [['Staking', stakingBalance.toNumber()]] : []),
    ['Others', otherBalance.toNumber()],
  ]

  return (
    <Flex>
      <div className="relative">
        <EChartsReact
          className="w-[140px] h-[140px]"
          option={{
            ...pieDoughnutThinChartOption({
              dataset: {
                source: dataSource,
              },
            }),
            color: chain.chainConf.theme.colors,
          }}
        />
        <Flex className="absolute left-1/2 top-1/2 -ml-7 -mt-7 justify-center items-center rounded-full w-14 h-14 shadow-2xl">
          <img className="w-10 h-10" src={`/chains/${chain.chainConf.id}/logo-mini.png`} alt={chain.chainConf.id} />
        </Flex>
      </div>
      <Flex className="flex-col justify-around ml-10">
        {dataSource.map((data, index) => {
          return (
            <Legend01
              key={data[1]}
              style={{ backgroundColor: chain.chainConf.theme.colors[index] }}
              title={data[0]}
              value={`${abbreviateNumber(data[1])} (${new BigNumber(data[1]).div(totalBalance).times(100).toFixed(2)}%)`}></Legend01>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Page
