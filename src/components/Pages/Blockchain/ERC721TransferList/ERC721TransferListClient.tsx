import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useERC20Transfers } from '@/utils/api'
import { EvmToken } from '@/types/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { ERC721TransferList } from '.'
import { ERC721TokenTransferListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseERC20TransfersArgs = Parameters<typeof useERC20Transfers>[1]
interface Props extends BareProps, BareServerSideProps, UseERC20TransfersArgs {
  host: string
  token?: EvmToken
}

const Page: React.FC<Props> = ({ host, token, chain, ...props }) => {
  const { data, error, isLoading } = useERC20Transfers(host, {
    ...props,
    contract: token?.contract,
  })
  const transfers = unwrap(data)

  if (isLoading) return <Loading />
  if (!transfers) return <Empty />
  return (
    <div>
      <ERC721TransferList transfers={transfers.list} chain={chain} token={token} />
      {transfers?.count - props.row > 0 && (
        <ERC721TokenTransferListLink query={{ address: token?.contract?.toString() || '', symbol: token?.symbol?.toString() || '' }}>
          <Button outline className="mt-4">
            View Other {transfers?.count - props.row} Transfers
          </Button>
        </ERC721TokenTransferListLink>
      )}
    </div>
  )
}

export default Page
