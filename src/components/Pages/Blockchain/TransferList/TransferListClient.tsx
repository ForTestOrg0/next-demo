import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useTransfers } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { TransferList } from '.'
import { TransferLink } from '@/components/Links'
import { Button } from '@/ui'

type UseTransfersArgs = Parameters<typeof useTransfers>[1]
interface Props extends BareProps, BareServerSideProps, UseTransfersArgs {
  host: string
}

const Page: React.FC<Props> = ({ host, chain, ...props }) => {
  const { data, error, isLoading } = useTransfers(host, {
    ...props,
  })
  const transfers = unwrap(data)

  if (isLoading) return <Loading />
  if (!transfers) return <Empty />
  return (
    <div>
      <TransferList transfers={transfers.transfers} chain={chain} />
      {transfers?.count - props.row > 0 && (
        <TransferLink query={{ address: props.address?.toString() || '' }}>
          <Button outline className="mt-4">
            View Other {transfers?.count - props.row} Transfers
          </Button>
        </TransferLink>
      )}
    </div>
  )
}

export default Page
