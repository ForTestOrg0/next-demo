import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getExtrinsic, GetExtrinsicProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { BlockEventsClient } from '@/components/Pages/Blockchain/BlockEvents'
import { TAB_ROW } from '@/config/constants'
import { ExtrinsicInfo } from '@/components/Pages/Blockchain/ExtrinsicInfo'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetExtrinsicProps
    tab: string
    extrinsicIndex: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const host = context.req.headers.host || ''
  const tab = (context.query.tab || '')?.toString()
  const extrinsicIndex = context.params?.id

  if (typeof extrinsicIndex === 'undefined') {
    return {
      notFound: true,
    }
  }

  const data = await getExtrinsic(host, {
    events_limit: 1,
    extrinsic_index: extrinsicIndex,
  })
  const chainProps = await getChainProps(context.req.headers.host)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      data: data.data,
      tab,
      extrinsicIndex,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, extrinsicIndex }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Extrinsic#{extrinsicIndex}
        </Text>

        <Boundary>
          <ExtrinsicInfo extrinsic={data} chain={chain} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Events</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BlockEventsClient
                  host={host}
                  extrinsic_index={data.extrinsic_index}
                  page={0}
                  row={TAB_ROW}
                  order="asc"
                  disableColumn={{ block: true }}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
