import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getReferendaReferendum, GetReferendaReferendumProps } from '@/utils/api'
import { ProposalPreImage, ProposalTimeLine } from '@/components/Governance'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ReferendaV2Info } from '@/components/Governance/ReferendaV2Info'
import { ReferendaV2VotesClient } from '@/components/Governance/ReferendaV2Votes'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetReferendaReferendumProps
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
  const data = await getReferendaReferendum(subdomain, {
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
    },
  }
}

export default function Page({ host, data, chain, referendumIndex }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Democracy Referenda V2 #{referendumIndex}
        </Text>

        <Boundary>
          <ReferendaV2Info referendum={data} chain={chain} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Voting Detail</Tab>
              <Tab>TimeLine</Tab>
              <Tab>PreImage</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ReferendaV2VotesClient chain={chain} host={host} page={0} row={TAB_ROW} referendumIndex={referendumIndex} />
              </TabPanel>
              <TabPanel>
                <ProposalTimeLine timeline={data.timeline} />
              </TabPanel>
              <TabPanel>{data?.pre_image ? <ProposalPreImage preimage={data?.pre_image} chain={chain} /> : null}</TabPanel>
              <TabPanel>post</TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
