import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Button } from '@/ui'
import { useParachainFunds } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { CrowdloanLink } from '@/components/Links'
import CrowdloanList, { ParachainCrowdloadDisableColumn } from './CrowdloanList'

type UseParachainFundsArgs = Parameters<typeof useParachainFunds>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  args: UseParachainFundsArgs
  viewAllQuery?: Record<string, string>
  disableColumn?: ParachainCrowdloadDisableColumn
}

const Component: React.FC<Props> = ({ children, host, className, chain, style, args, viewAllQuery, disableColumn }) => {
  const { data, error, isLoading } = useParachainFunds(host, args)
  const funds = unwrap(data)

  if (isLoading) return <Loading />
  if (!funds) return <Empty />

  return (
    <>
      <CrowdloanList funds={funds.funds} chain={chain} disableColumn={disableColumn} />
      {funds.count - args.row > 0 && (
        <CrowdloanLink query={{ status: 'parachain', ...viewAllQuery }}>
          <Button outline className="mt-4">
            View Other {funds.count - args.row} Crowdloan
          </Button>
        </CrowdloanLink>
      )}
    </>
  )
}

export default Component
