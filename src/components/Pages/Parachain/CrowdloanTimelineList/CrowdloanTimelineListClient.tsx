import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { useParachainFundTimeline } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { CrowdloanTimelineList } from './CrowdloanTimelineList'

type UseParachainFundTimelineArgs = Parameters<typeof useParachainFundTimeline>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  args: UseParachainFundTimelineArgs
  viewAllQuery?: Record<string, string>
}

const Component: React.FC<Props> = ({ children, host, className, chain, style, args, viewAllQuery }) => {
  const { data, error, isLoading } = useParachainFundTimeline(host, args)
  const timelines = unwrap(data)

  if (isLoading) return <Loading />
  if (!timelines) return <Empty />

  return (
    <>
      <CrowdloanTimelineList timelines={timelines.list} chain={chain} />
    </>
  )
}

export default Component
