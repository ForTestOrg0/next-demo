import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, TableCol, TdCol, TrCol } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getXCMInfo } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { XCM } from '@/types/api'
import { BareServerSideProps } from '@/types/page'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { Progress } from '@/components/Pages/XCM/MessageList'
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
          <TableCol className="w-full">
            <tbody>
              <TrCol>
                <TdCol className="font-semibold whitespace-nowrap">XCM Transfer Hash</TdCol>
                <TdCol>
                  <div className="flex">{data.message_hash}</div>
                </TdCol>
              </TrCol>
              {data.from_account_id && (
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap">Sender</TdCol>
                  <TdCol>
                    <Text>
                      <Identicon paraId={data.origin_para_id} address={data.from_account_id} />
                    </Text>
                  </TdCol>
                </TrCol>
              )}
              {data.dest_para_id && (
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap">Destination</TdCol>
                  <TdCol>
                    <Text>
                      <Identicon paraId={data.dest_para_id} address={data.to_account_id} />
                    </Text>
                  </TdCol>
                </TrCol>
              )}
              {data.protocol && (
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap">Protocol</TdCol>
                  <TdCol>{data.protocol !== 'HRMP' ? `VMP(${data.protocol})` : data.protocol}</TdCol>
                </TrCol>
              )}
              {!!data.xcm_version && (
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap">Version</TdCol>
                  <TdCol>{data.xcm_version}</TdCol>
                </TrCol>
              )}
              <TrCol>
                <TdCol className="font-semibold whitespace-nowrap">Raw Value</TdCol>
                <TdCol>
                  <Parameters value={JSON.stringify(data.assets)} />
                </TdCol>
              </TrCol>
              <TrCol>
                <TdCol className="font-semibold whitespace-nowrap">Progress</TdCol>
                <TdCol>
                  <Progress value={data} />
                </TdCol>
              </TrCol>
            </tbody>
          </TableCol>
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
