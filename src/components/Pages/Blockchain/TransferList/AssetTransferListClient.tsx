import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useAssetTransfers } from '@/utils/api'
import { Token } from '@/types/page'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { TransferList } from '.'
import { TransferLink } from '@/components/Links'
import { Button } from '@/ui'

type UseAssetTransfersArgs = Parameters<typeof useAssetTransfers>[1]
interface Props extends BareProps, BareServerSideProps, UseAssetTransfersArgs {
  host: string
  token?: Token
}

const Page: React.FC<Props> = ({ host, token, chain, ...props }) => {
  const { data, error, isLoading } = useAssetTransfers(host, {
    ...props,
  })
  const transfers = unwrap(data)

  if (isLoading) return <Loading />
  if (!transfers?.count) return <Empty />
  return (
    <div>
      <TransferList transfers={transfers.transfers} chain={chain} token={token} />
      {transfers?.count - props.row > 0 && (
        <TransferLink query={{ asset_id: props.asset_id?.toString() || '' }}>
          <Button outline className="mt-4">
            View Other {transfers?.count - props.row} Transfers
          </Button>
        </TransferLink>
      )}
    </div>
  )
}

export default Page
