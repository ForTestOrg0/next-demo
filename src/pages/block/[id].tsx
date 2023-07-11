import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, Flex, Button, LinkRouter } from '@/ui'
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
import { ButtonLeftIcon, ButtonRightIcon } from '@/ui/Svg'
import { BlockLink } from '@/components/Links'

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
  const preBlock = data.block_num - 1 >= 0 ? data.block_num - 1 : data.block_num
  const nextBlock = data.block_num + 1
  return (
    <PageContent>
      <Container className="flex-1">
        <Flex className="mb-module">
          <Flex className="items-center space-x-4">
            <BlockLink blockNumber={preBlock} className="flex justify-center items-center w-[30px] h-[30px] bg-sub-network rounded">
              <ButtonLeftIcon className="text-sub-white h-5" />
            </BlockLink>
            <Text block bold className="text-lg break-all">
              Block#{blockId}
            </Text>
            <BlockLink blockNumber={nextBlock} className="flex justify-center items-center w-[30px] h-[30px] bg-sub-network rounded">
              <ButtonRightIcon className="text-sub-white h-5" />
            </BlockLink>
          </Flex>
        </Flex>

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
