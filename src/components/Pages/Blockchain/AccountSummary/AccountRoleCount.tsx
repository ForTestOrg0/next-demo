import React, { useMemo } from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Flex, Text } from '@/ui'
import { unwrap } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
import _ from 'lodash'
import { formatNumber } from '@/utils/formatBalance'
import { AccountListLink } from '@/components/Links'
import { useAccountStatistics } from '@/utils/api/account'
import { AccountStatisticsRole } from '@/types/api'
import {
  CandidatesIcon,
  CouncilIcon,
  InvulnerblesIcon,
  MultisigMemberIcon,
  NominatorIcon,
  ParachainIcon,
  ProxiedIcon,
  ProxyIcon,
  TechnicalCommIcon,
  ValidatorIcon,
} from '@/ui/Svg'

interface Props extends BareProps, BareServerSideProps {
  host: string
}

const Component: React.FC<Props> = ({ children, className, host, chain }) => {
  const { data, error, isLoading } = useAccountStatistics(host, {
    type: 'role',
  })
  const roleStatistics = unwrap(data) as AccountStatisticsRole[] | null

  const roleConfig = useMemo(() => {
    const iconCls = 'w-7 duration-500 text-sub-b2 group-hover:text-sub-black'
    return [
      {
        key: 'module',
        name: 'System',
        icon: <InvulnerblesIcon className={iconCls} />,
      },
      {
        key: 'onChainIdentity',
        name: 'On-chain Identity',
        icon: <ParachainIcon className={iconCls} />,
      },
      {
        key: 'validator',
        name: 'Validator',
        icon: <ValidatorIcon className={iconCls} />,
      },
      {
        key: 'nominator',
        name: 'Nominator',
        icon: <NominatorIcon className={iconCls} />,
      },
      {
        key: 'councilMember',
        name: 'Council Member',
        icon: <CouncilIcon className={iconCls} />,
      },
      {
        key: 'techcomm',
        name: 'Technical Committee',
        icon: <TechnicalCommIcon className={iconCls} />,
      },
      {
        key: 'proxy',
        name: 'Proxy',
        icon: <ProxiedIcon className={iconCls} />,
      },
      {
        key: 'proxies',
        name: 'Proxied',
        icon: <ProxyIcon className={iconCls} />,
      },
      {
        key: 'multisig',
        name: 'Multisig',
        icon: <CandidatesIcon className={iconCls} />,
      },
      {
        key: 'multisigMember',
        name: 'Multisig Member',
        icon: <MultisigMemberIcon className={iconCls} />,
      },
    ]
  }, [])

  if (isLoading) return <Loading />
  if (!roleStatistics) return <Empty />

  return (
    <div className={clsx('grid', className)}>
      <div className="grid grid-cols-5 gap-y-4">
        {roleConfig.map((role) => {
          const roleData = _.findLast(roleStatistics, { role: role.key })
          if (!roleData) return null
          return (
            <AccountListLink key={role.key} query={{ role: role.key }}>
              <Flex className="group">
                {role.icon}
                <div className="ml-6">
                  <Text className="text-xs text-sub-b2 mb-1" block>
                    {role.name}
                  </Text>
                  <Text bold block className="text-sub-black">
                    {formatNumber(roleData.count)}
                  </Text>
                </div>
              </Flex>
            </AccountListLink>
          )
        })}
      </div>
    </div>
  )
}

export default Component
