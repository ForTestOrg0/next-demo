import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { useParachainTimeline } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import PLOTimeline from './PLOTimeline'

type UseParachainTimelineArgs = Parameters<typeof useParachainTimeline>[1]
interface Props extends BareProps {
  host: string
  args: UseParachainTimelineArgs
}

const Component: React.FC<Props> = ({ children, host, className, style, args }) => {
  const { data, error, isLoading } = useParachainTimeline(host, args)
  const timelines = unwrap(data)

  if (isLoading) return <Loading />
  if (!timelines) return <Empty />

  return <PLOTimeline timelines={timelines.list} />
}

export default Component
