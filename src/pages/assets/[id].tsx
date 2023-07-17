import { Boundary, PageContent, Container, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getAssetDetail, GetAssetProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { AssetHolderListClient } from '@/components/Pages/Blockchain/HolderList'
import { AssetTransferListClient } from '@/components/Pages/Blockchain/TransferList'
import { AssetActivityListClient } from '@/components/Pages/Blockchain/AssetActivityList'
import { TAB_ROW } from '@/config/constants'
import { getSubdomainFromHeaders } from '@/utils/url'
import { AssetTokenInfo } from '@/components/Pages/Blockchain/AssetTokenInfo'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetAssetProps
    tab: string
    unique_id: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const unique_id = (context.query.unique_id || '')?.toString()
  const assetId = context.params?.id

  if (typeof unique_id === 'undefined') {
    return {
      notFound: true,
    }
  }

  const data = await getAssetDetail(subdomain, {
    asset_id: assetId || '',
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
      unique_id,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, unique_id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Boundary className="lg:px-7 lg:py-7 flex items-start">
          <AssetTokenInfo asset={data} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Holders</Tab>
              <Tab>{`${data.metadata.symbol} Transfers`}</Tab>
              <Tab>Activities</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AssetHolderListClient asset={data} host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              <TabPanel>
                <AssetTransferListClient host={host} chain={chain} page={0} row={TAB_ROW} asset_id={data.asset_id} token={data.metadata} />
              </TabPanel>
              <TabPanel>
                <AssetActivityListClient host={host} page={0} row={TAB_ROW} asset_id={data.asset_id} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
