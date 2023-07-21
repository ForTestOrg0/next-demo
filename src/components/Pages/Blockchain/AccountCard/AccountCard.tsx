import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { CopyBtn, Flex, Link, Text, Tooltip, TooltipContent, TooltipTrigger } from '@/ui'
import _ from 'lodash'
import { AccountDetail } from '@/types/api'
import { ChainIcon, MailIcon, RiotImIcon, SubidIcon, TwitterIcon } from '@/ui/Svg'
import { AccountLink, WasmContractLink } from '@/components/Links'

interface Props extends BareProps {
  account: AccountDetail
}

const Component: React.FC<Props> = ({ children, className, account }) => {
  return (
    <div className={clsx('py-5 flex flex-col divide-y divide-sub-b4 w-[350px] break-all', className)}>
      <Flex className="items-center pb-5">
        <Flex className="w-[60px] h-[60px] border mr-2">icon</Flex>
        {account?.account_display?.display ? (
          <Text className="!text-lg">{account.account_display.display}</Text>
        ) : (
          <Text className="!text-lg text-sub-b2">Unknown</Text>
        )}
      </Flex>

      <Flex className="flex-col py-5 space-y-5">
        <div>
          {account.address}
          <CopyBtn value={account.address} className="!inline-flex ml-2 relative top-1" />
        </div>
        <Flex className="items-center space-x-2">
          <Tooltip>
            <TooltipTrigger>
              <Link external href={`https://sub.id/#/${account.address}`}>
                <SubidIcon className="w-6 text-sub-network2" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <Text small block>
                Sub Id:
              </Text>
              <Text small>{`https://sub.id/#/${account.address}`}</Text>
            </TooltipContent>
          </Tooltip>

          {account.twitter && (
            <Tooltip>
              <TooltipTrigger>
                <TwitterIcon className="w-[22px] text-sub-network2" />
              </TooltipTrigger>
              <TooltipContent>
                <Text small block>
                  Twitter:
                </Text>
                <Text small>{account.twitter}</Text>
              </TooltipContent>
            </Tooltip>
          )}

          {account.riot && (
            <Tooltip>
              <TooltipTrigger>
                <RiotImIcon className="w-5 text-sub-network2" />
              </TooltipTrigger>
              <TooltipContent>
                <Text small block>
                  Riot:
                </Text>
                <Text small>{account.riot}</Text>
              </TooltipContent>
            </Tooltip>
          )}

          {account.web && (
            <Tooltip>
              <TooltipTrigger>
                <Link external href={account.web}>
                  <ChainIcon className="w-5 text-sub-network2" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <Text small block>
                  Website:
                </Text>
                <Text small>{account.web}</Text>
              </TooltipContent>
            </Tooltip>
          )}

          {account.email && (
            <Tooltip>
              <TooltipTrigger>
                <Link external href={`mailto:${account.email}`}>
                  <MailIcon className="w-6 text-sub-network2" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <Text small block>
                  Email:
                </Text>
                <Text small>{account.email}</Text>
              </TooltipContent>
            </Tooltip>
          )}
        </Flex>
      </Flex>

      <Flex className="flex-col space-y-5 pt-5">
        <Flex className="justify-between items-center">
          <Text bold>Nonce</Text>
          <Text>{account.nonce}</Text>
        </Flex>
        <Flex className="justify-between items-start">
          <Text bold className="whitespace-nowrap">
            Role
          </Text>
          <Flex className="space-x-2 flex-wrap justify-end">
            {/* TODO: NominationPool */}
            {account.is_council_member && <AccountLink query={{ role: 'councilMember' }}>Council</AccountLink>}
            {account.is_registrar && <AccountLink query={{ role: 'registrar' }}>Registrar</AccountLink>}
            {account.is_module_account && <AccountLink query={{ role: 'module' }}>System</AccountLink>}
            {account.is_techcomm_member && <AccountLink query={{ role: 'techcomm' }}>Techcomm Member</AccountLink>}
            {account.is_fellowship_member && <AccountLink query={{ role: 'fellowship' }}>Fellowship</AccountLink>}
            {account.proxy?.proxy_account && account.proxy?.proxy_account?.length > 0 && (
              <AccountLink query={{ role: 'proxies' }}>Proxied</AccountLink>
            )}
            {account.proxy?.real_account && account.proxy?.real_account?.length > 0 && <AccountLink query={{ role: 'proxy' }}>Proxy</AccountLink>}
            {account.multisig?.multi_account_member && account.multisig?.multi_account_member?.length > 0 && (
              <AccountLink query={{ role: 'multisigMember' }}>Multisig Member</AccountLink>
            )}
            {account.is_contract && <WasmContractLink address={account.address}>WASM Contract</WasmContractLink>}
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Component
