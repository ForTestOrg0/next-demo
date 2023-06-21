import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSearchAccount, GetSearchAccountProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { BlockExtrinsicsClient } from '@/components/Pages/Blockchain/BlockExtrinsics'
import { TAB_ROW } from '@/config/constants'
import { AccountInfo } from '@/components/Pages/Blockchain/AccountInfo'
import { TransferListClient } from '@/components/Pages/Blockchain/TransferList'
import { StakingVotedListClient } from '@/components/Pages/Blockchain/StakingVotedList'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetSearchAccountProps
    tab: string
    accountId: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const accountId = context.params?.id

  if (typeof accountId === 'undefined') {
    return {
      notFound: true,
    }
  }

  const data = await getSearchAccount(subdomain, {
    key: accountId,
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
      accountId,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, accountId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Account#{accountId}
        </Text>

        <Boundary>
          <AccountInfo account={data.account} chain={chain} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Extrinsics</Tab>
              <Tab>Transfers</Tab>
              <Tab>Vote</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BlockExtrinsicsClient host={host} page={0} row={TAB_ROW} signed="all" address={accountId} />
              </TabPanel>
              <TabPanel>
                <TransferListClient host={host} chain={chain} page={0} row={TAB_ROW} address={accountId} />
              </TabPanel>
              <TabPanel>
                <StakingVotedListClient host={host} chain={chain} address={accountId} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
