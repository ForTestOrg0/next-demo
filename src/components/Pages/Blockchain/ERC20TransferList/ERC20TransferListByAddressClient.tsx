import React from 'react'
import { BareProps, BareServerSideProps, Token } from '@/types/page'
import { unwrap, useEvmTokenTransfer } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { ERC20TransferList } from '.'
import { ERC20TokenTransferListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseEvmTokenTransferArgs = Parameters<typeof useEvmTokenTransfer>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  args: UseEvmTokenTransferArgs
}

const Page: React.FC<Props> = ({ host, chain, args }) => {
  const { data, error, isLoading } = useEvmTokenTransfer(host, {
    ...args,
  })
  const transfers = unwrap(data)

  if (isLoading) return <Loading />
  if (!transfers) return <Empty />

  return (
    <div>
      <ERC20TransferList transfers={transfers.list} chain={chain} />
      {transfers?.count - args.row > 0 && (
        <ERC20TokenTransferListLink query={{ address: args.address || '' }}>
          <Button outline className="mt-4">
            View Other {transfers?.count - args.row} ERC-20 Transfers
          </Button>
        </ERC20TokenTransferListLink>
      )}
    </div>
  )
}

export default Page
