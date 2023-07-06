import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import TabBox from '../TabBox'
import { Flex } from '@/ui'
import { CardX } from '../Card'
import { Balance } from '@/components/Balance'
import { TokenIcon, EraIcon, VoterIcon } from '@/ui/Svg'
import { GetDataStatisticsProps } from '@/utils/api'
import { formatNumber } from '@/utils/formatBalance'
import { Empty } from '@/components/Empty'

interface Props extends BareProps, BareServerSideProps {
  dataStatistics: GetDataStatisticsProps
}

export const InsightsReferenda: React.FC<Props> = ({ chain, dataStatistics }) => {
  if (!dataStatistics) return <Empty />
  return (
    <TabBox title="Referenda" boxClassName="flex space-x-3 flex-1">
      <Flex className="flex-col space-y-3 flex-1 flex-grow-1">
        <CardX
          className="flex-1 items-center"
          icon={<EraIcon className="text-sub-white-light" width={22} />}
          title="Active Proposal"
          value={formatNumber(dataStatistics.referendum_active_count)}
        />
        <CardX
          className="flex-1 items-center"
          icon={<VoterIcon className="text-sub-white-light" width={18} />}
          title="Voter"
          value={formatNumber(dataStatistics.referendum_vote_account_count)}
        />
        <CardX
          className="flex-1 items-center"
          icon={<TokenIcon className="text-sub-white-light" width={18} />}
          title="Vote Value"
          value={<Balance value={dataStatistics.referendum_vote_amount} token={chain.nativeTokenConf} />}
        />
      </Flex>
    </TabBox>
  )
}
