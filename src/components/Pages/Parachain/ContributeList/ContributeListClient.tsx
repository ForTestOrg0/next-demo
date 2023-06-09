import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Button } from '@/ui'
import { useParachainContributes } from '@/utils/api/parachain'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import { CrowdloanContributesLink } from '@/components/Links'
import { ContributeList } from './ContributeList'

type UseParachainContributesArgs = Parameters<typeof useParachainContributes>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
  args: UseParachainContributesArgs
  viewAllQuery?: Record<string, string>
}

const Component: React.FC<Props> = ({ children, host, className, chain, style, args, viewAllQuery }) => {
  const { data, error, isLoading } = useParachainContributes(host, args)
  const contributes = unwrap(data)

  if (isLoading) return <Loading />
  if (!contributes) return <Empty />

  return (
    <>
      <ContributeList contributes={contributes.contributes} chain={chain} />
      {contributes.count - args.row > 0 && (
        <CrowdloanContributesLink query={{ fund_id: args.fund_id || '', ...viewAllQuery }}>
          <Button outline className="mt-4">
            View Other {contributes.count - args.row} Contributor
          </Button>
        </CrowdloanContributesLink>
      )}
    </>
  )
}

export default Component
