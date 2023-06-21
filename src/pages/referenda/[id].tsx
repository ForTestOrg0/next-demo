import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getDemocracyReferendum, GetDemocracyReferendumProps } from '@/utils/api'
import { ProposalPreImage, ProposalTimeLine, ReferendaInfo, ReferendaVotesClient } from '@/components/Governance'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import METADATA from '@/config/metadata'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetDemocracyReferendumProps
    tab: string
    referendumIndex: number
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const referendumIndex = context.params?.id

  if (typeof referendumIndex === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getDemocracyReferendum(subdomain, {
    referendum_index: parseInt(referendumIndex),
  })
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      data: data.data,
      tab,
      referendumIndex: parseInt(referendumIndex),
      chain: chainProps,
      metadata: {
        ...METADATA['referendum'],
        title: METADATA['referendum']['title'] + referendumIndex,
      },
    },
  }
}

export default function Page({ host, data, chain, referendumIndex }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Democracy Referenda#{referendumIndex}
        </Text>

        <Boundary>
          <ReferendaInfo referenda={data.info} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Voting Detail</Tab>
              <Tab>TimeLine</Tab>
              <Tab>Proposal Preimage</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ReferendaVotesClient chain={chain} host={host} page={0} row={TAB_ROW} referendumIndex={referendumIndex} />
              </TabPanel>
              <TabPanel>
                <ProposalTimeLine timeline={data.info.timeline} />
              </TabPanel>
              <TabPanel>{data.info?.pre_image ? <ProposalPreImage preimage={data.info?.pre_image} chain={chain} /> : null}</TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
