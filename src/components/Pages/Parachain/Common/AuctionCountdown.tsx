import React, { useEffect, useState, useMemo } from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { GetParachainMetaProps } from '@/utils/api/parachain'
import { ParachainAuction } from '@/types/api'
import style from './AuctionCountdown.module.scss'
import { Flex, Text } from '@/ui'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { ParachainLink } from '@/components/Links'
import dayjs from 'dayjs'

interface Props extends BareProps, BareServerSideProps {
  currentAuction: ParachainAuction
  parachainMeta: GetParachainMetaProps
}

export const AuctionCountdown: React.FC<Props> = ({ children, parachainMeta, currentAuction, chain, className }) => {
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
    const seconds = ('' + Math.floor((countDown % (1000 * 60)) / 1000)).padStart(2, '0')
    return { days, hours, minutes, seconds }
  }
  let distance = 0
  let endBlock = currentAuction?.early_end_block
  if (currentAuction?.early_end_block) {
    endBlock = (parachainMeta.ending_period || 0) + currentAuction.early_end_block
    distance = (endBlock - chain.metadata.blockNum) * 6
  }
  const endTime = useMemo(() => {
    return dayjs().add(distance, 'seconds').valueOf()
  }, [distance])
  const countdown = useCountdown(endTime)
  const currentProgress = useMemo(() => {
    if (chain.metadata.blockNum > currentAuction.early_end_block) {
      return 37 + (((chain.metadata.blockNum - currentAuction.early_end_block) / (endBlock - currentAuction.early_end_block)) * 100 * 0.63 || 0)
    } else {
      return (
        ((chain.metadata.blockNum - currentAuction.start_block) / (currentAuction.early_end_block - currentAuction.start_block)) * 100 * 0.37 || 0
      )
    }
  }, [currentAuction, chain, endBlock])
  const cssVars = useMemo(() => {
    return {
      '--current-progress': currentProgress + '%',
      '--period-progress': '36%',
      '--dot-progress': Math.min(Math.max(currentProgress, 0), 99) + '%',
    }
  }, [currentProgress]) as React.CSSProperties
  return (
    <div className={clsx('grid rounded-lg bg-sub-network border-[#e7eaf3]', className)} style={cssVars}>
      <Flex className="m-7 justify-center">
        <Flex className="text-white items-center bg-[#ffffff33] py-2.5 px-8 rounded-[40px]">
          <Text bold className="ml-2.5 !text-2xl">
            In Auction
          </Text>
          <Flex className="px-24 items-center">
            <Text bold className="!text-5xl">
              {countdown.days}
            </Text>
            <Text className="ml-6 text-xl">days</Text>
            <Text bold className="ml-10 !text-5xl">
              {countdown.hours}
            </Text>
            <Text className="ml-6 text-xl">hrs</Text>
            <Text bold className="ml-10 !text-5xl">
              {countdown.minutes}
            </Text>
            <Text className="ml-6 text-xl">mins</Text>
            <Text bold className="ml-10 !text-5xl">
              {countdown.seconds}
            </Text>
            <Text className="ml-6 text-xl">secs</Text>
          </Flex>
        </Flex>
      </Flex>
      <div className="relative text-white mx-7 mb-7">
        <Flex className="justify-between">
          <Text small>Auction Starts</Text>
          <Text small className="absolute left-[var(--period-progress)]">
            Ending Period Starts
          </Text>
          <Text small>Bidding Ends</Text>
        </Flex>
        <div className="my-2.5 relative leading-none">
          <div className="w-full">
            <div className="h-2 bg-[#ffffff66] rounded-full relative">
              <div className="bg-white w-[var(--current-progress)] rounded-full absolute top-0 left-0 h-full"></div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'bg-sub-network w-4 h-4 rounded-[50%] border-white border-[3px] absolute top-[22px] left-[var(--period-progress)]',
            style.dot
          )}></div>
        <div className={clsx('bg-sub-network w-4 h-4 rounded-[50%] border-white border-[3px] absolute top-[22px] left-0', style.dot)}></div>
        <div className={clsx('bg-sub-network w-4 h-4 rounded-[50%] border-white border-[3px] absolute top-[22px] right-0', style.dot)}></div>
        <Flex className="justify-between">
          <Text small>{`Block: ${currentAuction.start_block}`}</Text>
          <Text small className="absolute left-[var(--period-progress)]">{`Block: ${currentAuction.early_end_block}`}</Text>
          <Text small>{`Block: ${endBlock}`}</Text>
        </Flex>
      </div>
    </div>
  )
}
