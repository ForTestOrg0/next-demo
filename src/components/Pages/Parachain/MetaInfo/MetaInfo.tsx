import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Boundary, Flex, Text } from '@/ui'
import { ParachainMeta } from '@/types/api'

interface Props extends BareProps, BareServerSideProps {
  metaInfo: ParachainMeta
}
const Component: React.FC<Props> = ({ children, className, chain, metaInfo }) => {
  const items = [
    {
      label: 'Parachain/Total Slot',
      value: `${metaInfo.online_count}/${metaInfo.total_slot_num}`,
    },
    {
      label: 'Parathread',
      value: `${metaInfo.upcoming_count}`,
    },
    {
      label: 'Auction',
      value: `${metaInfo.auction_count}`,
    },
    {
      label: 'Current Lease',
      value: `${Math.floor((chain.metadata.blockNum - metaInfo.lease_offset) / metaInfo.lease_period) || 0}`,
    },
  ]

  return (
    <Boundary className={clsx('flex py-6 pl-6', className)}>
      <Flex className="justify-center items-center w-full">
        <Flex className="justify-center items-center pr-20">
          <Text className="ml-5 mr-2 text-xl font-semibold">{chain.chainConf.name}</Text>
          <Text className="px-2 py-1 text-sm bg-sub-black text-sub-white">Relay Chain</Text>
        </Flex>
        <Flex className="flex-1">
          {items.map((meta) => (
            <Flex key={meta.label} className="flex-1 flex-col">
              <Text bold>{meta.label}</Text>
              <Text className="!text-2xl font-semibold text-sub-network">{meta.value}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Boundary>
  )
}

export default Component
