import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { unwrap, useStakingValidators } from '@/utils/api'
import { ValidatorList } from './ValidatorList'
import { Boundary, Flex, Pagination } from '@/ui'

type UseStakingValidators = Parameters<typeof useStakingValidators>[1]
interface Props extends BareProps, BareServerSideProps {
  hostname: string
  args: UseStakingValidators
  viewAllQuery?: Record<string, string>
  page: number
  row: number
}

export const ValidatorListClientWithPagination: React.FC<Props> = ({ chain, hostname, args, viewAllQuery, page, row }) => {
  const { data, error, isLoading } = useStakingValidators(hostname, args)
  const validators = unwrap(data)
  const count = validators?.count || validators?.list.length || 0
  const start = row * (page - 1)
  const end = row * page

  if (isLoading) return <Loading />
  if (!validators) return <Empty />

  return (
    <Boundary>
      <ValidatorList validators={validators.list.slice(start, end)} chain={chain} />
      <Flex className="mt-5 flex-row-reverse">
        <Pagination total={count} pageSize={row} current={page} urlRender={(_page) => `/validator_list?status=active&page=${_page}`} />
      </Flex>
    </Boundary>
  )
}
