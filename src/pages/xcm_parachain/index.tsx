import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { GetParachainListProps, getParachainList } from '@/utils/api/parachain'
import { ParachainList } from '@/components/Pages/Parachain/ParachainList'
import { parachainListStatusMap } from '@/components/Pages/Parachain/ParachainList/ParachainList'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { data: GetParachainListProps; page: number; status: keyof typeof parachainListStatusMap } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  const status = 'parachain'
  const data = await getParachainList(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
    ...parachainListStatusMap[status].args,
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
      page,
      chain: chainProps,
      status,
    },
  }
}

export default function Page({ data, chain, page, status }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          {parachainListStatusMap[status].title} ({data.count})
        </Text>
        <Boundary>
          <ParachainList parachains={data.chains} chain={chain} disableColumn={parachainListStatusMap['xcm'].disableColumn} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/xcm_parachain?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
