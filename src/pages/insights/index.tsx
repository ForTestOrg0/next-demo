import { PageContent, Container, Text, Flex } from '@/ui'
import React, { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import style from './insights.module.scss'
import clsx from 'clsx'
import { InsightsAccount, InsightsBasic, InsightsReferenda, InsightsStaking } from '@/components/Pages/Tools/Insights'
import { SimpleFooter } from '@/components/Footer'
import { GetDataStatisticsProps, getDataStatistics } from '@/utils/api'
import { TimeToAbbreviatedName } from '@/components/Time'

export const getServerSideProps: GetServerSideProps<
  { host: string; dataStatistics: GetDataStatisticsProps; start: string; end: string } & BareServerSideProps
> = async (context) => {
  const host = context.req.headers.host || ''
  const start = context.query.start as string
  const end = context.query.end as string
  const chainProps = await getChainProps(context.req.headers.host)

  const dataStatistics = await getDataStatistics(host, {
    start,
    end,
  })

  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      chain: chainProps,
      dataStatistics: dataStatistics.data,
      start,
      end,
    },
  }
}

export default function Page({ host, chain, dataStatistics, start, end }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent className={clsx('flex-1 overflow-x-hidden relative')}>
      <Container className="flex-1 z-10">
        <Flex className="flex-1">
          <Flex className={clsx('items-center flex-1 justify-between px-5', style.box)}>
            <Flex className="items-center">
              <img src={`/chains/polkadot/logo-menu.png`} alt={chain.chainConf.name} />
              <Text className="!text-lg font-semibold ml-3">On-Chain Insights</Text>
            </Flex>
            <Text className="!text-lg font-semibold">
              <TimeToAbbreviatedName className="!text-lg" date={start} /> - <TimeToAbbreviatedName className="!text-lg" date={end} />
            </Text>
          </Flex>
          <div className={clsx('ml-3 w-20 h-20 bg-sub-black', style.box)}>
            <img src="/website/qrcode.png" alt="https://subscan.io" width="80" height="80" />
          </div>
        </Flex>
        <Flex className="mt-5 space-x-5">
          <div className="flex flex-1">
            <InsightsBasic
              host={host}
              dataStatistics={dataStatistics}
              args={{
                start,
                end,
              }}
              chain={chain}
            />
          </div>

          <div className="flex basis-[380px]">
            <InsightsStaking chain={chain} />
          </div>
        </Flex>

        <Flex className="mt-5 space-x-5">
          <div className="flex w-[240px] h-[355px]">
            <InsightsReferenda chain={chain} dataStatistics={dataStatistics} />
          </div>

          <div className="flex flex-1">
            <InsightsAccount
              host={host}
              dataStatistics={dataStatistics}
              args={{
                type: 'assets',
              }}
              chain={chain}
            />
          </div>
        </Flex>
      </Container>
      <div className="fixed h-full w-full overflow-hidden top-0">
        <div className={clsx(style.bg, 'rounded-full absolute w-[600px] h-[600px] top-[-200px] right-[-200px]')}></div>
        <div className={clsx(style.bg, 'rounded-full absolute w-[630px] h-[630px] bottom-[-300px] right-[200px]')}></div>
        <div className={clsx(style.bg, 'rounded-full absolute w-[340px] h-[340px] left-[-130px] top-[300px]')}></div>
      </div>
    </PageContent>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className="h-screen flex flex-col">
      {page}
      <SimpleFooter className="z-10" />
    </div>
  )
}
