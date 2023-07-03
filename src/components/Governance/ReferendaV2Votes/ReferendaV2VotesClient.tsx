'use client'

import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { unwrap, useReferendaVotes } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { Button, LinkRouter } from '@/ui'
import { Empty } from '@/components/Empty'
import ReferendaVotes from './ReferendaV2Votes'
import { Loading } from '@/components/Loading'

interface Props extends BareProps, BareServerSideProps {
  host: string
  row?: number
  page?: number
  referendumIndex: number
}

const ReferendaV2VotesClient: React.FC<Props> = ({ host, page = 0, row = PAGE_ROW, referendumIndex, chain }) => {
  const { data, error, isLoading } = useReferendaVotes(host, {
    page,
    row,
    referendum_index: referendumIndex,
  })
  const votes = unwrap(data)

  if (isLoading) return <Loading />
  if (!votes) return <Empty />

  return (
    <div>
      <ReferendaVotes votes={votes?.list || []} chain={chain} />
      {votes.count - row > 0 && (
        <LinkRouter href={`/referenda_v2_vote/${referendumIndex}`}>
          <Button outline className="mt-4">
            View Other {votes.count - row} Voting Details
          </Button>
        </LinkRouter>
      )}
    </div>
  )
}

export default ReferendaV2VotesClient
