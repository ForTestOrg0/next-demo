import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getERC20Transfers, GetEvmTokenTransfersProps, getEvmTokenTransfer } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { ERC20TransferList } from '@/components/Pages/Blockchain/ERC20TransferList'
import { AccountLink, ERC20TokenLink } from '@/components/Links'
import { getSubdomainFromHeaders, objectToSearchParams } from '@/utils/url'
import { APIWarpperProps } from '@/types/api'

export const getServerSideProps: GetServerSideProps<
  {
    data: GetEvmTokenTransfersProps
    address: string
    symbol: string
    page: number
    contractAddress: string
  } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const contractAddress = (context.query.contractAddress || '')?.toString()
  const address = (context.query.address || '')?.toString()
  const symbol = (context.query.symbol || '')?.toString()

  let data: APIWarpperProps<GetEvmTokenTransfersProps> | null = null

  const subdomain = getSubdomainFromHeaders(context.req.headers)

  if (contractAddress && !address) {
    const result = await getERC20Transfers(subdomain, {
      row: PAGE_ROW,
      page: page - 1,
      category: 'erc20',
      contract: contractAddress,
    })
    data = result
  }

  if (address) {
    const result = await getEvmTokenTransfer(subdomain, {
      contract: contractAddress,
      address,
      row: PAGE_ROW,
      page: page - 1,
      category: 'erc20',
    })
    data = result
  }

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
      address,
      contractAddress,
      symbol,
      chain: chainProps,
    },
  }
}

export default function Page({ data, contractAddress, address, symbol, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          EVM Token Transfers History
        </Text>
        {contractAddress && (
          <Text block bold className="mb-4 break-all">
            <Text>For Token</Text>
            <ERC20TokenLink className="mx-3" address={contractAddress}>
              {contractAddress}-{symbol}
            </ERC20TokenLink>
            <Text>({data.count})</Text>
          </Text>
        )}

        {address && (
          <Text block bold className="mb-4 break-all">
            <Text>For Address</Text>
            <AccountLink className="mx-3" address={address}>
              {address}
            </AccountLink>
            <Text>({data.count})</Text>
          </Text>
        )}

        <Boundary>
          <ERC20TransferList transfers={data.list} chain={chain} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={data.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) =>
              `/erc20_transfer?${objectToSearchParams({
                contractAddress,
                address,
                page: _page.toString(),
                symbol,
              })}`
            }
          />
        </Flex>
      </Container>
    </PageContent>
  )
}
