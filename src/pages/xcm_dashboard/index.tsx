import React, { useState } from 'react'
import { Boundary, PageContent, Container, Flex, Pagination, Text, Button } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getXCMList, GetXCMListProps } from '@/utils/api'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { PAGE_ROW, TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { MessageListClient } from '@/components/Pages/XCM/MessageList'
import { ChannelListClient } from '@/components/Pages/XCM/ChannelList'
import { ParachainListClient } from '@/components/Pages/Parachain/ParachainList'
import { parachainListStatusMap } from '@/components/Pages/Parachain/ParachainList/ParachainList'
import { getSubdomainFromHeaders } from '@/utils/url'
import { TransfersIcon, HotIcon, ParachainIcon } from '@/ui/Svg'
import { XCMTransferListLink, XCMParachainLink } from '@/components/Links'

export const getServerSideProps: GetServerSideProps<{ data: GetXCMListProps; host: string; page: number } & BareServerSideProps> = async (
  context
) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const relaySubdomain = getRelaySubdomainFromSubdomain(subdomain)
  const chainProps = await getChainProps(subdomain)
  let data = await getXCMList(relaySubdomain, {
    row: PAGE_ROW,
    page: page - 1,
    filter_para_id: relaySubdomain === subdomain ? undefined : chainProps?.chainConf.parachain?.id,
  })

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      data: data.data,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isParachain = chain.chainConf.modules?.PARACHAIN
  const [transferCount, setTransferCount] = useState(0)
  const [channelCount, setChannelCount] = useState(0)
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          XCM Dashboard
        </Text>
        <Flex className="gap-x-5">
          <div className="flex-1">
            <div className="flex mb-4 justify-between">
              <div className="flex items-center">
                <TransfersIcon className="w-5" />
                <Text block bold className="ml-2 break-all">
                  Latest XCM Transfers
                </Text>
                <Text block bold className="text-sub-b2 ml-1 break-all">
                  (Total {transferCount})
                </Text>
              </div>
              <XCMTransferListLink>
                <Button outline className="">
                  View All
                </Button>
              </XCMTransferListLink>
            </div>
            <Boundary className="h-96 overflow-auto">
              <MessageListClient
                disableColumn={{ version: true, value: true }}
                host={host}
                page={0}
                row={TAB_ROW}
                chain={chain}
                type={'list'}
                setTransferCount={setTransferCount}
                message_type={'transfer'}
              />
            </Boundary>
          </div>
          <div className="flex-1">
            <div className="flex mb-4 justify-between">
              <div className="flex items-center">
                <HotIcon className="w-5" />
                <Text block bold className="ml-2 break-all">
                  Hot Channels
                </Text>
                <Text block bold className="text-sub-b2 ml-1 break-all">
                  (Total {channelCount})
                </Text>
              </div>
              <XCMTransferListLink>
                <Button outline className="">
                  View All
                </Button>
              </XCMTransferListLink>
            </div>
            <Boundary className="h-96 overflow-auto">
              <ChannelListClient host={host} page={0} row={TAB_ROW} chain={chain} type={'list'} setChannelCount={setChannelCount} />
            </Boundary>
          </div>
        </Flex>
        {isParachain && (
          <>
            <div className="flex mb-4 mt-7 justify-between">
              <div className="flex items-center">
                <ParachainIcon className="w-5" />
                <Text block bold className="ml-2 break-all">
                  Parachain
                </Text>
              </div>
              <XCMParachainLink>
                <Button outline className="">
                  View All
                </Button>
              </XCMParachainLink>
            </div>
            <Boundary>
              <ParachainListClient
                host={host}
                chain={chain}
                type={'list'}
                args={{
                  page: 0,
                  row: TAB_ROW,
                  ...parachainListStatusMap.xcm.args,
                }}
                disableColumn={parachainListStatusMap.xcm.disableColumn}
                viewAllQuery={{ status: 'xcm' }}
              />
            </Boundary>
          </>
        )}
      </Container>
    </PageContent>
  )
}
