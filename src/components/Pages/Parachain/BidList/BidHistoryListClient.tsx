import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Text, Th, Tr } from '@/ui'
import { useParachainAuctionLeadingBlocks, useParachainBids } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { BlockLink, CrowdloanLink, ParachainLink } from '@/components/Links'
import { Identicon } from '@/components/Identicon'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { Balance } from '@/components/Balance'
import { TimeFromNow } from '@/components/Time'
import { RequiredByKeys } from '@/utils/utilityTypes'
import { Percentage } from '@/components/Percentage'
import { ParachainAuction, ParachainMeta } from '@/types/api'

type UseParachainBidsArgs = Parameters<typeof useParachainBids>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  parachainMetadata: ParachainMeta
  args: UseParachainBidsArgs
}

const Component: React.FC<Props> = ({ children, host, className, chain, style, args, parachainMetadata }) => {
  const { data, error, isLoading } = useParachainBids(host, args)
  const bids = unwrap(data)

  if (isLoading) return <Loading />
  if (!bids) return <Empty />

  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Event ID</Th>
          <Th>Para ID</Th>
          <Th>Owner</Th>
          <Th>Source</Th>
          <Th>Amount</Th>
          <Th>Time</Th>
        </Tr>
        {bids.bids.map((bid) => {
          const projectInfo = getParachainProjectInfoById(chain.chainConf.id as RelaychainName, bid.para_id) || DEFAULT_PARACHAIN
          return (
            <Tr key={bid.event_index}>
              <Td>
                <BlockLink blockNumber={bid.block_num} query={{ tab: 'event', event: `${bid.event_index}` }}>
                  {bid.event_index}
                </BlockLink>
              </Td>
              <Td>
                <ParachainLink id={bid.para_id} />
              </Td>
              <Td>
                <Identicon account={bid.bidder_account_display} />
              </Td>
              <Td>{bid.source === 2 ? <CrowdloanLink id={bid.fund_id}>Crowdloan#{bid.fund_id}</CrowdloanLink> : <Text>Bid</Text>}</Td>
              <Td>
                <Balance value={bid.amount} token={chain.nativeTokenConf} showSymbol={false} />
              </Td>
              <Td>
                <TimeFromNow date={bid.block_timestamp} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Component
