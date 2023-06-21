import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, TableCol, TdCol, TrCol } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getXCMChannel } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { XCMChanel } from '@/types/api'
import { BareServerSideProps } from '@/types/page'
import { TimeFromNow } from '@/components/Time'
import { MessageListClient } from '@/components/Pages/XCM/MessageList'
import { TAB_ROW } from '@/config/constants'
import { ResultStatus } from '@/components/Status'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: XCMChanel
    tab: string
    channelId: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const channelId = context.params?.id

  if (typeof channelId === 'undefined') {
    return {
      notFound: true,
    }
  }

  const data = await getXCMChannel(subdomain, {
    recipient: +channelId.split('-')[0],
    sender: +channelId.split('-')[1],
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
      channelId,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, channelId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const sender = +channelId.split('-')[0]
  const recipient = +channelId.split('-')[1]
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Channel#{channelId}
        </Text>
        <Boundary className="lg:px-7 lg:py-7 flex items-start">
          <TableCol className="w-full">
            <tbody>
              <TrCol>
                <TdCol className="font-semibold whitespace-nowrap">Channel Direction</TdCol>
                <TdCol>
                  <div className="flex">{`${sender}->${recipient}`}</div>
                </TdCol>
              </TrCol>
              <TrCol>
                <TdCol className="font-semibold whitespace-nowrap">Status</TdCol>
                <TdCol>
                  <ResultStatus type={data.status === 'accepted' ? 1 : 0} text={data.status} />
                </TdCol>
              </TrCol>
              <TrCol>
                <TdCol className="font-semibold whitespace-nowrap">Sovereign Account</TdCol>
                <TdCol>
                  <Text>
                    <Identicon paraId={data.sender} />
                  </Text>
                </TdCol>
              </TrCol>
              {data.active_at ? (
                <TrCol>
                  <TdCol className="font-semibold whitespace-nowrap">Active Time</TdCol>
                  <TdCol>
                    <TimeFromNow date={data.active_at} />
                  </TdCol>
                </TrCol>
              ) : null}
              <TrCol>
                <TdCol className="font-semibold whitespace-nowrap">Proposed Max Capacity</TdCol>
                <TdCol>
                  <Text>{data.proposed_max_capacity}</Text>
                </TdCol>
              </TrCol>
              <TrCol>
                <TdCol className="font-semibold whitespace-nowrap">Proposed Max Message Size</TdCol>
                <TdCol>
                  <Text>{`${data.proposed_max_message_size} bytes`}</Text>
                </TdCol>
              </TrCol>
            </tbody>
          </TableCol>
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>XCM Transfer</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <MessageListClient
                  disableColumn={{ version: true }}
                  host={host}
                  page={0}
                  row={TAB_ROW}
                  chain={chain}
                  dest_para_id={recipient}
                  origin_para_id={sender}
                  message_type={'transfer'}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
