import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getEvmTokens, GetEvmTokensProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import Image from 'next/image'
import { EvmTokenHolderListClient } from '@/components/Pages/Blockchain/HolderList'
import { ERC721TransferListClient } from '@/components/Pages/Blockchain/ERC721TransferList'
import { TransactionListClient } from '@/components/Pages/Blockchain/TransactionList'
import { TAB_ROW } from '@/config/constants'
import defaultTokenIcon from '@/styles/images/default-token.png'
import { Balance } from '@/components/Balance'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetEvmTokensProps
    tab: string
    unique_id: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const host = context.req.headers.host || ''
  const tab = (context.query.tab || '')?.toString()
  const unique_id = (context.query.unique_id || '')?.toString()
  const assetId = context.params?.id

  if (typeof unique_id === 'undefined') {
    return {
      notFound: true,
    }
  }

  const data = await getEvmTokens(host, {
    contracts: [assetId || ''],
  })
  const chainProps = await getChainProps(context.req.headers.host)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      data: data.data,
      tab,
      unique_id,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, unique_id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const detail = data.list[0]
  return (
    <PageContent>
      <Container className="flex-1">
        <Boundary className="lg:px-7 lg:py-7 flex items-start">
          <div className="symbol-img mr-7">
            {/* <Image src={defaultTokenIcon} width={70} height={70} alt={'token'} /> */}
            {/* <div className="asset-name">
            <span className="symbol">{system?.symbol}</span>
            {system?.name}
            </div> */}
          </div>
          <div className="w-full">
            <div className="flex">
              <div className="flex items-center">
                <div className="text-xl mr-[60px]">{detail.name}</div>
              </div>
              <div className="w-px h-[70px] bg-[#e7eaf3] ml-12 mr-7"></div>
              <div className="flex flex-col justify-between mr-12">
                <div className="label text-sm font-semibold">Symbol</div>
                <div className="text-sm">{detail.symbol || '-'}</div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="label text-sm font-semibold">Total Supply</div>
                <div className="text-sm">
                  <Balance value={detail.totalSupply} token={detail} showSymbol={false} />
                </div>
              </div>
            </div>
          </div>
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Holders</Tab>
              <Tab>{`${detail.symbol} Transfers`}</Tab>
              <Tab>Transactions</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <EvmTokenHolderListClient asset={detail} host={host} page={0} row={TAB_ROW} />
              </TabPanel>
              <TabPanel>
                <ERC721TransferListClient host={host} page={0} row={TAB_ROW} chain={chain} token={detail} />
              </TabPanel>
              <TabPanel>
                <TransactionListClient host={host} page={0} row={TAB_ROW} chain={chain} token={detail} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
