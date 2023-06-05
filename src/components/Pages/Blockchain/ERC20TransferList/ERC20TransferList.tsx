import React from 'react'
import { Token, BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { BlockLink, ExtrinsicLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { EvmTokenTransfer } from '@/types/api'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { formatHash } from '@/utils/formatText'

interface Props extends BareProps, BareServerSideProps {
  transfers: EvmTokenTransfer[]
  token?: Token
}

const Page: React.FC<Props> = ({ transfers, token, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Hash</Th>
          <Th>From</Th>
          <Th>To</Th>
          <Th>Value</Th>
          <Th>Contract</Th>
          <Th>Time</Th>
        </Tr>
        {transfers.map((transfer) => {
          return (
            <Tr key={transfer.hash}>
              <Td>
                <ExtrinsicLink extrinsicIndex={transfer.hash}>{formatHash(transfer.hash)}</ExtrinsicLink>
              </Td>
              <Td>
                <Identicon account={transfer.from_display} />
              </Td>
              <Td>
                <Identicon account={transfer.to_display} />
              </Td>
              <Td>
                <Balance value={transfer.value} token={token || { decimals: transfer.decimals, symbol: transfer.symbol } || chain.nativeTokenConf} />
              </Td>
              <Td>
                <Identicon account={{ address: transfer.contract }} />
              </Td>
              <Td>
                <TimeFromNow date={transfer.create_at} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
