'use client'
import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Text, TabGroup, TabList, Tab, TabPanels, TabPanel, Boundary } from '@/ui'
import { getRelaySubdomainFromSubdomain } from '@/config/chains'
import { useXCMMeta } from '@/utils/api/xcm'
import dayjs from 'dayjs'
import { parseTimeToUtc } from '@/utils/time'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import MetaInfo from './MetaInfo'
import { GraphChart } from '@/components/Pages/Parachain/Common'
import { XCMMessage } from '@/components/Pages/Tools/Charts'

interface Props extends BareProps, BareServerSideProps {
  host: string
}
const Component: React.FC<Props> = ({ children, host, className, chain }) => {
  const relaySubdomain = getRelaySubdomainFromSubdomain(host)
  const { data, error, isLoading } = useXCMMeta(relaySubdomain, {
    para_id: relaySubdomain === host ? undefined : chain?.chainConf.parachain?.id,
  })
  const metaInfo = unwrap(data)
  const startDate = dayjs().subtract(30, 'days').format('YYYY-MM-DD')
  const endDate = dayjs().subtract(1, 'days').format('YYYY-MM-DD')
  const chartConfig = {
    dataZoom: [],
    grid: {
      top: '30',
      left: '40',
      right: '20',
      bottom: '40',
      containLabel: false,
    },
  }

  if (isLoading) return <Loading />
  if (!metaInfo) return <Empty />

  return (
    <Boundary className="relative flex !p-0">
      <div className="pointer-events-none">
        <img className="absolute w-[152px] left-0 bottom-0" src={'/website/assets/xcm/bg1.png'} />
        <img className="absolute w-[381px] left-[424px]" src={'/website/assets/xcm/bg2.png'} />
        <img className="absolute w-[220px] right-0 bottom-0" src={'/website/assets/xcm/bg3.png'} />
      </div>
      <div className="flex-1">
        <GraphChart host={host} chain={chain}></GraphChart>
      </div>
      <div className="flex-1 my-7">
        <MetaInfo className="mb-7" metaInfo={metaInfo} chain={chain} host={host} />
        <div className="w-full pr-12">
          <Text block bold className="mb-4 break-all !text-base">
            XCM 30-day Statistics
          </Text>
          <TabGroup>
            <TabList>
              <Tab>Transfer</Tab>
              <Tab>Message</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <XCMMessage
                  host={host}
                  type={'transfer'}
                  args={{
                    end: endDate,
                    start: startDate,
                  }}
                  style={{ height: '280px', backgroundColor: 'white' }}
                  config={chartConfig}
                  chain={chain}
                />
              </TabPanel>
              <TabPanel>
                <XCMMessage
                  host={host}
                  args={{
                    end: endDate,
                    start: startDate,
                  }}
                  style={{ height: '280px', backgroundColor: 'white' }}
                  config={chartConfig}
                  chain={chain}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </Boundary>
  )
}

export default Component
