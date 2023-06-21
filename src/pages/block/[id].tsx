import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getBlock, GetBlockProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { BlockInfo } from '@/components/Pages/Blockchain/BlockInfo'
import { BlockExtrinsicsClient } from '@/components/Pages/Blockchain/BlockExtrinsics'
import { BlockEventsClient } from '@/components/Pages/Blockchain/BlockEvents'
import { TAB_ROW } from '@/config/constants'
import { BlockLogs } from '@/components/Pages/Blockchain/BlockLogs'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetBlockProps
    tab: string
    blockId: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const blockId = context.params?.id

  if (typeof blockId === 'undefined') {
    return {
      notFound: true,
    }
  }

  const numberReg = /^[0-9]+$/
  const isNumber = numberReg.test(blockId || '')
  const data = await getBlock(subdomain, {
    only_head: true,
    ...(isNumber ? { block_num: parseInt(blockId) } : { block_hash: blockId }),
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
      blockId,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, blockId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Block#{blockId}
        </Text>

        <Boundary>
          <BlockInfo block={data} chain={chain} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Extrinsics</Tab>
              <Tab>Events</Tab>
              <Tab>Log</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BlockExtrinsicsClient host={host} block_num={data.block_num} page={0} row={TAB_ROW} order="asc" disableColumn={{ block: true }} />
              </TabPanel>
              <TabPanel>
                <BlockEventsClient
                  host={host}
                  block_num={data.block_num}
                  page={0}
                  row={TAB_ROW}
                  order="asc"
                  disableColumn={{ block: true, time: true }}
                />
              </TabPanel>
              <TabPanel>
                <BlockLogs logs={data.logs} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
