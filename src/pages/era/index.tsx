import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { GetStakingEraStatProps, getStakingEraStat } from '@/utils/api'
import { EraList } from '@/components/Pages/Staking/EraList'

export const getServerSideProps: GetServerSideProps<{ data: GetStakingEraStatProps; page: number; address: string } & BareServerSideProps> = async (
  context
) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  const address = (context.query.address as string) || ''

  if (!address) {
    return {
      notFound: true,
    }
  }

  const data = await getStakingEraStat(subdomain, {
    address: address,
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
      address,
    },
  }
}

export default function Page({ data, chain, page, address }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Era for {address}
        </Text>
        <Boundary>
          <EraList eraStat={data.list} chain={chain} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/era?page=${_page}&address=${address}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
