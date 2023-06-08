import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { GetEvmTransactionsProps, getEvmTokens, getEvmTransactions } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { EvmToken } from '@/types/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { TransactionList } from '@/components/Pages/Blockchain/TransactionList'
import { ERC20TokenLink, ERC721TokenLink } from '@/components/Links'

export const getServerSideProps: GetServerSideProps<
  {
    data: GetEvmTransactionsProps
    tokenDetail: EvmToken | null
    page: number
  } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const address = (context.query.block || '')?.toString()
  let data
  if (address) {
    data = await getEvmTransactions(context.req.headers.host || '', {
      row: PAGE_ROW,
      page: page - 1,
      contract: address,
    })
  }
  let tokenData = null
  if (address) {
    const data = await getEvmTokens(context.req.headers.host || '', {
      contracts: [address || ''],
    })
    tokenData = data.data.list[0]
  }
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
      tokenDetail: tokenData,
      chain: chainProps,
    },
  }
}

export default function Page({ data, tokenDetail, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          EVM Transaction History
        </Text>
        {tokenDetail && tokenDetail.category === 'erc20' && (
          <Text block bold className="mb-4 break-all">
            For <ERC20TokenLink address={tokenDetail.contract}>{tokenDetail.symbol}</ERC20TokenLink>
          </Text>
        )}
        {tokenDetail && tokenDetail.category === 'erc721' && (
          <Text block bold className="mb-4 break-all">
            For <ERC721TokenLink address={tokenDetail.contract}>{tokenDetail.symbol}</ERC721TokenLink>
          </Text>
        )}
        <Boundary>
          <TransactionList token={tokenDetail ? tokenDetail : chain.nativeTokenConf} transactions={data?.list} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={data.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) => `/evm_transaction?page=${_page}&block${tokenDetail?.contract}`}
          />
        </Flex>
      </Container>
    </PageContent>
  )
}
