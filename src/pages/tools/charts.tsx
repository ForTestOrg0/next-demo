import React, { useState } from 'react'
import clsx from 'clsx'
import { parseTimeToUtc } from '@/utils/time'
import dayjs from 'dayjs'
import { Boundary, PageContent, Container, Flex, Text, Input, Menu, MenuButton, MenuItem, MenuItems, Button, Link } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { ArrowDownFillingIcon } from '@/ui/Svg'
import { trimSpecialChar } from '@/utils/formatText'
import { getSubdomainFromHeaders } from '@/utils/url'
import { Transfer, Extrinsic, Holder, Fee, BlockTime, TreasuryExpense, TreasuryIncome, Token, TokenBond } from '@/components/Pages/Tools/Charts'

export type OutputType = {
  name: string
  isPublicKey: boolean
  value: string
}

export const getServerSideProps: GetServerSideProps<{ host: string; page: number } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const chainProps = await getChainProps(subdomain)
  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ host, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  let startDate = '2020-07-18'
  if (chain.metadata.bootTime) {
    const firstBlockDate = parseTimeToUtc(chain.metadata.bootTime, 'YYYY-MM-DD', false)
    if (dayjs(firstBlockDate).isAfter(startDate)) {
      startDate = firstBlockDate as string
    }
  }
  const endDate = dayjs().subtract(1, 'days').format('YYYY-MM-DD')
  let unbondDuration = 13
  if (chain.metadata.unbondDuration) {
    unbondDuration = (chain.metadata.unbondDuration * (chain.metadata.avgBlockTime || 6)) / (60 * 60 * 24)
  }
  const unbondEndDate = dayjs().add(unbondDuration, 'days').format('YYYY-MM-DD')
  const [currentChart, setCurrentChart] = useState('transfer')
  const chartList = [
    {
      name: 'Daily Transfer Amount',
      value: 'transfer',
    },
    {
      name: 'Daily Signed Extrinsic Number',
      value: 'extrinsic',
    },
    {
      name: 'Daily Holder',
      value: 'holder',
    },
    {
      name: 'Daily Fees Used',
      value: 'fee',
    },
    {
      name: 'Daily Average Block Time',
      value: 'block_time',
    },
    {
      name: 'Treasury Available Income',
      value: 'treasury_income',
    },
    {
      name: 'Treasury Expenses',
      value: 'treasury_expense',
    },
    {
      name: 'Daily Unbonding Schedule',
      value: 'token',
    },
    {
      name: 'Daily Bond Value',
      value: 'token_bond',
    },
  ]
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Charts
        </Text>
        <Flex className="gap-x-6">
          <div className="w-72">
            <Boundary className="h-[572px] overflow-auto lg:py-5">
              <div className="list">
                {chartList.map((item) => (
                  <div
                    key={item.value}
                    className={clsx('cursor-pointer mb-5 flex items-center group', { selected: item.value === currentChart })}
                    onClick={() => {
                      setCurrentChart(item.value)
                    }}>
                    <span className="w-1 h-4 mr-2 transition-all [.group.selected_&]:bg-sub-network"></span>
                    <Text className="[.group.selected_&]:text-sub-network">{item.name}</Text>
                  </div>
                ))}
              </div>
            </Boundary>
          </div>
          <div className="flex-1">
            <Boundary className="h-full lg:py-5">
              <div className="network-list">
                {currentChart === 'transfer' && (
                  <Transfer
                    host={host}
                    args={{
                      category: 'transfer',
                      end: '2023-06-27',
                      format: 'day',
                      start: '2020-07-18',
                    }}
                    chain={chain}
                  />
                )}
                {currentChart === 'extrinsic' && (
                  <Extrinsic
                    host={host}
                    args={{
                      category: 'extrinsic',
                      end: endDate,
                      format: 'day',
                      start: startDate,
                    }}
                    chain={chain}
                  />
                )}
                {currentChart === 'holder' && (
                  <Holder
                    host={host}
                    args={{
                      category: 'AccountHolderTotal',
                      end: endDate,
                      format: 'day',
                      start: startDate,
                    }}
                    chain={chain}
                  />
                )}
                {currentChart === 'fee' && (
                  <Fee
                    host={host}
                    args={{
                      category: 'Fee',
                      end: endDate,
                      format: 'day',
                      start: startDate,
                    }}
                    chain={chain}
                  />
                )}
                {currentChart === 'block_time' && (
                  <BlockTime
                    host={host}
                    args={{
                      category: 'AvgBlockTime',
                      end: endDate,
                      format: 'day',
                      start: startDate,
                    }}
                    chain={chain}
                  />
                )}
                {currentChart === 'treasury_income' && (
                  <TreasuryIncome
                    host={host}
                    args={{
                      category: 'Treasury',
                      end: endDate,
                      format: 'day',
                      start: startDate,
                    }}
                    chain={chain}
                  />
                )}
                {currentChart === 'treasury_expense' && (
                  <TreasuryExpense
                    host={host}
                    args={{
                      category: 'TreasurySpend',
                      end: endDate,
                      format: 'day',
                      start: startDate,
                    }}
                    chain={chain}
                  />
                )}
                {currentChart === 'token' && (
                  <Token
                    host={host}
                    args={{
                      category: 'Unbond',
                      end: unbondEndDate,
                      format: 'day',
                      start: startDate,
                    }}
                    chain={chain}
                  />
                )}
                {currentChart === 'token_bond' && (
                  <TokenBond
                    host={host}
                    args={{
                      category: 'Bonded',
                      end: endDate,
                      format: 'day',
                      start: startDate,
                    }}
                    chain={chain}
                  />
                )}
              </div>
            </Boundary>
          </div>
        </Flex>
      </Container>
    </PageContent>
  )
}
