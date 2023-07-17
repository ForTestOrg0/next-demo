import { Boundary, PageContent, Container, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getTokenDetail, GetTokenDetailProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { AccountListClient } from '@/components/Pages/Blockchain/AccountList'
import { TransferListClient } from '@/components/Pages/Blockchain/TransferList'
import { TAB_ROW } from '@/config/constants'
import { getSubdomainFromHeaders } from '@/utils/url'
import { SystemTokenInfo } from '@/components/Pages/Blockchain/SystemTokenInfo'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetTokenDetailProps
    tab: string
    unique_id: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const unique_id = (context.query.unique_id || '')?.toString()

  if (typeof unique_id === 'undefined') {
    return {
      notFound: true,
    }
  }

  const data = await getTokenDetail(subdomain, {
    include_extends: true,
    unique_ids: [unique_id],
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
  const system = data['system']?.[0]
  const holders = system?.['extends']?.['holders'] || 0
  return (
    <PageContent>
      <Container className="flex-1">
        <Boundary className="lg:px-7 lg:py-7 flex items-start">
          <SystemTokenInfo token={system} holdersCount={holders} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Holders</Tab>
              <Tab>{`${system?.symbol} Transfers`}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AccountListClient useDecimal id={system?.symbol || ''} chain={chain} host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              <TabPanel>
                <TransferListClient
                  asset_unique_id={unique_id}
                  host={host}
                  chain={chain}
                  page={0}
                  row={TAB_ROW}
                  disableColumn={{ block: true, result: true }}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
