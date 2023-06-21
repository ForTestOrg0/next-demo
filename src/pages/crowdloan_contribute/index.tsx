import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { GetParachainContributesProps, getParachainContributes } from '@/utils/api/parachain'
import { ContributeList } from '@/components/Pages/Parachain/ContributeList'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { data: GetParachainContributesProps; page: number; fundId: string } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const fundId = context.query.fund_id as string
  const data = await getParachainContributes(subdomain, {
    fund_id: fundId,
    row: PAGE_ROW,
    page: page - 1,
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
      fundId,
    },
  }
}

export default function Page({ data, chain, page, fundId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Contributor For Crowdloan#{fundId}({data.count})
        </Text>
        <Boundary>
          <ContributeList contributes={data.contributes} chain={chain} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={data.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) => `/crowdloan_contribute?page=${_page}&fund_id=${fundId}`}
          />
        </Flex>
      </Container>
    </PageContent>
  )
}
