import { Boundary, PageContent, Container, Flex, Text, Pagination } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getAccounts, GetAccountsProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { AccountList } from '@/components/Pages/Blockchain/AccountList'
import { getSubdomainFromHeaders } from '@/utils/url'
import { useState } from 'react'
import { formatNumber } from '@/utils/formatBalance'

export const getServerSideProps: GetServerSideProps<{ data: GetAccountsProps; page: number; host: string } & BareServerSideProps> = async (
  context
) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const data = await getAccounts(subdomain, {
    row: PAGE_ROW,
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
        <Flex className="flex-col mb-module">
          <Flex className="mb-4 justify-between items-center">
            <Flex className="items-center">
              <Text bold>Holders({formatNumber(data.count)})</Text>
            </Flex>
          </Flex>
          <Boundary>
            <AccountList accounts={data.list} chain={chain} baseRank={(page - 1) * PAGE_ROW} />
          </Boundary>
        </Flex>
        <Flex className="flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/account_list?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
