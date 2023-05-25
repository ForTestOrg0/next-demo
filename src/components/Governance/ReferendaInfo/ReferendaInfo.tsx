import React from 'react'
import { BareProps } from '@/types/page'
import { TableCol, TdCol, TrCol } from '@/ui'
import { BlockLink } from '@/components/Links'
import { DemocracyReferendumDetail } from '@/types/api'
import { VotePredict } from '@/components/VoteThreshold'

interface Props extends BareProps {
  referenda: DemocracyReferendumDetail
}

const ReferendaInfo: React.FC<Props> = ({ referenda }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold w-44">Created at Block</TdCol>
          <TdCol>
            <BlockLink blockNumber={referenda?.created_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Updated at Block</TdCol>
          <TdCol>
            <BlockLink blockNumber={referenda?.updated_block || referenda?.created_block} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Status</TdCol>
          <TdCol>{referenda?.status}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Delay</TdCol>
          <TdCol>{referenda?.delay}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">End</TdCol>
          <TdCol>{referenda?.end}</TdCol>
        </TrCol>

        <TrCol>
          <TdCol className="font-semibold">Vote Threshold</TdCol>
          <TdCol>{referenda?.vote_threshold}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Outcome Prediction</TdCol>
          <TdCol>
            <VotePredict
              ayeAmount={referenda.aye_amount}
              ayeWithoutConviction={referenda.aye_without_conviction}
              nayAmount={referenda.nay_amount}
              nayWithoutConviction={referenda.nay_without_conviction}
              turnout={referenda.turnout}
              threshold={referenda.vote_threshold}
            />
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default ReferendaInfo
