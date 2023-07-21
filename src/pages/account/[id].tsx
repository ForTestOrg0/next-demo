import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, Flex } from '@/ui'
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
import { MultichainAccountBanner } from '@/components/Pages/Blockchain/MultichainAccountBanner'
import { AccountCard } from '@/components/Pages/Blockchain/AccountCard'
import { AccountTokensList } from '@/components/Pages/Blockchain/AccountTokensList'
import { ERC20TransferListByAddressClient, ERC20TransferListClient } from '@/components/Pages/Blockchain/ERC20TransferList'

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
  const acccount = data.account

  return (
    <PageContent>
      <Container className="flex-1">
        <MultichainAccountBanner className="mb-module" address={accountId} />

        <Flex className="mb-module relative">
          {/* Account Card */}
          <Flex className="flex-col">
            <Flex className="mb-4 justify-between items-center">
              <Flex className="items-center">
                <Text bold className="ml-2">
                  Account
                </Text>
              </Flex>
            </Flex>
            <Boundary>
              <AccountCard account={acccount} />
            </Boundary>
          </Flex>
          {/* Balance Card */}
          <Flex className="flex-col flex-1 absolute h-full left-[420px] w-[780px]">
            <Flex className="mb-4 justify-between items-center">
              <Flex className="items-center">
                <Text bold className="ml-2">
                  Balance
                </Text>
              </Flex>
            </Flex>
            <Boundary className="overflow-y-auto flex-1">
              <AccountTokensList address={acccount.address} host={host} chain={chain} />
            </Boundary>
          </Flex>
        </Flex>
        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Extrinsics</Tab>
              <Tab>Transfers</Tab>
              <Tab>Vote</Tab>
              <Tab>EVM Transactions</Tab>
              <Tab>ERC-20 Transfers</Tab>
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
              <TabPanel></TabPanel>
              <TabPanel>
                <ERC20TransferListByAddressClient
                  args={{
                    address: accountId,
                    row: TAB_ROW,
                    page: 0,
                  }}
                  host={host}
                  chain={chain}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
