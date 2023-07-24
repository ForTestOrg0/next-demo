import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Flex, Progress, Text } from '@/ui'
import _ from 'lodash'
import { ActiveAccountsIcon, InflationIcon, SandglassIcon } from '@/ui/Svg'
import { Percentage } from '@/components/Percentage'
import { formatNumber } from '@/utils/formatBalance'

interface Props extends BareProps, BareServerSideProps {}

const Component: React.FC<Props> = ({ children, className, chain }) => {
  return (
    <div className={clsx('flex justify-between items-center flex-1', className)}>
      <Flex className="flex-col items-center">
        <ActiveAccountsIcon className="w-7" />
        <Text className="text-lg mt-3">Validators</Text>
        <Text bold>
          {formatNumber(chain.metadata.current_validator_count)}/{formatNumber(chain.metadata.validator_count)}
        </Text>
      </Flex>

      {chain.chainConf.modules?.NOMINATION_POOL ? (
        <Flex className="flex-col items-center">
          <SandglassIcon className="w-7" />
          <Text className="text-lg mt-3">Nomination Pools</Text>
          <Text bold>
            {formatNumber(chain.metadata.currentPools)}/{formatNumber(chain.metadata.maxPools)}
          </Text>
        </Flex>
      ) : (
        <Flex className="flex-col items-center">
          <SandglassIcon className="w-7" />
          <Text className="text-lg mt-3">Waiting</Text>
          <Text bold>{formatNumber(chain.metadata.waiting_validator)}</Text>
        </Flex>
      )}

      <Flex className="flex-col items-center">
        <InflationIcon className="w-7" />
        <Text className="text-lg mt-3">Inflation Rate</Text>
        <Percentage className="font-semibold" numerator={chain.nativeToken.inflation} denominator={100} />
      </Flex>

      <Flex className="flex-col w-[250px] justify-between self-stretch">
        <Flex className="flex-col">
          <Flex className="justify-between mb-1">
            <Text bold>Era #{chain.metadata.current_era}</Text>
            <Text bold>
              {chain.metadata.eraProcess}/{chain.metadata.eraLength}
            </Text>
          </Flex>
          <Progress value={(chain.metadata.eraProcess / chain.metadata.eraLength) * 100}></Progress>
        </Flex>

        <Flex className="flex-col">
          <Flex className="justify-between mb-1">
            <Text bold>Epoch #{chain.metadata.current_era}</Text>
            <Text bold>
              {chain.metadata.epochProcess}/{chain.metadata.epochLength}
            </Text>
          </Flex>
          <Progress value={(chain.metadata.epochProcess / chain.metadata.epochLength) * 100}></Progress>
        </Flex>
      </Flex>
    </div>
  )
}

export default Component
