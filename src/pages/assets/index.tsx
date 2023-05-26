import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getBlock, GetBlockProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { BlockInfo } from '@/components/Pages/Blockchain/BlockInfo'
import { SystemAssetsClient } from '@/components/Pages/Blockchain/SystemAssets'
import { BlockEventsClient } from '@/components/Pages/Blockchain/BlockEvents'
import { TAB_ROW } from '@/config/constants'
import { BlockLogs } from '@/components/Pages/Blockchain/BlockLogs'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetBlockProps
    tab: string
    blockId: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const host = context.req.headers.host || ''
  const tab = (context.query.tab || '')?.toString()
  const blockId = context.params?.id || '18063526'

  if (typeof blockId === 'undefined') {
    return {
      notFound: true,
    }
  }

  const numberReg = /^[0-9]+$/
  const isNumber = numberReg.test(blockId || '')
  const data = await getBlock(host, {
    only_head: true,
    ...(isNumber ? { block_num: parseInt(blockId) } : { block_hash: blockId }),
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
      blockId,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, blockId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>System</Tab>
              {/* <Tab>Asset</Tab> */}
              {/* <Tab>ERC-20 Token</Tab> */}
              {/* <Tab>ERC-721 Token</Tab> */}
            </TabList>
            <TabPanels>
              <TabPanel>
                <SystemAssetsClient host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              {/* <TabPanel><SystemAssetsClient host={host} page={0} row={TAB_ROW} /></TabPanel> */}
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
