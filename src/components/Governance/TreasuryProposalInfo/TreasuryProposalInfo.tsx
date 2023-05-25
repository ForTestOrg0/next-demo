import React from 'react'
import { BareProps } from '@/types/page'
import { TableCol, TdCol, TrCol, Text } from '@/ui'
import { BlockLink } from '@/components/Links'
import { TreasuryProposalDetail } from '@/types/api'
import { Identicon } from '@/components/Identicon'

interface Props extends BareProps {
  proposal: TreasuryProposalDetail
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
          <TdCol className="font-semibold whitespace-nowrap">Proposed by</TdCol>
          <TdCol>
            <Identicon account={proposal?.proposer} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Beneficiary</TdCol>
          <TdCol>
            <Identicon account={proposal?.beneficiary} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Reward</TdCol>
          <TdCol>
            <Text>{proposal.reward}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Status</TdCol>
          <TdCol>{proposal?.status}</TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default Page
