import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getDemocracyProposalById, GetDemocracyProposalByIdDataProps } from '@/utils/api'
import { ProposalInfo, ProposalPreImage, ProposalSecondsClient, ProposalTimeLine } from '@/components/Governance'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import METADATA from '@/config/metadata'
import { TAB_ROW } from '@/config/constants'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetDemocracyProposalByIdDataProps
    tab: string
    democracyId: number
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const democracyId = context.params?.id

  if (typeof democracyId === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getDemocracyProposalById(subdomain, {
    democracy_id: parseInt(democracyId),
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
      democracyId: parseInt(democracyId),
      chain: chainProps,
      metadata: {
        ...METADATA['democracy_proposal'],
        title: METADATA['democracy_proposal']['title'] + democracyId,
      },
    },
  }
}

export default function Page({ host, data, chain, democracyId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Democracy Proposals#{democracyId}
        </Text>

        <Boundary>
          <ProposalInfo proposal={data.info} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Seconds</Tab>
              <Tab>TimeLine</Tab>
              <Tab>Proposal Preimage</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ProposalSecondsClient host={host} page={0} row={TAB_ROW} proposalId={democracyId} />
              </TabPanel>
              <TabPanel>
                <ProposalTimeLine timeline={data.info.timeline} />
              </TabPanel>
              <TabPanel>
                <ProposalPreImage preimage={data.info.pre_image} chain={chain} />
              </TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
