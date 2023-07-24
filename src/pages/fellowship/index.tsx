import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, Button, Flex } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import {
  getFellowshipReferendums,
  GetFellowshipReferendumsProps,
  getFellowshipStatistics,
  GetFellowshipStatisticsProps,
  getFellowshipTracks,
  GetFellowshipTracksProps,
} from '@/utils/api'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ReferendaV2List } from '@/components/Governance/ReferendaV2List'
import { ReferendaTracksList } from '@/components/Governance/ReferendaTracksList'
import { FellowshipListLink, FellowshipOriginsLink } from '@/components/Links'
import { FellowshipStatusSummary, OriginDistributionSummary } from '@/components/Governance/ReferendaV2Summary'

type Tab = 'active' | 'completed' | 'origins'

export const getServerSideProps: GetServerSideProps<
  {
    activeReferendums: GetFellowshipReferendumsProps
    completedReferendums: GetFellowshipReferendumsProps
    statistics: GetFellowshipStatisticsProps
    tracks: GetFellowshipTracksProps
    tab: Tab
    origin: string
  } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString() as Tab
  const origin = (context.query.origin || '')?.toString()
  const activeReferendums = await getFellowshipReferendums(subdomain, {
    row: TAB_ROW,
    page: 0,
    origin,
    status: 'active',
  })
  const completedReferendums = await getFellowshipReferendums(subdomain, {
    row: TAB_ROW,
    page: 0,
    origin,
    status: 'completed',
  })

  const statistics = await getFellowshipStatistics(subdomain, {})

  const tracks = await getFellowshipTracks(subdomain)

  const chainProps = await getChainProps(subdomain)

  if (!activeReferendums || activeReferendums.code !== 0 || !completedReferendums || completedReferendums.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      completedReferendums: completedReferendums.data,
      activeReferendums: activeReferendums.data,
      statistics: statistics.data,
      tracks: tracks.data,
      chain: chainProps,
      tab,
      origin,
    },
  }
}

export default function Layout({
  completedReferendums,
  activeReferendums,
  statistics,
  tab,
  origin,
  tracks,
  chain,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const tracksWithId = Object.keys(tracks).map((id) => {
    return {
      id,
      ...tracks[id],
    }
  })
  tracksWithId.length = TAB_ROW

  return (
    <PageContent>
      <Container className="flex-1">
        <Flex className="space-x-5 mb-module">
          <Flex className="flex-col flex-1">
            <Flex className="mb-4">
              <Text bold className="ml-2">
                Fellowship
              </Text>
            </Flex>

            <Boundary className="!py-7">
              <FellowshipStatusSummary statistics={statistics} chain={chain} />
            </Boundary>
          </Flex>

          <Flex className="flex-col flex-1">
            <Flex className="mb-4 justify-between items-center">
              <Flex className="items-center">
                <Text bold className="ml-2">
                  Origin Distribution
                </Text>
              </Flex>
            </Flex>

            <Boundary className="flex-1 flex justify-center !py-5">
              <OriginDistributionSummary statistics={statistics} chain={chain} />
            </Boundary>
          </Flex>
        </Flex>

        <Text block bold className="mb-4 break-all">
          Fellowship Referenda
        </Text>
        <Boundary>
          <TabGroup>
            <TabList>
              <Tab>Active</Tab>
              <Tab>Completed</Tab>
              <Tab>Origins</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ReferendaV2List referendums={activeReferendums.list} type="fellowship" />
                {activeReferendums.count - TAB_ROW > 0 && (
                  <FellowshipListLink query={{ status: 'active', origin: origin }}>
                    <Button outline className="mt-4">
                      View Other {activeReferendums.count - TAB_ROW} Referendums
                    </Button>
                  </FellowshipListLink>
                )}
              </TabPanel>
              <TabPanel>
                <ReferendaV2List referendums={completedReferendums.list} type="fellowship" />
                {completedReferendums.count - TAB_ROW > 0 && (
                  <FellowshipListLink query={{ status: 'completed', origin: origin }}>
                    <Button outline className="mt-4">
                      View Other {completedReferendums.count - TAB_ROW} Referendums
                    </Button>
                  </FellowshipListLink>
                )}
              </TabPanel>
              <TabPanel>
                <ReferendaTracksList tracks={tracksWithId} chain={chain} />
                {Object.keys(tracks).length - TAB_ROW > 0 && (
                  <FellowshipOriginsLink>
                    <Button outline className="mt-4">
                      View Other {Object.keys(tracks).length - TAB_ROW} Origins
                    </Button>
                  </FellowshipOriginsLink>
                )}
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
