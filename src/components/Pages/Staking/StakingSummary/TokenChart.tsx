import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Flex, Text } from '@/ui'
import _ from 'lodash'
import { getBalanceAmount } from '@/utils/formatBalance'
import EChartsReact from '@/components/Echart'
import { pieChartOption, pieDoughnutThinChartOption } from '@/components/Echart/chartOptions'
import { abbreviateNumber, stringToNumber } from '@/utils/bigNumber'
import BigNumber from 'bignumber.js'
import { Legend01 } from '@/components/Echart/Legend01'
import { TokenImage } from '@/components/Images'

interface Props extends BareProps, BareServerSideProps {}

const Component: React.FC<Props> = ({ children, className, chain }) => {
  return (
    <div className={clsx('flex justify-between flex-1', className)}>
      <Flex className="flex flex-1 flex-row justify-around items-center">
        <div className="relative">
          <EChartsReact
            className="w-[140px] h-[140px]"
            option={{
              ...pieDoughnutThinChartOption({
                dataset: {
                  source: [
                    [
                      'Validator Stake',
                      stringToNumber(getBalanceAmount(new BigNumber(chain.nativeToken.validator_bonded), chain.nativeTokenConf.decimals).toFixed(2)),
                    ],
                    [
                      'Nominator Stake',
                      stringToNumber(getBalanceAmount(new BigNumber(chain.nativeToken.nominator_bonded), chain.nativeTokenConf.decimals).toFixed(2)),
                    ],
                  ],
                },
              }),
              color: [chain.chainConf.theme.gradient[0], chain.chainConf.theme.gradient[2]],
            }}
          />
          <div className="flex justify-center items-center absolute shadow-md rounded-full w-14 h-14 top-1/2 left-1/2 -ml-7 -mt-7">
            <TokenImage className="w-10 h-10" symbol={chain.nativeToken.symbol} chainId={chain.chainConf.id} />
          </div>
        </div>
        <Flex className="flex-col space-y-3">
          <div>
            <Text small block>
              Total Staking
            </Text>
            <Text bold className="!text-base">
              {abbreviateNumber(
                getBalanceAmount(
                  new BigNumber(chain.nativeToken.validator_bonded).plus(chain.nativeToken.nominator_bonded),
                  chain.nativeTokenConf.decimals
                ).toNumber(),
                3
              )}
            </Text>
          </div>
          <Legend01
            style={{ backgroundColor: chain.chainConf.theme.gradient[0] }}
            title={'Validator Stake'}
            value={abbreviateNumber(
              getBalanceAmount(new BigNumber(chain.nativeToken.validator_bonded), chain.nativeTokenConf.decimals).toNumber(),
              3
            )}
          />
          <Legend01
            style={{ backgroundColor: chain.chainConf.theme.gradient[3] }}
            title={'Nominator Stake'}
            value={abbreviateNumber(
              getBalanceAmount(new BigNumber(chain.nativeToken.nominator_bonded), chain.nativeTokenConf.decimals).toNumber(),
              3
            )}
          />
        </Flex>
      </Flex>
    </div>
  )
}

export default Component
