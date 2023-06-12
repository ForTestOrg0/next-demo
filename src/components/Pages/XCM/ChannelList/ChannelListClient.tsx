import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useXCMChannels } from '@/utils/api'
import { Token } from '@/types/api'
import { TAB_ROW } from '@/config/constants'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { ChannelList } from '.'
import { XCMMessageListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseXCMChannelsArgs = Parameters<typeof useXCMChannels>[1]
interface Props extends BareProps, BareServerSideProps, UseXCMChannelsArgs {
  host: string
  token?: Token
}

const Page: React.FC<Props> = ({ host, token, chain, ...props }) => {
  const { data, error, isLoading } = useXCMChannels(host, {
    ...props,
  })
  const transfers = unwrap(data)
  const page = 1
  if (isLoading) return <Loading />
  if (!transfers) return <Empty />
  const virtualTableData = transfers.list.filter((x, i) => i >= TAB_ROW * (page - 1) && i < TAB_ROW * page)
  let count = transfers?.list.length
  return (
    <div>
      <ChannelList channels={virtualTableData} chain={chain} token={token} />
      {count - props.row > 0 && (
        <XCMMessageListLink query={{ address: props.address?.toString() || '' }}>
          <Button outline className="mt-4">
            View Other {count - props.row} Channels
          </Button>
        </XCMMessageListLink>
      )}
    </div>
  )
}

export default Page
