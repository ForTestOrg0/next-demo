import React, { useEffect, useState } from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Text, Flex, Link } from '@/ui'
import { DiscordIcon, GithubIcon, MediumIcon, TelegramIcon } from '@/ui/Svg'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { Percentage } from '@/components/Percentage'
import { formatNumber } from '@/utils/formatBalance'
import { AccountLink, TransferLink } from '@/components/Links'

interface Props extends BareProps, BareServerSideProps {}

const Page: React.FC<Props> = ({ chain }) => {
  const [projectInfo, setProjectInfo] = useState<ParachainProjectInfo>()

  useEffect(() => {
    if (chain.chainConf.parachain && chain.chainConf.parachain?.relaychain) {
      const parachain = getParachainProjectInfoById(chain.chainConf.parachain?.relaychain, chain.chainConf.parachain?.id) || DEFAULT_PARACHAIN
      setProjectInfo(parachain)
    }
  }, [chain.chainConf.parachain])

  return (
    <Flex className="justify-around items-center p-2">
      <Flex className="justify-between items-center mr-10">
        <img src={`/chains/${chain.chainConf.id}/logo-mini.png`} alt={chain.chainConf.name} className="w-[70px] h-[70px]" />
        <Flex className="flex-col space-y-2 ml-5">
          <Text className="text-sub-network !text-lg">{chain.nativeToken.display_name}</Text>
          <Text>
            ${chain.nativeToken.price}(<Percentage numerator={chain.nativeToken.price_change} denominator={1} />)
          </Text>
          <Link href={chain.chainConf.social.website || projectInfo?.['Website Link']} external>
            {chain.chainConf.social.website || projectInfo?.['Website Link']}
          </Link>
          <Flex className="space-x-2">
            <Link href={projectInfo?.['Github Link'] || chain.chainConf.social.github} external>
              <GithubIcon className="w-4 text-sub-network opacity-50 cursor-pointer" />
            </Link>

            <Link href={projectInfo?.['Telegram Link'] || chain.chainConf.social.telegram} external>
              <TelegramIcon className="w-4 text-sub-network opacity-50 cursor-pointer" />
            </Link>

            {!!projectInfo?.['Discord Link'] && (
              <Link href={projectInfo?.['Discord Link']} external>
                <DiscordIcon className="w-4 text-sub-network opacity-50 cursor-pointer" />
              </Link>
            )}

            {!!projectInfo?.['Medium Link'] && (
              <Link href={projectInfo?.['Medium Link']} external>
                <MediumIcon className="w-4 text-sub-network opacity-50 cursor-pointer" />
              </Link>
            )}
          </Flex>
        </Flex>
      </Flex>
      <div className="w-[1px] h-16 bg-sub-b4"></div>
      <Flex className="flex-1 justify-around items-center">
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Decimals
          </Text>
          <Text>{chain.nativeTokenConf.decimals}</Text>
        </Flex>
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Holders
          </Text>
          <AccountLink>{formatNumber(chain.metadata.count_account)}</AccountLink>
        </Flex>
        <Flex className="flex-col">
          <Text bold className="mb-2">
            Transfers
          </Text>
          <TransferLink>{formatNumber(chain.metadata.count_transfer)}</TransferLink>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Page
