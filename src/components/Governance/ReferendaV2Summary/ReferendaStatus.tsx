import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { ConfirmingReferendaIcon, IssuanceIcon, LockedIcon, VotingReferendaIcon } from '@/ui/Svg'
import { Flex, Text } from '@/ui'
import { ReferendaStatistics } from '@/types/api'
import { Percentage } from '@/components/Percentage'
import { Balance } from '@/components/Balance'

interface Props extends BareProps, BareServerSideProps {
  statistics: ReferendaStatistics
}

const Component: React.FC<Props> = ({ children, className, statistics, chain }) => {
  const iconCls = 'w-7 text-sub-b2 group-hover:text-sub-black transition'
  const data = [
    {
      icon: <LockedIcon className={iconCls} />,
      name: 'Referenda Locked',
      value: <Balance value={statistics.referendum_locked} token={chain.nativeTokenConf} />,
    },
    {
      icon: <VotingReferendaIcon className={iconCls} />,
      name: 'Voting Referenda',
      value: statistics.voting_total,
    },
    {
      icon: <IssuanceIcon className={iconCls} />,
      name: 'Referenda Participation',
      value: <Percentage numerator={statistics.referendum_participate} denominator={chain.nativeToken.total_issuance} />,
    },
    {
      icon: <ConfirmingReferendaIcon className={iconCls} />,
      name: 'Confirming Referenda',
      value: statistics.confirm_total,
    },
  ]

  return (
    <div className={clsx('grid grid-cols-2 gap-y-6', className)}>
      {data.map((item) => {
        return (
          <Flex key={item.name} className="flex-col items-center space-y-2 group">
            {item.icon}
            <Text small className="text-sub-b2">
              {item.name}
            </Text>
            <Text bold>{item.value}</Text>
          </Flex>
        )
      })}
    </div>
  )
}

export default Component
