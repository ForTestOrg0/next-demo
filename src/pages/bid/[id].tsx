import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, TableCol, TdCol, TrCol } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { unwrap } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { GetParachainMetaProps, getBestBid, getParachainMeta } from '@/utils/api/parachain'
import { ParachainBid } from '@/types/api'
import { Balance } from '@/components/Balance'
import { BidStatus } from '@/components/Pages/Parachain/BidList/BidStatus'
import { AuctionStatus, AuctionWinner, FundStatus, LeasePeriod, LeasePeriodRange } from '@/components/Pages/Parachain/Common'
import { ParachainAuctionLink } from '@/components/Links'
import { BidHistoryListClient } from '@/components/Pages/Parachain/BidList'
import { CrowdloanInfo } from '@/components/Pages/Parachain/CrowdloanInfo'
import { ContributeListClient } from '@/components/Pages/Parachain/ContributeList'
import { TAB_ROW } from '@/config/constants'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { parachainMeta: GetParachainMetaProps; bidId: string; host: string; bid: ParachainBid | null } & BareServerSideProps
> = async (context) => {
  const bidId = context.query.id as string
  const subdomain = getSubdomainFromHeaders(context.req.headers)

  const data = await getParachainMeta(subdomain)
  const bid = await getBestBid(subdomain, {
    bid_id: bidId,
  })
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      parachainMeta: data.data,
      bidId,
      host: subdomain,
      chain: chainProps,
      bid: bid.data,
    },
  }
}

export default function Page({ host, parachainMeta, chain, bid, bidId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Bid#{bidId}
        </Text>
        {bid && (
          <Boundary>
            <TableCol className="w-full">
              <tbody>
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap  w-60">Auction Index</TdCol>
                  <TdCol className="space-x-4">
                    <ParachainAuctionLink index={bid.auction_index} />
                  </TdCol>
                </TrCol>
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap  w-60">Lease Period</TdCol>
                  <TdCol>
                    <LeasePeriodRange firstPeriod={bid.first_period} lastPeriod={bid.last_period} metaInfo={parachainMeta} />
                  </TdCol>
                </TrCol>
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap">Balance</TdCol>
                  <TdCol>
                    <Balance value={bid.amount} token={chain.nativeTokenConf} />
                  </TdCol>
                </TrCol>
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap">Campaign Status</TdCol>
                  <TdCol>
                    <BidStatus index={bid.status} />
                  </TdCol>
                </TrCol>
              </tbody>
            </TableCol>
          </Boundary>
        )}
        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Bid History</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BidHistoryListClient
                  parachainMetadata={parachainMeta}
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    from_history: true,
                    bid_id: bid?.bid_id,
                    auction_index: bid?.auction_index,
                  }}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
