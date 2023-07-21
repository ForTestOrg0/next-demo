import React, { useMemo } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { Button, Flex, Link, Text } from '@/ui'
import { unwrap, useMultichainAccount } from '@/utils/api'
import { Loading } from '@/components/Loading'
import _ from 'lodash'
import { MultichainAccount } from '@/types/api'

interface Props extends BareProps {
  address: string
}

const Component: React.FC<Props> = ({ children, className, address }) => {
  const { data, error, isLoading } = useMultichainAccount('polkadot.subscan.io', {
    address,
  })
  const multiChainData = unwrap(data) as MultichainAccount[] | null

  const chainCount = useMemo(() => {
    if (multiChainData) {
      const nonZeroData = _.filter(multiChainData, (o) => {
        return o.balance !== '0'
      })
      const uniq = _.uniqBy(nonZeroData, 'network')
      return uniq.length
    }
    return 0
  }, [multiChainData])

  if (isLoading) return <Loading />
  if (chainCount <= 1) return null

  return (
    <div className={clsx('flex bg-sub-b4 px-2 py-3 rounded-sm justify-between', className)}>
      <Flex className="items-center">
        <div className="w-2 h-5 bg-sub-network2 rounded-sm"></div>
        <Text className="ml-2">
          This account has asset or on-chain data in other{' '}
          <Link className="font-semibold !text-sub-network" href={`https://www.subscan.io/account/${address}`} external>
            {chainCount - 1}
          </Link>{' '}
          networks
        </Text>
      </Flex>
      <Link href={`https://www.subscan.io/account/${address}`} external>
        <Button outline>Detail</Button>
      </Link>
    </div>
  )
}

export default Component
