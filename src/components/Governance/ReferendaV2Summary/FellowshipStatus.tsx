import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { ActiveAccountsIcon, ConfirmingReferendaIcon, CouncilIcon, IssuanceIcon, LockedIcon, VotingReferendaIcon } from '@/ui/Svg'
import { Flex, Text } from '@/ui'
import { FellowshipStatistics } from '@/types/api'
import { AccountLink } from '@/components/Links'

interface Props extends BareProps, BareServerSideProps {
  statistics: FellowshipStatistics
}

const Component: React.FC<Props> = ({ children, className, statistics, chain }) => {
  const iconCls = 'w-7 text-sub-b2 group-hover:text-sub-black transition'
  const data = [
    {
      icon: <CouncilIcon className={iconCls} />,
      name: 'Fellowship Members',
      value: statistics.fellowship_members,
      link: (
        <AccountLink className="!text-sub-b2 !text-xs" query={{ role: 'fellowship' }}>
          Fellowship Members
        </AccountLink>
      ),
    },
    {
      icon: <VotingReferendaIcon className={iconCls} />,
      name: 'Voting Fellowship Referenda',
      value: statistics.voting_total,
    },
    {
      icon: <ActiveAccountsIcon className={iconCls} />,
      name: 'Active Members',
      value: statistics.active_fellowship_members,
    },
    {
      icon: <ConfirmingReferendaIcon className={iconCls} />,
      name: 'Confirming Fellowship Referenda',
      value: statistics.confirm_total,
    },
  ]

  return (
    <div className={clsx('grid grid-cols-2 gap-y-6', className)}>
      {data.map((item) => {
        return (
          <Flex key={item.name} className="flex-col items-center space-y-2 group">
            {item.icon}
            {item.link ? (
              item.link
            ) : (
              <Text small className="text-sub-b2">
                {item.name}
              </Text>
            )}
            <Text bold>{item.value}</Text>
          </Flex>
        )
      })}
    </div>
  )
}

export default Component
