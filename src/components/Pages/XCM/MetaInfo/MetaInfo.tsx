import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { Boundary, Flex, Text } from '@/ui'
import { XCMMeta } from '@/types/api'

interface Props extends BareProps, BareServerSideProps {
  metaInfo: XCMMeta
  host: string
}
const Component: React.FC<Props> = ({ children, className, host, chain, metaInfo }) => {
  const relaySubdomain = getRelaySubdomainFromSubdomain(host)
  const isRelayChain = relaySubdomain === host
  const relayMeta = [
    {
      label: 'Supported/All Parachains',
      value: `${metaInfo.support_parachain}/${metaInfo.online_parachain}`,
    },
    {
      label: 'Open/All Channels',
      value: `${metaInfo.open_channel}/${metaInfo.all_channel}`,
    },
    {
      label: 'Relayed XCM Transfers',
      value: `${metaInfo.relayed_transfer_count}`,
    },
    {
      label: 'Relayed XCM Messages',
      value: `${metaInfo.relayed_message_count}`,
    },
  ]
  const paraMeta = [
    {
      label: 'Sent XCM Transfers',
      value: `${metaInfo.send_xcm_transfer_count}`,
    },
    {
      label: 'Received XCM Transfers',
      value: `${metaInfo.received_xcm_transfer_count}`,
    },
    {
      label: 'Open Channels',
      value: `${metaInfo.open_channel}`,
    },
    {
      label: 'Sent XCM Messages',
      value: `${metaInfo.send_xcm_message_count}`,
    },
    {
      label: 'Received XCM Messages',
      value: `${metaInfo.received_xcm_message_count}`,
    },
    {
      label: 'Connected Parachain',
      value: `${metaInfo.connected_parachain_count}`,
    },
  ]

  return (
    <div className={clsx('flex', className)}>
      <Flex className="justify-center items-center w-full">
        <Flex className="flex-1 flex-wrap">
          {isRelayChain
            ? relayMeta.map((meta) => (
                <Flex key={meta.label} className="flex-1 flex-col basis-1/2 mb-2.5">
                  <Text>{meta.label}</Text>
                  <Text className="!text-lg font-semibold text-sub-network">{meta.value}</Text>
                </Flex>
              ))
            : paraMeta.map((meta) => (
                <Flex key={meta.label} className="flex-1 flex-col basis-1/3 mb-2.5">
                  <Text>{meta.label}</Text>
                  <Text className="!text-lg font-semibold text-sub-network">{meta.value}</Text>
                </Flex>
              ))}
        </Flex>
      </Flex>
    </div>
  )
}

export default Component
