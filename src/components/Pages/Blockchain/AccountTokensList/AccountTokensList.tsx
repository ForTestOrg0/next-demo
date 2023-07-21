import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Flex, Text } from '@/ui'
import { unwrap, useAccountTokens } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import _ from 'lodash'
import { Substrate_AssetsToken, Substrate_BuildinToken, Substrate_ERC20Token, Substrate_ERC721Token, Substrate_NativeToken } from '@/types/api'
import { TokenImage } from '@/components/Images'
import { Balance } from '@/components/Balance'
import { AssetLink, ERC20TokenLink, ERC721TokenLink, SystemTokenLink } from '@/components/Links'

interface Props extends BareProps, BareServerSideProps {
  host: string
  address: string
}

const Label: React.FC<{ text: string } & BareProps> = ({ text, className }) => {
  return (
    <Flex className={clsx('self-center items-center bg-sub-network2 rounded-full px-2', className)}>
      <Text small className="text-sub-white">
        {text}
      </Text>
    </Flex>
  )
}

const NativeToken: React.FC<{
  chainId: string
  token: Substrate_NativeToken
}> = ({ token, chainId }) => {
  return (
    <div className={clsx('flex justify-between items-center py-5')}>
      <Flex className="items-center">
        <TokenImage className="w-10 h-10" chainId={chainId} symbol={token.symbol} type="system" />
        <Flex className="ml-2">
          <SystemTokenLink query={{ unique_id: token.symbol }}>
            <Text bold className="!text-lg">
              {token.symbol}
            </Text>
          </SystemTokenLink>
          <Label className="ml-2" text="Native" />
        </Flex>
      </Flex>
      <Flex>
        <Balance
          className="font-semibold"
          value={token.balance}
          token={{
            decimals: token.decimals,
            symbol: token.symbol,
          }}
          showSymbol={false}
        />
      </Flex>
    </div>
  )
}

const BuildinToken: React.FC<{
  chainId: string
  token: Substrate_BuildinToken
}> = ({ token, chainId }) => {
  return (
    <div className={clsx('flex justify-between items-center py-5')}>
      <Flex className="items-center">
        <TokenImage className="w-10 h-10" chainId={chainId} symbol={token.symbol} type="custom" />
        <Flex className="ml-3 flex-col justify-center">
          <Flex>
            <SystemTokenLink query={{ unique_id: token.symbol }}>
              <Text bold className="!text-lg">
                {token.symbol}
              </Text>
            </SystemTokenLink>
            <Label className="ml-2" text="Custom" />
          </Flex>
          <Text small>#{token.currency_id}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Balance
          className="font-semibold"
          value={token.balance}
          token={{
            decimals: token.decimals,
            symbol: token.symbol,
          }}
          showSymbol={false}
        />
      </Flex>
    </div>
  )
}

const AssetsToken: React.FC<{
  chainId: string
  token: Substrate_AssetsToken
}> = ({ token, chainId }) => {
  return (
    <div className={clsx('flex justify-between items-center py-5')}>
      <Flex className="items-center">
        <TokenImage className="w-10 h-10" chainId={chainId} symbol={token.symbol} type="asset" />
        <Flex className="ml-3 flex-col justify-center">
          <Flex>
            <SystemTokenLink query={{ unique_id: token.symbol }}>
              <Text bold className="!text-lg">
                {token.symbol}
              </Text>
            </SystemTokenLink>
            <Label className="ml-2" text="Asset" />
          </Flex>
          <AssetLink assetId={token.asset_id}>
            <Text small>#{token.asset_id}</Text>
          </AssetLink>
        </Flex>
      </Flex>
      <Flex>
        <Balance
          className="font-semibold"
          value={token.balance}
          token={{
            decimals: token.decimals,
            symbol: token.symbol,
          }}
          showSymbol={false}
        />
      </Flex>
    </div>
  )
}

const ERC20Token: React.FC<{
  chainId: string
  token: Substrate_ERC20Token
}> = ({ token, chainId }) => {
  return (
    <div className={clsx('flex justify-between items-center py-5')}>
      <Flex className="items-center">
        <TokenImage className="w-10 h-10" chainId={chainId} symbol={token.symbol} type="erc20" />
        <Flex className="ml-3 flex-col justify-center">
          <Flex>
            <SystemTokenLink query={{ unique_id: token.symbol }}>
              <Text bold className="!text-lg">
                {token.symbol}
              </Text>
            </SystemTokenLink>
            <Label className="ml-2" text="ERC-20" />
          </Flex>
          <ERC20TokenLink address={token.contract}>
            <Text small>{token.contract}</Text>
          </ERC20TokenLink>
        </Flex>
      </Flex>
      <Flex>
        <Balance
          className="font-semibold"
          value={token.balance}
          token={{
            decimals: token.decimals,
            symbol: token.symbol,
          }}
          showSymbol={false}
        />
      </Flex>
    </div>
  )
}

const ERC721Token: React.FC<{
  chainId: string
  token: Substrate_ERC721Token
}> = ({ token, chainId }) => {
  return (
    <div className={clsx('flex justify-between items-center py-5')}>
      <Flex className="items-center">
        <TokenImage className="w-10 h-10" chainId={chainId} symbol={token.symbol} type="erc721" />
        <Flex className="ml-3 flex-col justify-center">
          <Flex>
            <SystemTokenLink query={{ unique_id: token.symbol }}>
              <Text bold className="!text-lg">
                {token.symbol}
              </Text>
            </SystemTokenLink>
            <Label className="ml-2" text="ERC-721" />
          </Flex>
          <ERC721TokenLink address={token.contract}>
            <Text small>{token.contract}</Text>
          </ERC721TokenLink>
        </Flex>
      </Flex>
      <Flex>
        <Balance
          className="font-semibold"
          value={token.balance}
          token={{
            decimals: 0,
            symbol: token.symbol,
          }}
          showSymbol={false}
        />
      </Flex>
    </div>
  )
}

const Component: React.FC<Props> = ({ children, className, host, chain, address }) => {
  const { data, error, isLoading } = useAccountTokens(host, {
    address,
  })
  const tokens = unwrap(data)

  if (isLoading) return <Loading />
  if (!tokens) return <Empty />

  return (
    <div className={clsx('flex flex-col', className)}>
      <div className="divide-y">
        {tokens?.native?.map((token) => {
          return <NativeToken chainId={chain.chainConf.id} key={token.unique_id} token={token} />
        })}
        {tokens?.ERC20?.map((token) => {
          return <ERC20Token chainId={chain.chainConf.id} key={token.unique_id} token={token} />
        })}
        {tokens?.ERC721?.map((token) => {
          return <ERC721Token chainId={chain.chainConf.id} key={token.unique_id} token={token} />
        })}
        {tokens?.builtin?.map((token) => {
          return <BuildinToken chainId={chain.chainConf.id} key={token.unique_id} token={token} />
        })}
        {tokens?.assets?.map((token) => {
          return <AssetsToken chainId={chain.chainConf.id} key={token.unique_id} token={token} />
        })}
      </div>
    </div>
  )
}

export default Component
