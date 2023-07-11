import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { ParachainAuctionLink } from '@/components/Links'
import { ParachainAuction, ParachainMeta } from '@/types/api'
import { AuctionStatus, AuctionWinner, LeasePeriod } from '../Common'

interface Props extends BareProps, BareServerSideProps {
  auctions: ParachainAuction[]
  metaInfo: ParachainMeta
}

const Component: React.FC<Props> = ({ auctions, metaInfo, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Auction Inde</Th>
          <Th>Lease Period</Th>
          <Th>Winner</Th>
          <Th>Status</Th>
        </Tr>

        {auctions?.map((item, index) => {
          return (
            <Tr key={item.auction_index}>
              <Td>
                <ParachainAuctionLink index={item.auction_index} />
              </Td>
              <Td>
                <LeasePeriod leaseIndex={item.lease_index} metaInfo={metaInfo} />
              </Td>
              <Td>
                <AuctionWinner winners={item.winners} chain={chain} />
              </Td>
              <Td>
                <AuctionStatus status={item.status} isCurrentAuction={item.auction_index === metaInfo.auction_count} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Component
