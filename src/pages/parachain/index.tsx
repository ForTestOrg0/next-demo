import React, { useEffect, useState, useMemo } from 'react'
import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel, Flex, Link, Button } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { unwrap } from '@/utils/api'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { GetParachainMetaProps, getParachainAuctions, getParachainMeta } from '@/utils/api/parachain'
import { GetXCMMetaProps, getXCMMeta } from '@/utils/api/xcm'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { ParachainAuctionLink } from '@/components/Links'
import { ParachainAuction } from '@/types/api'
import { GithubIcon, TelegramIcon, LinkIcon, WhitePaperIcon, TwitterIcon } from '@/ui/Svg'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import dayjs from 'dayjs'
import { BareServerSideProps } from '@/types/page'
import { GraphChart } from '@/components/Pages/Parachain/Common'
import { ParachainListClient } from '@/components/Pages/Parachain/ParachainList'
import { parachainListStatusMap } from '@/components/Pages/Parachain/ParachainList/ParachainList'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { parachainMeta: GetParachainMetaProps; XCMMeta: GetXCMMetaProps; host: string; currentAuction: ParachainAuction | undefined } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const relaySubdomain = getRelaySubdomainFromSubdomain(subdomain)
  const chainProps = await getChainProps(subdomain)
  const data = await getParachainMeta(subdomain)

  const auctions = await getParachainAuctions(subdomain, {
    row: 1,
    page: 0,
  })
  const xcmData = await getXCMMeta(relaySubdomain, {
    para_id: undefined,
  })

  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      XCMMeta: xcmData.data,
      parachainMeta: data.data,
      chain: chainProps,
      host: subdomain,
      currentAuction: unwrap(auctions)?.auctions[0],
    },
  }
}

