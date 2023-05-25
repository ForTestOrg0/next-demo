import React from 'react'
import { BareProps } from '@/types/page'
import { TableCol, TdCol, TrCol } from '@/ui'
import { BlockLink } from '@/components/Links'
import { CouncilProposalDetail } from '@/types/api'
import { BaseVoteStatistics } from '@/components/VoteThreshold'
import { Identicon } from '@/components/Identicon'

interface Props extends BareProps {
  proposal: CouncilProposalDetail
}

const Page: React.FC<Props> = ({ proposal }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap w-44">Created at Block</TdCol>
          <TdCol>
            <BlockLink blockNumber={proposal?.created_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Updated at Block</TdCol>
          <TdCol>
            <BlockLink blockNumber={proposal?.updated_block || proposal?.created_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Motion Hash</TdCol>
          <TdCol>{proposal?.proposal_hash}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Proposer</TdCol>
          <TdCol>
            <Identicon account={proposal?.proposer} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Member Threshold</TdCol>
          <TdCol>{proposal?.member_count}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Vote Statistics</TdCol>
          <TdCol>
            <BaseVoteStatistics ayeAmount={proposal.aye_votes} nayAmount={proposal.nay_votes} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Status</TdCol>
          <TdCol>{proposal?.status}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Execution Result</TdCol>
          <TdCol>{proposal.executed_success.toString()}</TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default Page
