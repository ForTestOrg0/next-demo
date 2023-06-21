import { Boundary, PageContent, Container, TabGroup, TabList, Tab, TabPanels, TabPanel, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { unwrap } from '@/utils/api'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { MetaInfo } from '@/components/Pages/Parachain/MetaInfo'
import { CrowdloanListClient } from '@/components/Pages/Parachain/CrowdloanList'
import { BidListClient } from '@/components/Pages/Parachain/BidList'
import { GetParachainMetaProps, getParachainAuctions, getParachainMeta } from '@/utils/api/parachain'
import { ParachainAuction } from '@/types/api'
import { AuctionInfo } from '@/components/Pages/Parachain/AuctionInfo'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { parachainMeta: GetParachainMetaProps; auctionId: number; host: string; currentAuction: ParachainAuction | undefined } & BareServerSideProps
> = async (context) => {
  const auctionId = parseInt(context.query.id as string)
  const subdomain = getSubdomainFromHeaders(context.req.headers)

  const data = await getParachainMeta(subdomain)
  const auctions = await getParachainAuctions(subdomain, {
    row: 1,
    page: 0,
    auction_index: auctionId,
  })
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !unwrap(auctions) || unwrap(auctions)?.auctions.length === 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      parachainMeta: data.data,
      auctionId,
      host: subdomain,
      chain: chainProps,
      currentAuction: unwrap(auctions)?.auctions[0],
    },
  }
}

export default function Page({ host, parachainMeta, chain, currentAuction, auctionId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <MetaInfo metaInfo={parachainMeta} chain={chain} />

        {currentAuction?.status === 2 && (
          <>
            <Text block bold className="mb-4 mt-6 break-all">
              Auction #{currentAuction?.auction_index}
            </Text>
            <Boundary className="mt-5">{currentAuction && <AuctionInfo metaInfo={parachainMeta} chain={chain} auction={currentAuction} />}</Boundary>
          </>
        )}

        <Text block bold className="mb-4 mt-6 break-all">
          Auction #{currentAuction?.auction_index} Bidders
        </Text>
        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Crowdloan</Tab>
              <Tab>Bid</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CrowdloanListClient
                  chain={chain}
                  host={host}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    statuses: [1],
                  }}
                />
              </TabPanel>
              <TabPanel>
                <BidListClient
                  parachainMetadata={parachainMeta}
                  auction={currentAuction}
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    from_history: true,
                    latest: true,
                    auction_index: parachainMeta.auction_count,
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
