import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getTransfers, getXCMList, GetXCMListProps } from '@/utils/api'
import { PAGE_ROW, TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps, Token } from '@/types/page'
import { MessageListClient } from '@/components/Pages/XCM/MessageList'
import { ChannelListClient } from '@/components/Pages/XCM/ChannelList'
import { AssetLink } from '@/components/Links'
import { ParachainListClient } from '@/components/Pages/Parachain/ParachainList'
import { parachainListStatusMap } from '@/components/Pages/Parachain/ParachainList/ParachainList'

export const getServerSideProps: GetServerSideProps<{ data: GetXCMListProps; host: string; page: number } & BareServerSideProps> = async (
  context
) => {
  const page = parseInt(context.query.page as string) || 1
  const host = context.req.headers.host || ''
  let data = await getXCMList(host, {
    row: PAGE_ROW,
    page: page - 1,
  })
  const chainProps = await getChainProps(host)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      data: data.data,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          XCM Dashboard
        </Text>
        <Flex className="gap-x-5">
          <div className="flex-1">
            <Text block bold className="mb-4 break-all">
              Latest XCM Transfers
            </Text>
            <Boundary>
              <MessageListClient
                disableColumn={{ version: true, value: true }}
                host={host}
                page={0}
                row={TAB_ROW}
                chain={chain}
                message_type={'transfer'}
              />
            </Boundary>
          </div>
          <div className="flex-1">
            <Text block bold className="mb-4 break-all">
              Hot Channels
            </Text>
            <Boundary>
              <ChannelListClient host={host} page={0} row={TAB_ROW} chain={chain} />
            </Boundary>
          </div>
        </Flex>
        <Text block bold className="mb-4 break-all mt-7">
          Parachain
        </Text>
        <Boundary>
          <ParachainListClient
            host={host}
            chain={chain}
            args={{
              page: 0,
              row: TAB_ROW,
              ...parachainListStatusMap.xcm.args,
            }}
            disableColumn={parachainListStatusMap.xcm.disableColumn}
            viewAllQuery={{ status: 'xcm' }}
          />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/xcm_message?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
