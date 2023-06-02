import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { useParachainMeta } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import MetaInfo from './MetaInfo'

interface Props extends BareProps, BareServerSideProps {
  host: string
}
const Component: React.FC<Props> = ({ children, host, className, chain }) => {
  const { data, error, isLoading } = useParachainMeta(host)
  const metaInfo = unwrap(data)

  if (isLoading) return <Loading />
  if (!metaInfo) return <Empty />

  return <MetaInfo metaInfo={metaInfo} chain={chain} />
}

export default Component
