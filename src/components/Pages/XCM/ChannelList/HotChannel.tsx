import React from 'react'
import { Token, BareProps, BareServerSideProps } from '@/types/page'
import { Text, Link } from '@/ui'
import { AccountLink, XCMChannelLink } from '@/components/Links'
import { XCMChanel } from '@/types/api'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { TransferStatus } from './TransferStatus'
import { ArrowRightBoldIcon } from '@/ui/Svg'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { getChainConfigByParachainId } from '@/config/chains'

interface Props extends BareProps, BareServerSideProps {
  channels: XCMChanel[]
  token?: Token
  pageSize?: number
  current?: number
}

const Page: React.FC<Props> = ({ channels, token, current = 1, pageSize = 10, chain }) => {
  return (
    <div className="w-full">
      {channels.map((item) => {
        const sendProjectInfo = getParachainProjectInfoById(chain.chainConf.id as RelaychainName, item.sender) || DEFAULT_PARACHAIN
        const sendChainConfig = getChainConfigByParachainId(item.sender, chain.chainConf.id as RelaychainName)
        const toChainConfig = getChainConfigByParachainId(item.recipient, chain.chainConf.id as RelaychainName)
        const barStyle = {
          background: `linear-gradient(90deg, ${sendChainConfig?.theme.colors[0]} 0%, ${toChainConfig?.theme.colors[0]} 100%)`,
        }
        return (
          <div key={`${item.sender}-${item.recipient}`} className="flex justify-between py-5 h-24 border-sub-b4 border-b">
            <div className="flex items-center">
              <div className="mr-2">
                {/* <Link href={sendChainConfig?.domain} external>
                  <img src={`/chains/${sendChainConfig?.id}/logo.png`} alt="" className="w-[20px]" />
                </Link> */}
                <Identicon paraId={item.sender} />
              </div>
              <div className="">
                <div className="flex justify-between">
                  <div className="">
                    <Text bold>{sendChainConfig?.name}</Text>
                    <Link className="block text-xs" href={`${chain.chainConf.domain}/parachain/${item.sender}`} external>
                      {item.sender}
                    </Link>
                  </div>
                  <div className="flex flex-col items-end">
                    <Text bold>{toChainConfig?.name || 'unknown'}</Text>
                    <Link className="block text-xs" href={`${chain.chainConf.domain}/parachain/${item.recipient}`} external>
                      {item.recipient}
                    </Link>
                  </div>
                </div>
                <div className="w-72 h-[6px] rounded" style={barStyle}></div>
              </div>
              <div className="ml-2">
                <Identicon paraId={item.recipient} />
              </div>
            </div>
            <div className="">
              <div className="flex items-center">
                <div className="text-sm text-sub-network font-semibold">{`${item.transfer_count} Txs`}</div>
                <TransferStatus type={item.status} className="ml-2" iconClass="w-[20px]" />
              </div>
              <div className="mt-2 text-sub-b2 text-sm flex justify-end">
                <XCMChannelLink className="w-12 h-6 border border-[#dbdbdb] rounded flex justify-center" address={`${item.sender}-${item.recipient}`}>
                  <ArrowRightBoldIcon className="w-3 inline-block ml-1 text-sub-b2" />
                </XCMChannelLink>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Page
