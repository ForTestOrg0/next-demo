import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getXCMChannels, GetXCMChannelsProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { BareServerSideProps } from '@/types/page'
import { XCMChanel } from '@/types/api'
import { ChannelList } from '@/components/Pages/XCM/ChannelList'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { data: GetXCMChannelsProps; virtualTableData: XCMChanel[]; page: number } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const relaySubdomain = getRelaySubdomainFromSubdomain(subdomain)
  const page = parseInt(context.query.page as string) || 1
  const chainProps = await getChainProps(subdomain)
  let data = await getXCMChannels(relaySubdomain, {
    filter_para_id: relaySubdomain === subdomain ? undefined : chainProps?.chainConf.parachain?.id,
  })

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }
  const virtualTableData = data.data.list.filter((x, i) => i >= PAGE_ROW * (page - 1) && i < PAGE_ROW * page)

  return {
    props: {
      data: data.data,
      virtualTableData,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ data, virtualTableData, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          XCM Channels
        </Text>
        <Boundary>
          <ChannelList channels={virtualTableData} chain={chain} token={chain.nativeTokenConf} current={page} pageSize={PAGE_ROW} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.list.length} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/xcm_channel?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
