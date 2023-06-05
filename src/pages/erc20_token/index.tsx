import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getEvmTokens, GetEvmTokensProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { ERC20TokenList } from '@/components/Pages/Blockchain/ERC20TokenList'

export const getServerSideProps: GetServerSideProps<{ data: GetEvmTokensProps; page: number } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const data = await getEvmTokens(context.req.headers.host || '', {
    row: PAGE_ROW,
    page: page - 1,
    category: 'erc20',
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
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ data, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          ERC20 Tokens
        </Text>
        <Boundary>
          <ERC20TokenList tokens={data.list} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/asset_token?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
