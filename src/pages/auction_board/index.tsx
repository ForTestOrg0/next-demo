import { Boundary, PageContent, Container, TabGroup, TabList, Tab, TabPanels, TabPanel, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { unwrap } from '@/utils/api'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { MetaInfo } from '@/components/Pages/Parachain/MetaInfo'
import { CrowdloanListClient } from '@/components/Pages/Parachain/CrowdloanList'
import { BidListClient } from '@/components/Pages/Parachain/BidList'
import { GetParachainAuctionsProps, GetParachainMetaProps, getParachainAuctions, getParachainMeta } from '@/utils/api/parachain'

export const getServerSideProps: GetServerSideProps<
  { data: GetParachainMetaProps; page: number; host: string; auctions: GetParachainAuctionsProps | null } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const host = context.req.headers.host || ''

  const data = await getParachainMeta(host)
  const auctions = await getParachainAuctions(host, {
    row: 1,
    page: 0,
  })
  const chainProps = await getChainProps(host)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page,
      host,
      chain: chainProps,
      auctions: unwrap(auctions),
    },
  }
}

export default function Page({ host, data, chain, auctions, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const currentAuction = auctions?.auctions[0]
  return (
    <PageContent>
      <Container className="flex-1">
        <MetaInfo metaInfo={data} chain={chain} />
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
                  parachainMetadata={data}
                  auction={currentAuction}
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    from_history: true,
                    latest: true,
                    auction_index: data.auction_count,
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
