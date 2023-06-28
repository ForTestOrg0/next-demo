import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { unwrap, useStakingNominators } from '@/utils/api'
import { NominatorLink, ValidatorListLink } from '@/components/Links'
import { Button } from '@/ui'
import { NominatorsList } from './NominatorsList'

type UseStakingNominators = Parameters<typeof useStakingNominators>[1]
interface Props extends BareProps, BareServerSideProps {
  hostname: string
  args: UseStakingNominators
  nominatorBond: string
  validatorBond: string
  viewAllQuery?: Record<string, string>
}

export const NominatorsListClient: React.FC<Props> = ({ chain, hostname, args, viewAllQuery, nominatorBond, validatorBond }) => {
  const { data, error, isLoading } = useStakingNominators(hostname, args)
  const nominators = unwrap(data)

  if (isLoading) return <Loading />
  if (!nominators) return <Empty />

  return (
    <>
      <NominatorsList nominators={nominators.list} chain={chain} nominatorBond={nominatorBond} validatorBond={validatorBond} />
      {nominators.count - args.row > 0 && (
        <NominatorLink query={{ ...viewAllQuery }}>
          <Button outline className="mt-4">
            View Other {nominators.count - args.row} Nominator
          </Button>
        </NominatorLink>
      )}
    </>
  )
}
