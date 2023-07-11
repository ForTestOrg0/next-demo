import React from 'react'
import { BareProps } from '@/types/page'
import { Text, Flex } from '@/ui'
import { formatNumber } from '@/utils/formatBalance'
import { Token } from '@/types/page'

interface Props extends BareProps {
  token: Token
  holdersCount: number
}

const Page: React.FC<Props> = ({ token, holdersCount }) => {
  return (
    <Flex className="justify-around items-center p-2 w-full">
      <Flex className="justify-between items-center">
        <img src="/website/assets/system-default.png" alt={token.symbol} className="w-[70px] h-[70px]" />
        <Flex className="flex-col space-y-2 ml-5">
          <Flex className="items-center">
            <Text bold className="text-sub-network !text-lg">
              {token.symbol}
            </Text>
            <Flex className="opacity-50 bg-sub-network rounded-full justify-center items-center p-1 ml-2">
              <Text small className="text-sub-white leading-none	">
                SYSTEM
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <div className="w-[1px] h-16 bg-sub-b4 mx-10"></div>
      <Flex className="flex-1 justify-start items-center space-x-14">
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Decimals
          </Text>
          <Text>{token.decimals}</Text>
        </Flex>
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Holders
          </Text>
          <Text>{formatNumber(holdersCount)}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Page
