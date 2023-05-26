import { Boundary, PageContent, Container, Text, Flex, Pagination } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Token, Holder } from '@/types/api'
import { getTokenDetail, GetTokenDetailProps, getTokenHolders, GetTokenHoldersProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { HolderList } from '@/components/Pages/Blockchain/HolderList'

export const getServerSideProps: GetServerSideProps<
  { data: GetTokenDetailProps; holderData: GetTokenHoldersProps; page: number } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const unique_id = (context.query.unique_id || '')?.toString()
  const data = await getTokenDetail(context.req.headers.host || '', {
    include_extends: true,
    unique_ids: [unique_id],
  })
  const holderData = await getTokenHolders(context.req.headers.host || '', {
    order: 'desc',
    order_field: 'balance',
    page,
    row: PAGE_ROW,
    unique_id: unique_id,
  })
  const chainProps = await getChainProps(context.req.headers.host)

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
  const holders = holderData?.list as Holder[]
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          {`${tokenDetail.symbol} Holders`}
        </Text>
        <Boundary>
          <HolderList token={tokenDetail} holders={holders} pageSize={PAGE_ROW} current={page} />
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
