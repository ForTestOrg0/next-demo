import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useXCMList } from '@/utils/api'
import { Token } from '@/types/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { MessageList } from '.'
import { XCMMessageListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseXCMListArgs = Parameters<typeof useXCMList>[1]
interface Props extends BareProps, BareServerSideProps, UseXCMListArgs {
  host: string
  token?: Token
}

const Page: React.FC<Props> = ({ host, token, chain, ...props }) => {
  const { data, error, isLoading } = useXCMList(host, {
    ...props,
  })
  const transfers = unwrap(data)

  if (isLoading) return <Loading />
  if (!transfers) return <Empty />
  return (
    <div>
      <MessageList transfers={transfers.list} chain={chain} token={token} />
      {transfers?.count - props.row > 0 && (
        <XCMMessageListLink query={{ address: props.address?.toString() || '' }}>
          <Button outline className="mt-4">
            View Other {transfers?.count - props.row} Messages
          </Button>
        </XCMMessageListLink>
      )}
    </div>
  )
}

export default Page
