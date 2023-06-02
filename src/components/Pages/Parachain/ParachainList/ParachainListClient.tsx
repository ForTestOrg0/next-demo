import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { useParachainList } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import ParachainList, { ParachainListDisableColumn } from './ParachainList'
import { ParachainListLink } from '@/components/Links'
import { Button } from '@/ui'

interface Props extends BareProps, BareServerSideProps {
  host: string
  args: Parameters<typeof useParachainList>[1]
  disableColumn?: ParachainListDisableColumn
  viewAllQuery?: Record<string, string>
}
const Component: React.FC<Props> = ({ children, host, className, chain, args, disableColumn, viewAllQuery }) => {
  const { data, error, isLoading } = useParachainList(host, args)
  const parachains = unwrap(data)

  if (isLoading) return <Loading />
  if (!parachains) return <Empty />

  return (
    <>
      <ParachainList parachains={parachains?.chains} chain={chain} disableColumn={disableColumn} />
      {parachains.count - args.row > 0 && (
        <ParachainListLink query={{ status: 'parachain', ...viewAllQuery }}>
          <Button outline className="mt-4">
            View Other {parachains.count - args.row} Parachain
          </Button>
        </ParachainListLink>
      )}
    </>
  )
}

export default Component
