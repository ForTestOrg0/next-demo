import React from 'react'
import { Token, BareProps, BareServerSideProps } from '@/types/page'
import { Text } from '@/ui'
import { XCMMessageLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { XCM } from '@/types/api'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { Balance } from '@/components/Balance'
import { TransferStatus } from './TransferStatus'
import { TransferValue } from './TransferValue'
import { formatHash } from '@/utils/formatText'

interface Props extends BareProps, BareServerSideProps {
  transfers: XCM[]
  token?: Token
  disableColumn?: Partial<Record<'version' | 'value', boolean>>
}

const Page: React.FC<Props> = ({ transfers, token, disableColumn, chain }) => {
  return (
    <div className="w-full">
      {transfers.map((transfer) => {
        return (
          <div key={transfer.unique_id} className="flex justify-between py-5 h-24 border-sub-b4 border-b">
            <div className="transfer-item-left flex-vertical">
              <div className="top items-center">
                <Text bold className="text-sm mr-2">
                  Index#
                </Text>
                <XCMMessageLink
                  className="font-semibold text-[16px]"
                  address={`${chain.chainConf.id}-${transfer.unique_id}`}>{`${transfer.origin_para_id}-${transfer.origin_event_index}`}</XCMMessageLink>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Text className="text-sub-b2 text-sm mr-1">From</Text>
                  <Identicon address={transfer.from_account_id} />
                </div>
                <div className="flex items-center">
                  <Text className="text-sub-b2 text-sm ml-3 mr-1">To</Text>
                  <Identicon address={transfer.to_account_id} />
                </div>
              </div>
            </div>
            <div className="transfer-item-right">
              <div className="flex flex-row-reverse items-center">
                <TransferStatus type={transfer.status} className="ml-2" iconClass="w-[20px]" />
                <TransferValue assets={transfer.assets} className="text-sm text-sub-network font-semibold" />
              </div>
              <div className="mt-2 text-sub-b2 text-sm flex justify-end">
                <TimeFromNow date={transfer.origin_block_timestamp} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Page
