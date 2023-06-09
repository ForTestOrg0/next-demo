import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { useParachainFundTimeline, useParachainInfo } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { ParachainData } from './ParachainData'

type UseParachainInfoArgs = Parameters<typeof useParachainInfo>[1]
interface Props extends BareProps {
  host: string
  args: UseParachainInfoArgs
}

const Component: React.FC<Props> = ({ host, args }) => {
  const { data, isLoading } = useParachainInfo(host, args)
  const chainInfo = unwrap(data)

  if (isLoading) return <Loading />
  if (!chainInfo || !chainInfo.chains || chainInfo.chains.length === 0) return <Empty />

  return (
    <>
      <ParachainData chainInfo={chainInfo.chains[0]} />
    </>
  )
}

export default Component
