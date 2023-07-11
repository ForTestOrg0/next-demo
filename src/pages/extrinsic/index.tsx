import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getExtrinsics, GetExtrinsicsProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { BlockExtrinsics } from '@/components/Pages/Blockchain/BlockExtrinsics'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ExtrinsicHistoryChart } from '@/components/Pages/Blockchain/ExtrinsicHistoryChart'
import { formatNumber } from '@/utils/formatBalance'

export const getServerSideProps: GetServerSideProps<{ data: GetExtrinsicsProps; page: number; host: string } & BareServerSideProps> = async (
  context
) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const data = await getExtrinsics(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
    signed: 'signed',
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
  return (
    <PageContent>
      <Container className="flex-1">
        <div className="mb-module">
          <ExtrinsicHistoryChart host={host} chain={chain} />
        </div>
        <Text bold className="mb-2">
          For All ({formatNumber(data.count)})
        </Text>
        <Boundary>
          <BlockExtrinsics extrinsics={data.extrinsics} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/extrinsic?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
