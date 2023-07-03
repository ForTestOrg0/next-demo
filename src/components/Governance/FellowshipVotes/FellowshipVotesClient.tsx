'use client'

import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useFellowshipVotes } from '@/utils/api'
import { TAB_ROW } from '@/config/constants'
import { Button, LinkRouter } from '@/ui'
import { Empty } from '@/components/Empty'
import { FellowshipVotes } from './FellowshipVotes'
import { Loading } from '@/components/Loading'

interface Props extends BareProps, BareServerSideProps {
  host: string
  row?: number
  page?: number
  referendumIndex: number
}

const FellowshipVotesClient: React.FC<Props> = ({ host, page = 0, row = TAB_ROW, referendumIndex, chain }) => {
  const { data, error, isLoading } = useFellowshipVotes(host, {
    page,
    row,
    referendum_index: referendumIndex,
  })
  const votes = unwrap(data)

  if (isLoading) return <Loading />
  if (!votes) return <Empty />

  return (
    <div>
      <FellowshipVotes votes={votes?.list || []} chain={chain} />
      {votes.count - row > 0 && (
        <LinkRouter href={`/fellowship_vote/${referendumIndex}`}>
          <Button outline className="mt-4">
            View Other {votes.count - row} Voting Details
          </Button>
        </LinkRouter>
      )}
    </div>
  )
}

export default FellowshipVotesClient
