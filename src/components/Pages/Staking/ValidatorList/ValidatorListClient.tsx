import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { unwrap, useStakingValidators } from '@/utils/api'
import { ValidatorList } from './ValidatorList'
import { ValidatorListLink } from '@/components/Links'
import { Button } from '@/ui'
import { TAB_ROW } from '@/config/constants'

type UseStakingValidators = Parameters<typeof useStakingValidators>[1]
interface Props extends BareProps, BareServerSideProps {
  hostname: string
  args: UseStakingValidators
  viewAllQuery?: Record<string, string>
  // page: number
  // row: number
}

export const ValidatorListClient: React.FC<Props> = ({ chain, hostname, args, viewAllQuery }) => {
  const { data, error, isLoading } = useStakingValidators(hostname, args)
  const validators = unwrap(data)

  if (isLoading) return <Loading />
  if (!validators) return <Empty />

  return (
    <>
      <ValidatorList validators={validators.list} chain={chain} />
      {validators.count - (args?.row || TAB_ROW) > 0 && (
        <ValidatorListLink query={{ ...viewAllQuery }}>
          <Button outline className="mt-4">
            View Other {validators.count - (args.row || TAB_ROW)} Validator
          </Button>
        </ValidatorListLink>
      )}
    </>
  )
}
