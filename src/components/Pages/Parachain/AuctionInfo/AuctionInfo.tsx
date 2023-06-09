import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { TableCol, TdCol, TrCol } from '@/ui'
import { ParachainAuction, ParachainMeta } from '@/types/api'
import { AuctionStatus, AuctionWinner, LeasePeriod } from '../Common'
import { BlockLink } from '@/components/Links'

interface Props extends BareProps, BareServerSideProps {
  auction: ParachainAuction
  metaInfo: ParachainMeta
}

const Page: React.FC<Props> = ({ auction, metaInfo, chain }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap w-60">Auction Status</TdCol>
          <TdCol>
            <AuctionStatus status={auction.status} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Lease Period</TdCol>
          <TdCol>
            <LeasePeriod leaseIndex={auction.lease_index} metaInfo={metaInfo} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Start Block</TdCol>
          <TdCol>
            <BlockLink blockNumber={auction.start_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Ending Period Starts</TdCol>
          <TdCol>
            <BlockLink blockNumber={auction.early_end_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">End Block</TdCol>
          <TdCol>
            <BlockLink blockNumber={auction.end_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Retroactive Ending Block</TdCol>
          <TdCol>
            <BlockLink blockNumber={auction.extinguish_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Winner</TdCol>
          <TdCol>
            <AuctionWinner winners={auction.winners} chain={chain} />
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default Page
