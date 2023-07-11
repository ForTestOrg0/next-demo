import { Boundary, PageContent, Container, TabGroup, TabList, Tab, TabPanels, TabPanel, Flex } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { SystemAssetsClient } from '@/components/Pages/Blockchain/SystemAssets'
import { CustomAssetsClient } from '@/components/Pages/Blockchain/CustomAssets'
import { AssetListClient } from '@/components/Pages/Blockchain/AssetList'
import { ERC20TokenListClient } from '@/components/Pages/Blockchain/ERC20TokenList'
import { ERC721TokenListClient } from '@/components/Pages/Blockchain/ERC721TokenList'
import { TAB_ROW } from '@/config/constants'
import { getSubdomainFromHeaders } from '@/utils/url'
import { NativeTokenInfo } from '@/components/Pages/Blockchain/NativeTokenInfo'
import { NativeTokenDistributionChart } from '@/components/Pages/Blockchain/NativeTokenDistributionChart'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    tab: string
  } & BareServerSideProps
> = async (context) => {
  const tab = (context.query.tab || '')?.toString()
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const chainProps = await getChainProps(subdomain)

  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      tab,
      chain: chainProps,
    },
  }
}

export default function Page({ host, chain }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Flex className="space-x-5">
          <Boundary className="">
            <NativeTokenInfo chain={chain} />
          </Boundary>
          <Boundary className="w-auto">
            <NativeTokenDistributionChart chain={chain} />
          </Boundary>
        </Flex>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>System</Tab>
              <Tab>Custom</Tab>
              <Tab>Asset</Tab>
              <Tab>ERC-20 Token</Tab>
              <Tab>ERC-721 Token</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SystemAssetsClient host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              <TabPanel>
                <CustomAssetsClient host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              <TabPanel>
                <AssetListClient host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              <TabPanel>
                <ERC20TokenListClient host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              <TabPanel>
                <ERC721TokenListClient host={host} page={0} row={TAB_ROW} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
