import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { TableCol, TdCol, TrCol, Text } from '@/ui'
import { Validator } from '@/types/api'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { ValidatorStatus } from './ValidatorStatus'
import BigNumber from 'bignumber.js'
import { ValidatorCommission } from '@/components/ValidatorCommission'
import { Parameters } from '@/components/Parameters'

interface Props extends BareProps, BareServerSideProps {
  validator: Validator
}

const Page: React.FC<Props> = ({ validator, chain }) => {
  const totalBond = new BigNumber(validator.bonded_owner).plus(validator.bonded_nominators).toString()

  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap w-60">Stash</TdCol>
          <TdCol>
            <Identicon account={validator.stash_account_display} />
          </TdCol>
        </TrCol>

        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Controller</TdCol>
          <TdCol>
            <Identicon account={validator.controller_account_display} />
          </TdCol>
        </TrCol>

        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Reward</TdCol>
          <TdCol>
            <Text>{validator.reward_account}</Text>
          </TdCol>
        </TrCol>

        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Self-Bonded</TdCol>
          <TdCol>
            <Balance value={validator.bonded_owner} token={chain.nativeTokenConf} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Status</TdCol>
          <TdCol>
            <ValidatorStatus status={validator.status} text={validator.status} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Total Bonded</TdCol>
          <TdCol>
            <Balance value={totalBond} token={chain.nativeTokenConf} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Nominator</TdCol>
          <TdCol>
            <Text>{validator.count_nominators}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Commission</TdCol>
          <TdCol>
            <ValidatorCommission pref={validator.validator_prefs_value} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Session Key</TdCol>
          <TdCol>
            <Parameters value={JSON.stringify(validator.session_key)} />
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default Page
