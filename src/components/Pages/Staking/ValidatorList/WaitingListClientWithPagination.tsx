import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { unwrap, useStakingWaiting } from '@/utils/api'
import { ValidatorList } from './ValidatorList'
import { Boundary, Flex, Pagination } from '@/ui'

type UseStakingWaiting = Parameters<typeof useStakingWaiting>[1]
interface Props extends BareProps, BareServerSideProps {
  hostname: string
  args: UseStakingWaiting
  viewAllQuery?: Record<string, string>
  page: number
  row: number
}

export const WaitingListClientWithPagination: React.FC<Props> = ({ chain, hostname, args, viewAllQuery, row, page }) => {
  const { data, error, isLoading } = useStakingWaiting(hostname, args)
  const validators = unwrap(data)
  const count = validators?.count || validators?.list.length || 0
  const start = row * (page - 1)
  const end = row * page

  if (isLoading) return <Loading />
  if (!validators) return <Empty />

  return (
    <Boundary>
      <ValidatorList
        validators={validators.list.slice(start, end)}
        chain={chain}
        disableColumn={{
          grandpaVote: true,
          rewardPoint: true,
          latestMining: true,
        }}
      />
      <Flex className="mt-5 flex-row-reverse">
        <Pagination total={count} pageSize={row} current={page} urlRender={(_page) => `/validator_list?status=waiting&page=${_page}`} />
      </Flex>
    </Boundary>
  )
}
