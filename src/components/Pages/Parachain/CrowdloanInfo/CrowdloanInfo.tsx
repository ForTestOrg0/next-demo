import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { TableCol, TdCol, TrCol } from '@/ui'
import { ParachainAuction, ParachainFund, ParachainMeta } from '@/types/api'
import { AuctionStatus, AuctionWinner, FundStatus, LeasePeriod, LeasePeriodRange } from '../Common'
import { BlockLink, ParachainAuctionLink } from '@/components/Links'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { BlockToTime } from '@/components/Time'

interface Props extends BareProps, BareServerSideProps {
  fund: ParachainFund
  metaInfo: ParachainMeta
}

const Page: React.FC<Props> = ({ fund, metaInfo, chain }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap w-60">Owner</TdCol>
          <TdCol>
            <Identicon account={fund.owner_display} />
          </TdCol>
        </TrCol>
        {!!fund.auction_index && fund.fund_auction_status === 2 && (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap w-60">Winning Auction</TdCol>
            <TdCol>
              <ParachainAuctionLink index={fund.auction_index} />
            </TdCol>
          </TrCol>
        )}
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Participated Auctions</TdCol>
          <TdCol className="space-x-4">
            {fund.in_auctions.map((auction) => (
              <ParachainAuctionLink key={auction} index={auction} />
            ))}
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Lease Period</TdCol>
          <TdCol>
            <LeasePeriodRange firstPeriod={fund.first_period} lastPeriod={fund.last_period} metaInfo={metaInfo} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Fund Cap</TdCol>
          <TdCol>
            <Balance value={fund.cap} token={chain.nativeTokenConf} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Fund Raised</TdCol>
          <TdCol>
            <Balance value={fund.raised} token={chain.nativeTokenConf} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Balance</TdCol>
          <TdCol>
            <Balance value={fund.balance} token={chain.nativeTokenConf} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Created Block</TdCol>
          <TdCol>
            <BlockLink className="mr-2" blockNumber={fund.start_block} />
            (<BlockToTime currentBlock={chain.metadata.blockNum} targetBlock={fund.start_block} BlockTime={chain.metadata.avgBlockTime} />)
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">End Block</TdCol>
          <TdCol>
            <BlockLink className="mr-2" blockNumber={fund.end_block} />
            (<BlockToTime currentBlock={chain.metadata.blockNum} targetBlock={fund.end_block} BlockTime={chain.metadata.avgBlockTime} />)
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Fund Status</TdCol>
          <TdCol>
            <FundStatus status={fund.status} />
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default Page
