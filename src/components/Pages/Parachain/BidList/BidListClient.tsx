import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Text, Th, Tr } from '@/ui'
import { useParachainAuctionLeadingBlocks, useParachainBids } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { BidLink, CrowdloanLink, ParachainLink } from '@/components/Links'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { Balance } from '@/components/Balance'
import { RequiredByKeys } from '@/utils/utilityTypes'
import { Percentage } from '@/components/Percentage'
import { ParachainAuction, ParachainMeta } from '@/types/api'

type UseParachainBidsArgs = Parameters<typeof useParachainBids>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  parachainMetadata: ParachainMeta
  auction?: ParachainAuction
  args: RequiredByKeys<UseParachainBidsArgs, 'auction_index'>
}

const Component: React.FC<Props> = ({ children, host, className, chain, style, auction, args, parachainMetadata }) => {
  const { data, error, isLoading } = useParachainBids(host, args)
  const { data: auctionLeadingBlocksData, isLoading: auctionLeadingBlocksIsLoading } = useParachainAuctionLeadingBlocks(host, {
    auction_id: args.auction_index,
  })
  const bids = unwrap(data)
  const auctionLeadingBlocks = unwrap(auctionLeadingBlocksData)

  if (isLoading || auctionLeadingBlocksIsLoading) return <Loading />
  if (!bids) return <Empty />

  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Bid Id</Th>
          <Th>Para Id</Th>
          <Th>Project</Th>
          <Th>Srouce</Th>
          <Th>Lease Period</Th>
          <Th>Best Bid ({chain.nativeTokenConf.symbol})</Th>
          <Th>Win Rate</Th>
        </Tr>
        {bids.bids.map((bid) => {
          const projectInfo = getParachainProjectInfoById(chain.chainConf.id as RelaychainName, bid.para_id) || DEFAULT_PARACHAIN
          const leadingBlocks = auctionLeadingBlocks?.findLast(
            (item) => item.fund_id === bid.fund_id || (item.bid_id === bid.bid_id && item.para_id === bid.para_id)
          )
          const totalBlocks = !auction || auction.end_block === 0 ? parachainMetadata.ending_period : auction.end_block - auction.early_end_block

          return (
            <Tr key={bid.fund_id}>
              <Td>
                <BidLink id={bid.bid_id} />
              </Td>
              <Td>
                <ParachainLink id={bid.para_id} />
              </Td>
              <Td>
                {/* <Image src={projectInfo.Logo} alt={projectInfo['Project Name']} width={30} height={30} /> */}
                <Text>{projectInfo['Project Name']}</Text>
              </Td>
              <Td>{bid.source === 2 ? <CrowdloanLink id={bid.fund_id}>Crowdloan#{bid.fund_id}</CrowdloanLink> : <Text>Bid</Text>}</Td>
              <Td>
                <Text>
                  {bid.first_period}-{bid.last_period}
                </Text>
              </Td>
              <Td>
                <Balance value={bid.amount} token={chain.nativeTokenConf} showSymbol={false} />
              </Td>
              <Td>
                <Percentage numerator={leadingBlocks?.leading_blocks || 0} denominator={totalBlocks} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Component
