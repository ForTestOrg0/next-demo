import React from 'react'
import { Token, BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { AccountLink, XCMMessageLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { XCM } from '@/types/api'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { Balance } from '@/components/Balance'
import { TransferStatus } from './TransferStatus'
import { TransferValue } from './TransferValue'
import { formatHash } from '@/utils/formatText'

interface Props extends BareProps, BareServerSideProps {
  transfers: XCM[]
  token?: Token
  disableColumn?: Partial<Record<'version' | 'value', boolean>>
}

const Page: React.FC<Props> = ({ transfers, token, disableColumn, chain }) => {
  const relayChainSubdomain = getRelaySubdomainFromSubdomain(chain.chainConf.subdomain[0])
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Transfer Hash</Th>
          <Th>From</Th>
          <Th>To</Th>
          {!disableColumn?.value && <Th>Value</Th>}
          <Th>Time</Th>
          <Th>Protocol</Th>
          {!disableColumn?.version && <Th>Version</Th>}
          <Th>Result</Th>
        </Tr>
        {transfers.map((transfer) => {
          return (
            <Tr key={transfer.unique_id}>
              <Td>
                <XCMMessageLink address={`${relayChainSubdomain}-${transfer.unique_id}`}>{formatHash(transfer.message_hash)}</XCMMessageLink>
              </Td>
              <Td>
                <Identicon address={transfer.from_account_id} />
              </Td>
              <Td>
                <Identicon address={transfer.to_account_id} />
              </Td>
              {!disableColumn?.value && (
                <Td>
                  <TransferValue assets={transfer.assets} />
                </Td>
              )}
              <Td>
                <TimeFromNow date={transfer.origin_block_timestamp} />
              </Td>
              <Td>{transfer.protocol !== 'HRMP' ? `VMP(${transfer.protocol})` : `${transfer.protocol}`}</Td>
              {!disableColumn?.version && <Td>{transfer.xcm_version}</Td>}
              <Td>
                <TransferStatus type={transfer.status} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
