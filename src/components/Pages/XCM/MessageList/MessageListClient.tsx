import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useXCMList } from '@/utils/api'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { Token } from '@/types/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { MessageList, LatestTransfer } from '.'
import { XCMMessageListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseXCMListArgs = Parameters<typeof useXCMList>[1]
interface Props extends BareProps, BareServerSideProps, UseXCMListArgs {
  host: string
  token?: Token
  type?: string
  setTransferCount?: (count: number) => void
  disableColumn?: Partial<Record<'version' | 'value', boolean>>
}

const Page: React.FC<Props> = ({ host, token, type = 'table', setTransferCount, disableColumn, chain, ...props }) => {
  const relaySubdomain = getRelaySubdomainFromSubdomain(host)
  const { data, error, isLoading } = useXCMList(relaySubdomain, {
    filter_para_id: relaySubdomain === host ? undefined : chain?.chainConf.parachain?.id,
    ...props,
  })
  const transfers = unwrap(data)
  setTransferCount && setTransferCount(transfers?.count || 0)
  if (isLoading) return <Loading />
  if (!transfers) return <Empty />
  return (
    <div>
      {type === 'table' && (
        <>
          <MessageList transfers={transfers.list} chain={chain} token={token} disableColumn={disableColumn} />
          {transfers?.count - props.row > 0 && (
            <XCMMessageListLink
              query={{
                address: props.address?.toString() || '',
                fromChain: props.origin_para_id?.toString() || '',
                toChain: props.dest_para_id?.toString() || '',
              }}>
              <Button outline className="mt-4">
                View Other {transfers?.count - props.row} Messages
              </Button>
            </XCMMessageListLink>
          )}
        </>
      )}
      {type === 'list' && (
        <>
          <LatestTransfer transfers={transfers.list} chain={chain} token={token} disableColumn={disableColumn} />
        </>
      )}
    </div>
  )
}

export default Page
