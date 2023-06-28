import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { unwrap, useStakingEraStat } from '@/utils/api'
import { EraLink } from '@/components/Links'
import { Button } from '@/ui'
import { EraList } from './EraList'

type UseStakingEraStat = Parameters<typeof useStakingEraStat>[1]
interface Props extends BareProps, BareServerSideProps {
  hostname: string
  args: UseStakingEraStat
  viewAllQuery?: Record<string, string>
}

export const EraListClient: React.FC<Props> = ({ chain, hostname, args, viewAllQuery }) => {
  const { data, error, isLoading } = useStakingEraStat(hostname, args)
  const era = unwrap(data)

  if (isLoading) return <Loading />
  if (!era) return <Empty />

  return (
    <>
      <EraList eraStat={era.list} chain={chain} />
      {era.count - args.row > 0 && (
        <EraLink query={{ ...viewAllQuery }}>
          <Button outline className="mt-4">
            View Other {era.count - args.row} Era
          </Button>
        </EraLink>
      )}
    </>
  )
}
