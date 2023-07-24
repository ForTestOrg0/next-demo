import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, Button, Flex } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import {
  getReferendaReferendums,
  GetReferendaReferendumsProps,
  getReferendaStatistics,
  GetReferendaStatisticsProps,
  getReferendaTracks,
  GetReferendaTracksProps,
} from '@/utils/api'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ReferendaV2List } from '@/components/Governance/ReferendaV2List'
import { ReferendaTracksList } from '@/components/Governance/ReferendaTracksList'
import { ReferendaV2ListLink, ReferendaV2OriginsLink } from '@/components/Links'
import { OriginDistributionSummary, ReferendaV2StatusSummary } from '@/components/Governance/ReferendaV2Summary'

type Tab = 'active' | 'completed' | 'origins'

export const getServerSideProps: GetServerSideProps<
  {
    activeReferendums: GetReferendaReferendumsProps
    completedReferendums: GetReferendaReferendumsProps
    tracks: GetReferendaTracksProps
    referendaStatistics: GetReferendaStatisticsProps
    tab: Tab
    origin: string
  } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString() as Tab
  const origin = (context.query.origin || '')?.toString()
  const activeReferendums = await getReferendaReferendums(subdomain, {
    row: TAB_ROW,
    page: 0,
    origin,
    status: 'active',
  })
  const completedReferendums = await getReferendaReferendums(subdomain, {
    row: TAB_ROW,
    page: 0,
    origin,
    status: 'completed',
  })

  const referendaStatistics = await getReferendaStatistics(subdomain, {})

  const tracks = await getReferendaTracks(subdomain)

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
      referendaStatistics: referendaStatistics.data,
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
  referendaStatistics,
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
                Referenda V2
              </Text>
            </Flex>

            <Boundary className="!py-7">
              <ReferendaV2StatusSummary statistics={referendaStatistics} chain={chain} />
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
              <OriginDistributionSummary statistics={referendaStatistics} chain={chain} />
            </Boundary>
          </Flex>
        </Flex>

        <Text block bold className="mb-4 break-all">
          Referenda List
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
                <ReferendaV2List referendums={activeReferendums.list} />
                {activeReferendums.count - TAB_ROW > 0 && (
                  <ReferendaV2ListLink query={{ status: 'active', origin: origin }}>
                    <Button outline className="mt-4">
                      View Other {activeReferendums.count - TAB_ROW} Referendums
                    </Button>
                  </ReferendaV2ListLink>
                )}
              </TabPanel>
              <TabPanel>
                <ReferendaV2List referendums={completedReferendums.list} />
                {completedReferendums.count - TAB_ROW > 0 && (
                  <ReferendaV2ListLink query={{ status: 'completed', origin: origin }}>
                    <Button outline className="mt-4">
                      View Other {completedReferendums.count - TAB_ROW} Referendums
                    </Button>
                  </ReferendaV2ListLink>
                )}
              </TabPanel>
              <TabPanel>
                <ReferendaTracksList tracks={tracksWithId} chain={chain} />
                {Object.keys(tracks).length - TAB_ROW > 0 && (
                  <ReferendaV2OriginsLink>
                    <Button outline className="mt-4">
                      View Other {Object.keys(tracks).length - TAB_ROW} Origins
                    </Button>
                  </ReferendaV2OriginsLink>
                )}
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
