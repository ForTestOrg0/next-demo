import React from 'react'
import { BareProps } from '@/types/page'
import { Text, Flex } from '@/ui'
import { Asset } from '@/types/api'
import { Balance } from '@/components/Balance'

interface Props extends BareProps {
  asset: Asset
}

const Page: React.FC<Props> = ({ asset }) => {
  return (
    <Flex className="justify-around items-center p-2 w-full">
      <Flex className="justify-between items-center">
        <img src="/website/assets/asset-default.png" alt={asset.metadata.symbol} className="w-[70px] h-[70px]" />
        <Flex className="flex-col space-y-2 ml-5">
          <Flex className="items-center">
            <Text bold className="text-sub-network !text-lg">
              {asset.metadata.symbol}
            </Text>
            <Flex className="opacity-50 bg-sub-network rounded-full justify-center items-center p-1 ml-2">
              <Text small className="text-sub-white leading-none	">
                ASSET
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <div className="w-[1px] h-16 bg-sub-b4 mx-10"></div>
      <Flex className="flex-1 justify-start items-center space-x-14">
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Name
          </Text>
          <Text>{asset.metadata.name}</Text>
        </Flex>
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Asset ID
          </Text>
          <Text>#{asset.asset_id}</Text>
        </Flex>
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Decimals
          </Text>
          <Text>{asset.metadata.decimals}</Text>
        </Flex>
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Total supply
          </Text>
          <Balance value={asset.supply} token={asset.metadata} showSymbol={false} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Page
