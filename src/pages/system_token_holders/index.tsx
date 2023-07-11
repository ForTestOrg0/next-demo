import { Boundary, PageContent, Container, Text, Flex, Pagination } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Token, Account } from '@/types/api'
import { getTokenDetail, GetTokenDetailProps, getTokenHolders, GetTokenHoldersProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { AccountList } from '@/components/Pages/Blockchain/AccountList'
import { SystemTokenLink } from '@/components/Links'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { data: GetTokenDetailProps; holderData: GetTokenHoldersProps; page: number } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  const unique_id = (context.query.unique_id || '')?.toString()
  const data = await getTokenDetail(subdomain, {
    include_extends: true,
    unique_ids: [unique_id],
  })
  const holderData = await getTokenHolders(subdomain, {
    order: 'desc',
    order_field: 'balance',
    page: page - 1,
    row: PAGE_ROW,
    unique_id: unique_id,
  })
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      holderData: holderData.data,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ data, chain, page, holderData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const tokenDetail = data['system']?.[0] as Token
  const holders = holderData?.list as Account[]
  holders.forEach((holder) => {
    holder.balance_lock = holder.ring_lock || holder.balance_lock || ''
  })
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Holders
        </Text>
        {tokenDetail && (
          <Text block bold className="mb-4 break-all">
            For <SystemTokenLink query={{ unique_id: tokenDetail.unique_id }}>{tokenDetail.symbol}</SystemTokenLink>
          </Text>
        )}
        <Boundary>
          <AccountList useDecimal accounts={holders} chain={chain} baseRank={(page - 1) * PAGE_ROW} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={holderData.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) => `/system_token_holders?page=${_page}&unique_id=${tokenDetail.unique_id}`}
          />
        </Flex>
      </Container>
    </PageContent>
  )
}
