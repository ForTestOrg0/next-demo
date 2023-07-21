import React from 'react'
import { BareProps } from '@/types/page'
import { Text, Flex } from '@/ui'
import { EvmToken } from '@/types/api'
import { Balance } from '@/components/Balance'
import { AccountLink } from '@/components/Links'

interface Props extends BareProps {
  token: EvmToken
}

const Page: React.FC<Props> = ({ token }) => {
  return (
    <Flex className="justify-around items-center p-2 w-full">
      <Flex className="justify-between items-center">
        <img src="/website/assets/nft721-default.png" alt={token.symbol} className="w-[70px] h-[70px]" />
        <Flex className="flex-col space-y-2 ml-5">
          <Flex className="items-center">
            <Text bold className="text-sub-network !text-lg">
              {token.symbol}
            </Text>
            <Flex className="opacity-50 bg-sub-network rounded-full justify-center items-center p-1 ml-2">
              <Text small className="text-sub-white leading-none	">
                ERC-721
              </Text>
            </Flex>
          </Flex>
          <AccountLink className="!text-xs" address={token.contract} />
        </Flex>
      </Flex>
      <div className="w-[1px] h-16 bg-sub-b4 mx-10"></div>
      <Flex className="flex-1 justify-start items-center space-x-14">
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Symbol
          </Text>
          <Text>{token.symbol}</Text>
        </Flex>
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Total supply
          </Text>
          <Balance value={token.totalSupply} token={token} showSymbol={false} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Page
