import { Boundary, PageContent, Container, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getEvmTokens, GetEvmTokensProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { EvmTokenHolderListClient } from '@/components/Pages/Blockchain/HolderList'
import { ERC20TransferListClient } from '@/components/Pages/Blockchain/ERC20TransferList'
import { TransactionListClient } from '@/components/Pages/Blockchain/TransactionList'
import { TAB_ROW } from '@/config/constants'
import { Balance } from '@/components/Balance'
import { getSubdomainFromHeaders } from '@/utils/url'
import { EvmErc20TokenInfo } from '@/components/Pages/Blockchain/EvmErc20TokenInfo'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetEvmTokensProps
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

  const data = await getEvmTokens(subdomain, {
    contracts: [assetId || ''],
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
  const detail = data.list[0]
  return (
    <PageContent>
      <Container className="flex-1">
        <Boundary className="lg:px-7 lg:py-7 flex items-start">
          <EvmErc20TokenInfo token={detail} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Holders</Tab>
              <Tab>{`${detail.symbol} Transfers`}</Tab>
              <Tab>Transactions</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <EvmTokenHolderListClient asset={detail} host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              <TabPanel>
                <ERC20TransferListClient host={host} page={0} row={TAB_ROW} chain={chain} token={detail} />
              </TabPanel>
              <TabPanel>
                <TransactionListClient host={host} page={0} row={TAB_ROW} chain={chain} token={detail} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
