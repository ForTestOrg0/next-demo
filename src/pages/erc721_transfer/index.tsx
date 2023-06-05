import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getERC20Transfers, GetEvmTokenTransfersProps, getTokenDetail, getAssetDetail } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps, Token } from '@/types/page'
import { ERC721TransferList } from '@/components/Pages/Blockchain/ERC721TransferList'
import { ERC721TokenLink } from '@/components/Links'

export const getServerSideProps: GetServerSideProps<
  { data: GetEvmTokenTransfersProps; address: string; symbol: string; page: number } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const address = (context.query.address || '')?.toString()
  const symbol = (context.query.symbol || '')?.toString()
  let data = await getERC20Transfers(context.req.headers.host || '', {
    row: PAGE_ROW,
    page: page - 1,
    category: 'erc721',
    contract: address,
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
      address,
      symbol,
      chain: chainProps,
    },
  }
}

export default function Page({ data, address, symbol, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Transfers
        </Text>
        {symbol && (
          <Text block bold className="mb-4 break-all">
            For <ERC721TokenLink address={address}>{symbol}</ERC721TokenLink>
          </Text>
        )}
        <Boundary>
          <ERC721TransferList transfers={data.list} chain={chain} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/transfer?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
