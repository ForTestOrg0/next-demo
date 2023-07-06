import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Text, Th, Tr } from '@/ui'
import { BidLink, CrowdloanLink, ParachainAuctionLink, ParachainLink } from '@/components/Links'
import { Balance } from '@/components/Balance'
import { ParachainBid } from '@/types/api'
import { BidStatus } from './BidStatus'

interface Props extends BareProps, BareServerSideProps {
  bids: ParachainBid[]
}

const Component: React.FC<Props> = ({ bids, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Bid Id</Th>
          <Th>Acution Index</Th>
          <Th>Lease Period</Th>
          <Th>Bids</Th>
          <Th>Best Bid ({chain.nativeTokenConf.symbol})</Th>
          <Th>Campaign Status</Th>
        </Tr>
        {bids.map((bid) => {
          return (
            <Tr key={bid.fund_id}>
              <Td>
                <BidLink id={bid.bid_id} />
              </Td>
              <Td>
                <ParachainAuctionLink index={bid.auction_index} />
              </Td>
              <Td>
                <Text>
                  {bid.first_period}-{bid.last_period}
                </Text>
              </Td>
              <Td>
                <Text>{bid.bid_count}</Text>
              </Td>
              <Td>
                <Balance value={bid.amount} token={chain.nativeTokenConf} showSymbol={false} />
              </Td>
              <Td>
                <BidStatus index={bid.status} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Component