export default function Page({ chain, host, parachainMeta, XCMMeta, currentAuction }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [projectInfo, setProjectInfo] = useState<ParachainProjectInfo>()

  useEffect(() => {
    if (chain.chainConf.parachain && chain.chainConf.parachain?.relaychain) {
      const parachain = getParachainProjectInfoById(chain.chainConf.parachain?.relaychain, chain.chainConf.parachain?.id) || DEFAULT_PARACHAIN
      setProjectInfo(parachain)
    }
  }, [chain.chainConf.parachain])
  const items = [
    {
      label: 'Parachain/Total Slot',
      value: `${parachainMeta.online_count}/${parachainMeta.total_slot_num}`,
    },
    {
      label: 'Parathread',
      value: `${parachainMeta.upcoming_count}`,
    },
    {
      label: 'Open Channels',
      value: `${XCMMeta.open_channel}`,
    },
    {
      label: 'Auction',
      value: `${parachainMeta.auction_count}`,
    },
    {
      label: 'Current Lease',
      value: `${Math.floor((chain.metadata.blockNum - parachainMeta.lease_offset) / parachainMeta.lease_period) || 0}`,
    },
    {
      label: 'XCM Transfers',
      value: `${XCMMeta.relayed_transfer_count}`,
    },
  ]
  const useCountdown = (targetDate: string | number | Date) => {
    const countDownDate = new Date(targetDate).getTime()
    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime())
      }, 1000)
      return () => clearInterval(interval)
    }, [countDownDate])
    return getReturnValues(countDown)
  }

  const getReturnValues = (countDown: number) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    const hours = ('' + Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')
    const minutes = ('' + Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    return { days, hours, minutes }
  }
  let distance = 0
  if (currentAuction?.early_end_block) {
    let endBlock = (parachainMeta.ending_period || 0) + currentAuction.early_end_block
    distance = (endBlock - chain.metadata.blockNum) * 6
  }
  const endTime = useMemo(() => {
    return dayjs().add(distance, 'seconds').valueOf()
  }, [distance])
  const countdown = useCountdown(endTime)

  return (
    <PageContent>
      <Container className="flex-1">
        <Flex className="gap-x-5 mb-module">
          <div className="flex-1">
            <div className="flex mb-4 justify-between">
              <div className="flex items-center">
                <Text block bold className="ml-2 break-all">
                  Basic Data
                </Text>
              </div>
            </div>
            <Boundary className="!p-5">
              <>
                <div className="h-[70px]">
                  {/* <img alt="logo" :src="networkLogo" /> */}
                  <Flex className="flex-col">
                    <Text className="!text-lg font-semibold">{chain.chainConf.name}</Text>
                    <Text small className="mt-1 bg-sub-network px-2.5 py-0.5 w-fit rounded-lg text-white">
                      Relay Chain
                    </Text>
                  </Flex>
                </div>
                <div className="w-full h-px bg-[#e7eaf3] my-5"></div>
                <Flex className="space-x-2.5">
                  {chain.chainConf.social.website && (
                    <Link href={chain.chainConf.social.website} external>
                      <LinkIcon className="w-5 text-sub-network opacity-50 cursor-pointer" />
                    </Link>
                  )}
                  {chain.chainConf.social.github && (
                    <Link href={projectInfo?.['Github Link'] || chain.chainConf.social.github} external>
                      <GithubIcon className="w-5 text-sub-network opacity-50 cursor-pointer" />
                    </Link>
                  )}
                  {chain.chainConf.social.whitePaper && (
                    <Link href={chain.chainConf.social.whitePaper} external>
                      <WhitePaperIcon className="w-5 text-sub-network opacity-50 cursor-pointer" />
                    </Link>
                  )}
                  {chain.chainConf.social.telegram && (
                    <Link href={projectInfo?.['Telegram Link'] || chain.chainConf.social.telegram} external>
                      <TelegramIcon className="w-5 text-sub-network opacity-50 cursor-pointer" />
                    </Link>
                  )}
                  {chain.chainConf.social.twitter && (
                    <Link href={projectInfo?.['Twitter Link'] || chain.chainConf.social.twitter} external>
                      <TwitterIcon className="w-5 text-sub-network opacity-50 cursor-pointer" />
                    </Link>
                  )}
                </Flex>
                {parachainMeta.auction_active ? (
                  <Flex className="w-full bg-sub-network rounded my-5 px-5 py-2.5 text-white justify-between items-center">
                    <Text bold>{`#${parachainMeta.auction_count} in Auction`}</Text>
                    <Flex className="items-center">
                      <Flex>
                        <Text bold className="ml-2.5">
                          {countdown.days}
                        </Text>
                        <Text bold className="ml-2.5">
                          days
                        </Text>
                        <Text bold className="ml-2.5">
                          {countdown.hours}
                        </Text>
                        <Text bold className="ml-2.5">
                          hrs
                        </Text>
                        <Text bold className="ml-2.5">
                          {countdown.minutes}
                        </Text>
                        <Text bold className="ml-2.5">
                          mins
                        </Text>
                      </Flex>
                      <ParachainAuctionLink index={parachainMeta.auction_count}>
                        <Button outline className="ml-2.5">
                          Detail
                        </Button>
                      </ParachainAuctionLink>
                    </Flex>
                  </Flex>
                ) : (
                  <Text className="w-full bg-sub-b2 rounded my-5 px-5 py-2.5 text-white">{`Auction #${
                    parachainMeta.auction_count + 1
                  } is in preparation`}</Text>
                )}
                <div className="my-module rounded px-5 py-2.5 grid grid-cols-3 bg-sub-bg gap-y-10 gap-x-5">
                  {items.map((meta) => (
                    <Flex key={meta.label} className="flex-1 flex-col">
                      <Text bold>{meta.label}</Text>
                      <Text className="!text-[26px] !leading-10 font-semibold text-sub-network mt-2.5">{meta.value}</Text>
                    </Flex>
                  ))}
                </div>
              </>
            </Boundary>
          </div>
          <Flex className="flex-1 flex-col">
            <div className="flex mb-4 justify-between">
              <div className="flex items-center">
                <Text block bold className="ml-2 break-all">
                  Parachain Connection Status
                </Text>
              </div>
            </div>
            <Boundary className="!p-0 h-full relative">
              <div className="pointer-events-none">
                <img className="absolute w-[232px] left-0 bottom-0" src={'/website/assets/xcm/bg1.png'} />
                <img className="absolute w-[232px] right-0 top-0" src={'/website/assets/xcm/bg4.png'} />
              </div>
              <GraphChart host={host} chain={chain}></GraphChart>
            </Boundary>
          </Flex>
        </Flex>
        <Text block bold className="mb-4 break-all">
          Parachain
        </Text>
        <Boundary>
          <TabGroup>
            <TabList>
              <Tab>Parachain</Tab>
              <Tab>Parathread</Tab>
              <Tab>Registered</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ParachainListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...parachainListStatusMap.parachain.args,
                  }}
                  disableColumn={parachainListStatusMap.parachain.disableColumn}
                  viewAllQuery={{ status: 'parachain' }}
                />
              </TabPanel>
              <TabPanel>
                <ParachainListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...parachainListStatusMap.parathread.args,
                  }}
                  disableColumn={parachainListStatusMap.parathread.disableColumn}
                  viewAllQuery={{ status: 'parathread' }}
                />
              </TabPanel>
              <TabPanel>
                <ParachainListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...parachainListStatusMap.registered.args,
                  }}
                  disableColumn={parachainListStatusMap.registered.disableColumn}
                  viewAllQuery={{ status: 'registered' }}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
