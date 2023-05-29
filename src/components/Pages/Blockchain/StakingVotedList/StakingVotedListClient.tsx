import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useStakingVoted } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import StakingVotedList from './StakingVotedList'

type UseTransfersArgs = Parameters<typeof useStakingVoted>[1]
interface Props extends BareProps, BareServerSideProps, UseTransfersArgs {
  host: string
}

const Page: React.FC<Props> = ({ host, chain, ...props }) => {
  const { data, error, isLoading } = useStakingVoted(host, {
    ...props,
  })
  const voted = unwrap(data)?.list

  if (isLoading) return <Loading />
  if (!voted) return <Empty />
  return <StakingVotedList stakingVoted={voted} chain={chain} />
}

export default Page
