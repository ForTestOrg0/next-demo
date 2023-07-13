import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, TableCol, TdCol, TrCol } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getXCMInfo } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { XCM } from '@/types/api'
import { BareServerSideProps } from '@/types/page'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { Progress, MessageInfo } from '@/components/Pages/XCM/MessageList'
import { Parameters } from '@/components/Parameters'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: XCM
    tab: string
    msgId: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const msgId = context.params?.id

  if (typeof msgId === 'undefined') {
    return {
      notFound: true,
    }
  }
  const chainProps = await getChainProps(subdomain)
  const relaySubdomain = getRelaySubdomainFromSubdomain(subdomain)
  const data = await getXCMInfo(relaySubdomain, {
    unique_id: msgId.split('-')[1],
  })

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
      msgId,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, msgId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          XCM Message#{msgId}
        </Text>
        <Boundary className="lg:px-7 lg:py-7 flex items-start">
          <MessageInfo messageInfo={data} chain={chain} host={host}></MessageInfo>
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Instructions</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Parameters value={JSON.stringify(data.instructions)} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
