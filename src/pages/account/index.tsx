import { Boundary, PageContent, Container, Flex, Text, Button } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getAccounts, GetAccountsProps } from '@/utils/api'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { AccountList } from '@/components/Pages/Blockchain/AccountList'
import { getSubdomainFromHeaders } from '@/utils/url'
import {
  AccountDistributionSummary,
  AccountRoleCountSummary,
  ActiveAccountsSummary,
  HoldersSummary,
} from '@/components/Pages/Blockchain/AccountSummary'
import { MenuBasicMultiIcon, PieChartIcon } from '@/ui/Svg'
import CheckBox from '@/ui/Checkbox/Checkbox'
import { useState } from 'react'
import { formatNumber } from '@/utils/formatBalance'
import { AccountListLink } from '@/components/Links'

export const getServerSideProps: GetServerSideProps<{ data: GetAccountsProps; page: number; host: string } & BareServerSideProps> = async (
  context
) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const data = await getAccounts(subdomain, {
    row: TAB_ROW,
    page: page - 1,
    order: 'desc',
    order_field: 'balance',
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
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ data, chain, page, host }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isExcludeSystemAccounts, setIsExcludeSystemAccounts] = useState(true)
  return (
    <PageContent>
      <Container className="flex-1">
        <Flex className="space-x-5 mb-module">
          <Flex className="flex-col flex-1">
            <Flex className="mb-4">
              <MenuBasicMultiIcon className="w-5" />
              <Text bold className="ml-2">
                Basic
              </Text>
            </Flex>

            <Boundary className="mb-5 py-5">
              <HoldersSummary host={host} chain={chain} />
            </Boundary>
            <Boundary className="py-5">
              <ActiveAccountsSummary host={host} chain={chain} />
            </Boundary>
          </Flex>

          <Flex className="flex-col flex-1">
            <Flex className="mb-4 justify-between items-center">
              <Flex className="items-center">
                <PieChartIcon className="w-5" />
                <Text bold className="ml-2">
                  Account Distribution
                </Text>
              </Flex>
              <Flex>
                <CheckBox
                  label="Exclude System Accounts"
                  checked={isExcludeSystemAccounts}
                  onChange={() => setIsExcludeSystemAccounts(!isExcludeSystemAccounts)}
                />
              </Flex>
            </Flex>

            <Boundary className="flex-1 flex items-center justify-center">
              <AccountDistributionSummary className="" host={host} chain={chain} excludeSystem={isExcludeSystemAccounts} />
            </Boundary>
          </Flex>
        </Flex>

        <Flex className="flex-col mb-module">
          <Flex className="mb-4 justify-between items-center">
            <Flex className="items-center">
              <Text bold>Account Role</Text>
            </Flex>
          </Flex>
          <Boundary className="!py-5">
            <AccountRoleCountSummary host={host} chain={chain} />
          </Boundary>
        </Flex>

        <Flex className="flex-col">
          <Flex className="mb-4 justify-between items-center">
            <Flex className="items-center">
              <Text bold>Holders ({formatNumber(data.count)})</Text>
            </Flex>
          </Flex>
          <Boundary>
            <AccountList accounts={data.list} chain={chain} />
          </Boundary>
        </Flex>
        {data?.count - TAB_ROW > 0 ? (
          <AccountListLink>
            <Button outline className="mt-4">
              View Other {formatNumber(chain.metadata.count_account - TAB_ROW)} Accounts
            </Button>
          </AccountListLink>
        ) : null}
      </Container>
    </PageContent>
  )
}
