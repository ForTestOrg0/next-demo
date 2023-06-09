import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { ParachainAuctionWinner } from '@/types/api'
import { Flex, Text } from '@/ui'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { ParachainLink } from '@/components/Links'

interface Props extends BareProps, BareServerSideProps {
  winners: ParachainAuctionWinner[]
}

export const AuctionWinner: React.FC<Props> = ({ children, winners, chain, className }) => {
  return (
    <div className={clsx('flex', className)}>
      {!winners && <Text>-</Text>}
      {winners?.map((winner) => {
        const projectInfo = getParachainProjectInfoById(chain.chainConf.id as RelaychainName, winner.para_id) || DEFAULT_PARACHAIN
        return (
          <Flex key={winner.bidder_account}>
            <ParachainLink id={winner.para_id}>
              <Text>{winner.para_id}</Text>
              <Text className="ml-3">{projectInfo?.['Project Name']}</Text>
            </ParachainLink>
          </Flex>
        )
      })}
    </div>
  )
}
