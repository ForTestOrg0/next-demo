import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { unwrap, useStakingWaiting } from '@/utils/api'
import { ValidatorList } from './ValidatorList'
import { ValidatorListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseStakingWaiting = Parameters<typeof useStakingWaiting>[1]
interface Props extends BareProps, BareServerSideProps {
  hostname: string
  args: UseStakingWaiting
  viewAllQuery?: Record<string, string>
  page: number
  row: number
}

export const WaitingListClient: React.FC<Props> = ({ chain, hostname, args, viewAllQuery, row, page }) => {
  const { data, error, isLoading } = useStakingWaiting(hostname, args)
  const validators = unwrap(data)
  const start = row * (page - 1)
  const end = row * page

  if (isLoading) return <Loading />
  if (!validators) return <Empty />

  return (
    <>
      <ValidatorList
        validators={validators.list.slice(start, end)}
        chain={chain}
        disableColumn={{
          grandpaVote: true,
          rewardPoint: true,
          latestMining: true,
        }}
      />
      {validators.count - row > 0 && (
        <ValidatorListLink query={{ ...viewAllQuery }}>
          <Button outline className="mt-4">
            View Other {validators.count - row} Validator
          </Button>
        </ValidatorListLink>
      )}
    </>
  )
}
