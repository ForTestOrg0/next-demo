import React from 'react'
import { Token, BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { BlockLink, ExtrinsicLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { Transfer } from '@/types/api'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { TransferStatus } from './TransferStatus'

export type TransferListDisableColumn = Partial<Record<'block' | 'result', boolean>>

interface Props extends BareProps, BareServerSideProps {
  transfers: Transfer[]
  token?: Token
  disableColumn?: TransferListDisableColumn
}

const Page: React.FC<Props> = ({ transfers, token, chain, disableColumn }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Extrinsic ID</Th>
          {!disableColumn?.block && <Th>Block</Th>}
          <Th>Time</Th>
          <Th>From</Th>
          <Th>To</Th>
          <Th>Value</Th>
          {!disableColumn?.result && <Th>Result</Th>}
        </Tr>
        {transfers.map((transfer) => {
          return (
            <Tr key={transfer.extrinsic_index}>
              <Td>
                <ExtrinsicLink extrinsicIndex={transfer.extrinsic_index} />
              </Td>
              {!disableColumn?.block && (
                <Td>
                  <BlockLink blockNumber={transfer.block_num} />
                </Td>
              )}
              <Td>
                <TimeFromNow date={transfer.block_timestamp} />
              </Td>
              <Td>
                <Identicon account={transfer.from_account_display} />
              </Td>
              <Td>
                <Identicon account={transfer.to_account_display} />
              </Td>
              <Td>
                <Balance value={transfer.amount_v2} token={token || chain.nativeTokenConf} />
              </Td>
              {!disableColumn?.result && (
                <Td>
                  <TransferStatus success={transfer.success} />
                </Td>
              )}
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
