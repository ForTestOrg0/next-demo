import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import TabBox from '../TabBox'
import { Flex, Text } from '@/ui'
import { Card, CardY } from '../Card'
import EChartsReact from '@/components/Echart'
import { pieChartOption } from '@/components/Echart/chartOptions'
import { ActiveAccountsIcon, InflationIcon, SandglassIcon } from '@/ui/Svg'
import { stringToNumber, abbreviateNumber } from '@/utils/bigNumber'
import { Legend01 } from '@/components/Echart/Legend01'
import { Percentage } from '@/components/Percentage'
import { getBalanceAmount } from '@/utils/formatBalance'
import BigNumber from 'bignumber.js'

interface Props extends BareProps, BareServerSideProps {}

export const InsightsStaking: React.FC<Props> = ({ children, chain, className }) => {
  return (
    <TabBox title="Staking" boxClassName="flex flex-col space-y-3 flex-1">
      <Flex className="space-x-3">
        <CardY
          className="flex-1"
          icon={<ActiveAccountsIcon className="text-sub-network" width={25} />}
          title="Validators"
          value={chain.metadata.current_validator_count}
        />
        <CardY
          className="flex-1"
          icon={<SandglassIcon className="text-sub-network" width={25} />}
          title="Waiting"
          value={chain.metadata.waiting_validator}
        />
        <CardY
          className="flex-1"
          icon={<InflationIcon className="text-sub-network" width={25} />}
          title="Inflation Rate"
          value={<Percentage numerator={chain.nativeToken.inflation} denominator={100} />}
        />
      </Flex>
      <Card className="flex flex-1 flex-row justify-around items-center">
        {/* <Flex className="justify-between">
                <Text>Total Issuance</Text>
                <Text bold>
                  {abbreviateNumber(getBalanceAmount(new BigNumber(chain.nativeToken.total_issuance), chain.nativeTokenConf.decimals).toNumber(), 3)}
                </Text>
              </Flex> */}
        <EChartsReact
          className="w-[150px] h-[150px]"
          option={{
            ...pieChartOption({
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
        <Flex className="flex-col space-y-3">
          <div>
            <Text block>Total Staking</Text>
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
      </Card>
    </TabBox>
  )
}
