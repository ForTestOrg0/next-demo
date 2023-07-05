import React, { useState } from 'react'
import { Boundary, PageContent, Container, Text, Flex, Button, TableCol, TrCol, TdCol, CopyBtn, Link } from '@/ui'
import { Time, TimeFromNow } from '@/components/Time'
import { Identicon } from '@/components/Identicon'
import { getParachainInfo, GetParachainInfoProps } from '@/utils/api/parachain'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getChainProps } from '@/utils/chain'
import { PAGE_ROW, TAB_ROW } from '@/config/constants'
import { BareServerSideProps } from '@/types/page'
import { MessageListClient } from '@/components/Pages/XCM/MessageList'
import { ChannelListClient } from '@/components/Pages/XCM/ChannelList'
import { TransfersIcon, HotIcon, DownloadCsvIcon, SandglassIcon } from '@/ui/Svg'
import { PLOTimelineClient } from '@/components/Pages/Parachain/PLOTimeline'
import { getSubdomainFromHeaders } from '@/utils/url'
import { XCMTransferListLink, XCMParachainLink, CrowdloanLink, BidLink } from '@/components/Links'
import background from '@/styles/images/parachain/background.png'
import avatar from '@/styles/images/parachain/avatar.png'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    tab: string
    data: GetParachainInfoProps
    paraId: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const paraId = context.params?.id

  if (typeof paraId === 'undefined') {
    return {
      notFound: true,
    }
  }

  const chainProps = await getChainProps(subdomain)

  const data = await getParachainInfo(subdomain, {
    page: 0,
    para_id: +paraId,
    row: 25,
  })

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      tab,
      data: data.data,
      paraId,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, paraId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const info = data?.chains?.[0]
  const [transferCount, setTransferCount] = useState(0)
  const [channelCount, setChannelCount] = useState(0)
  const bgStyle = { background: `url(${background.src})` + ' no-repeat center center', backgroundSize: 'cover' }
  const avatarBgStyle = { background: 'linear-gradient(to bottom, transparent, #fff 50%, #fff)' }
  const isParachain = () => {
    let result = false
    const status = info?.status
    if (status && status.toLowerCase().indexOf('parachain') > -1) {
      result = true
    }
    return result
  }
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Parachain#{paraId}
        </Text>
        <Flex className="gap-x-5 mb-7 justify-between">
          <div className="rounded bg-sub-white border border-sub-b4 shadow-module flex flex-col w-[390px]" style={bgStyle}>
            <div className="flex-1"></div>
            <div className="flex items-center px-5 pt-5" style={avatarBgStyle}>
              <img className="rounded-[50%] border border-sub-b3" src={avatar.src} alt={'avatar'} style={{ height: 60 }} />
              <span className="ml-5 text-lg font-semibold">Unknown</span>
            </div>
            <div className="bg-white px-5 pb-5">
              <div className="text-sm mt-2 pt-2 border-t border-sub-b4">
                This is a mysterious project, Subscan cannot get the true identity of this Para ID. Please contact the developer team to submit
                project information here and let us know more.
              </div>
              <div>
                <Link external href="https://github.com/subscan-explorer/projects-info">
                  <Button className="mt-2 w-full">Submit Project Info</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Boundary className="">
              <TableCol className="w-full">
                <tbody>
                  {info?.manager ? (
                    <TrCol>
                      <TdCol className="font-semibold whitespace-nowrap">Owner</TdCol>
                      <TdCol>
                        <Identicon account={info?.manager_display} />
                      </TdCol>
                    </TrCol>
                  ) : null}
                  {info?.fund_account ? (
                    <TrCol>
                      <TdCol className="font-semibold whitespace-nowrap">Fund Account</TdCol>
                      <TdCol>
                        <Identicon account={info?.fund_account_display} />
                      </TdCol>
                    </TrCol>
                  ) : null}
                  <TrCol>
                    <TdCol className="font-semibold whitespace-nowrap">Register Status</TdCol>
                    <TdCol>{info?.status}</TdCol>
                  </TrCol>
                  {isParachain() ? (
                    <TrCol>
                      <TdCol className="font-semibold whitespace-nowrap">Lease Period</TdCol>
                      <TdCol>{`Slot#${info.begin_period} - Slot#${info.last_period}`}</TdCol>
                    </TrCol>
                  ) : null}
                  <TrCol>
                    <TdCol className="font-semibold whitespace-nowrap">Validator</TdCol>
                    <TdCol>{info?.validators.length}</TdCol>
                  </TrCol>
                  {isParachain() ? (
                    <TrCol>
                      <TdCol className="font-semibold whitespace-nowrap">Slot Type</TdCol>
                      <TdCol>
                        {info.source === 3 ? <div>Public</div> : null}
                        {info.source === 1 ? (
                          info.bid_id ? (
                            <BidLink id={info.bid_id}>{`Bid#${info.bid_id}`}</BidLink>
                          ) : info.auction_index ? (
                            <BidLink
                              id={`${info.auction_index}-${info.first_period}-${info.last_period}`}>{`Bid#${info.auction_index}-${info.first_period}-${info.last_period}`}</BidLink>
                          ) : null
                        ) : null}
                        {info.source === 2 ? <CrowdloanLink id={info.fund_id}>{`Crowdloan#${info.fund_id}`}</CrowdloanLink> : null}
                      </TdCol>
                    </TrCol>
                  ) : null}
                  {info?.genesis_head ? (
                    <TrCol>
                      <TdCol className="font-semibold whitespace-nowrap">Head Data</TdCol>
                      <TdCol className="flex">
                        <div>Copy Head Data</div>
                        <CopyBtn className="ml-3" value={info?.genesis_head} />
                      </TdCol>
                    </TrCol>
                  ) : null}
                  {info?.validation_code_url ? (
                    <TrCol>
                      <TdCol className="font-semibold whitespace-nowrap">Validation Code</TdCol>
                      <TdCol className="flex">
                        <Link className="flex text-sub-network cursor-pointer" external href={info?.validation_code_url}>
                          <div>Download WASM Hex Code</div>
                          <DownloadCsvIcon className="w-5 ml-3 text-sub-network" />
                        </Link>
                      </TdCol>
                    </TrCol>
                  ) : null}
                </tbody>
              </TableCol>
            </Boundary>
          </div>
        </Flex>
        <Flex className="gap-x-5 mb-7">
          <div className="flex-1">
            <Flex className="mb-4 justify-between">
              <Flex className="items-center">
                <TransfersIcon className="w-5" />
                <Text block bold className="ml-2 break-all">
                  Latest XCM Transfers
                </Text>
                <Text block bold className="text-sub-b2 ml-1 break-all">
                  (Total {transferCount})
                </Text>
              </Flex>
              <XCMTransferListLink>
                <Button outline className="">
                  View All
                </Button>
              </XCMTransferListLink>
            </Flex>
            <Boundary className="h-96 overflow-auto">
              <MessageListClient
                disableColumn={{ version: true, value: true }}
                host={host}
                page={0}
                row={TAB_ROW}
                chain={chain}
                type={'list'}
                paraId={+paraId}
                setTransferCount={setTransferCount}
                message_type={'transfer'}
              />
            </Boundary>
          </div>
          <div className="flex-1">
            <Flex className="mb-4 justify-between">
              <Flex className="items-center">
                <HotIcon className="w-5" />
                <Text block bold className="ml-2 break-all">
                  Hot Channels
                </Text>
                <Text block bold className="text-sub-b2 ml-1 break-all">
                  (Total {channelCount})
                </Text>
              </Flex>
              <XCMTransferListLink>
                <Button outline className="">
                  View All
                </Button>
              </XCMTransferListLink>
            </Flex>
            <Boundary className="h-96 overflow-auto">
              <ChannelListClient paraId={+paraId} host={host} page={0} row={TAB_ROW} chain={chain} type={'list'} setChannelCount={setChannelCount} />
            </Boundary>
          </div>
        </Flex>
        <div>
          <div className="flex mb-4">
            <div className="flex items-center">
              <SandglassIcon className="w-5" />
              <Text block bold className="ml-2 break-all">
                PLO Timeline
              </Text>
            </div>
          </div>
          <Boundary>
            <PLOTimelineClient
              host={host}
              args={{
                para_id: parseInt(paraId),
                order: 'asc',
              }}
            />
          </Boundary>
        </div>
      </Container>
    </PageContent>
  )
}
