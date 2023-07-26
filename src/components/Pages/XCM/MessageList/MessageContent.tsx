import React from 'react'
import _ from 'lodash'
import { BareProps, BareServerSideProps } from '@/types/page'
import { TableCol, TdCol, TrCol, Text } from '@/ui'
import { XCM } from '@/types/api'
import { Progress } from '@/components/Pages/XCM/MessageList'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { Parameters } from '@/components/Parameters'
import { Balance } from '@/components/Balance'

interface Props extends BareProps, BareServerSideProps {
  messageInfo: XCM
  host: string
  isMsg?: boolean
}

const Page: React.FC<Props> = ({ messageInfo, chain, isMsg, host }) => {
  const rawAssets = _.filter(messageInfo.assets, (asset) => {
    return asset.raw
  })
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">XCM Transfer Hash</TdCol>
          <TdCol>
            <div className="flex">{messageInfo.message_hash}</div>
          </TdCol>
        </TrCol>
        {(messageInfo.from_account_id || !isMsg) && (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">Sender</TdCol>
            <TdCol>
              <Text>
                <Identicon paraId={messageInfo.origin_para_id} address={messageInfo.from_account_id} />
              </Text>
            </TdCol>
          </TrCol>
        )}
        {(messageInfo.to_account_id || !isMsg) && (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">Destination</TdCol>
            <TdCol>
              <Text>
                <Identicon paraId={messageInfo.dest_para_id} address={messageInfo.to_account_id} />
              </Text>
            </TdCol>
          </TrCol>
        )}
        {messageInfo.protocol && (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">Protocol</TdCol>
            <TdCol>{messageInfo.protocol !== 'HRMP' ? `VMP(${messageInfo.protocol})` : messageInfo.protocol}</TdCol>
          </TrCol>
        )}
        {!!messageInfo.xcm_version && (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">Version</TdCol>
            <TdCol>{messageInfo.xcm_version}</TdCol>
          </TrCol>
        )}
        {rawAssets?.length === 0 && messageInfo.assets && (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">Value</TdCol>
            <TdCol>
              {messageInfo.assets.map((asset, index) => {
                return (
                  <div className="" key={index}>
                    <Balance value={asset.amount} token={{ decimals: asset.decimals, symbol: asset.symbol }} />
                  </div>
                )
              })}
            </TdCol>
          </TrCol>
        )}
        {rawAssets?.length > 0 && (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">Raw Value</TdCol>
            <TdCol>
              <Parameters value={JSON.stringify(rawAssets)} />
            </TdCol>
          </TrCol>
        )}
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Progress</TdCol>
          <TdCol>
            <Progress value={messageInfo} host={host} />
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default Page
