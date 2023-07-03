import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { TableCol, TdCol, TrCol, Text } from '@/ui'
import { ReferendaReferendumV2Detail } from '@/types/api'
import { VotePredict } from '@/components/VoteThreshold'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { ReferendaV2Status } from './ReferendaV2Status'
import { toBigCamel } from '@/utils/formatText'
import { ExtrinsicCall, ExtrinsicModule } from '@/components/ExtrinsicModuleCall'
import { getFullDisplayBalance } from '@/utils/formatBalance'
import BigNumber from 'bignumber.js'
import { Parameters } from '@/components/Parameters'

interface Props extends BareProps, BareServerSideProps {
  referendum: ReferendaReferendumV2Detail
}

const ReferendaV2Info: React.FC<Props> = ({ referendum, chain }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold w-44">Proposed Hash</TdCol>
          <TdCol>
            <Text>{referendum.pre_image?.hash}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Proposer</TdCol>
          <TdCol>
            <Identicon account={referendum.account} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Proposer Reserved</TdCol>
          <TdCol>
            <Balance value={referendum.deposit_balance} token={chain.nativeTokenConf} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Decision Makers</TdCol>
          <TdCol>
            <Identicon account={referendum.decision_deposit_account} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Status</TdCol>
          <TdCol>
            <ReferendaV2Status status={referendum?.status} />
          </TdCol>
        </TrCol>

        <TrCol>
          <TdCol className="font-semibold">Actual Module</TdCol>
          <TdCol>
            <ExtrinsicModule module={referendum?.pre_image.call_module} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Actual Call</TdCol>
          <TdCol>
            <ExtrinsicCall call={referendum?.pre_image.call_name} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Origin</TdCol>
          <TdCol>
            <Text>{toBigCamel(referendum?.origins)}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Voting Statistics</TdCol>
          <TdCol>
            <VotePredict
              ayeAmount={getFullDisplayBalance(new BigNumber(referendum.ayes_amount), chain.nativeTokenConf.decimals).toString()}
              nayAmount={getFullDisplayBalance(new BigNumber(referendum.nays_amount), chain.nativeTokenConf.decimals).toString()}
              symbol={chain.nativeTokenConf.symbol}
            />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold">Parameters</TdCol>
          <TdCol>
            <Parameters value={referendum.pre_image.params} />
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default ReferendaV2Info
