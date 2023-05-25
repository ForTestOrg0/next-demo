'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { unwrap, useDemocracySeconded } from '@/utils/api'
import { PAGE_ROW, TAB_ROW } from '@/config/constants'
import ProposalSeconds from './ProposalSeconds'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'

interface Props extends BareProps {
  host: string
  row?: number
  page?: number
  proposalId: number
}

const ProposalSecondsClient: React.FC<Props> = ({ host, page = 0, row = PAGE_ROW, children, proposalId, className }) => {
  const { data, error, isLoading } = useDemocracySeconded(host, {
    page,
    row,
    proposal_id: proposalId,
  })
  const seconds = unwrap(data)

  if (isLoading) return <Loading />
  if (!seconds) return <Empty />

  return <ProposalSeconds total={seconds?.count} start={(page - 1) * row} seconds={seconds?.list || []} />
}

export default ProposalSecondsClient
