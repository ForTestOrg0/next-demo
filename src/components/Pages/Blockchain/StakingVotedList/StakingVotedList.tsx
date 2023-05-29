import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { NominatorLink } from '@/components/Links'
import { StakingVoted } from '@/types/api'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { ValidatorCommission } from '@/components/ValidatorCommission'
import BigNumber from 'bignumber.js'
import { MyShare } from './MyShare'

interface Props extends BareProps, BareServerSideProps {
  stakingVoted: StakingVoted[]
}

const Page: React.FC<Props> = ({ stakingVoted, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Validator</Th>
          <Th>Validator Bonded</Th>
          <Th>Total Bonded</Th>
          <Th>Nominator</Th>
          <Th>Commission</Th>
          <Th>My Share</Th>
        </Tr>
        {stakingVoted.map((validator) => {
          const bondTotal = new BigNumber(validator.bonded_nominators).plus(validator.bonded_owner).toString()
          return (
            <Tr key={`${validator.session_key}${validator.stash_account_display.address}`}>
              <Td>
                <Identicon account={validator.stash_account_display} />
              </Td>
              <Td>
                <Balance value={validator.bonded_owner} token={chain.nativeTokenConf} />
              </Td>
              <Td>
                <Balance value={bondTotal} token={chain.nativeTokenConf} />
              </Td>
              <Td>
                <NominatorLink query={{ address: validator.stash_account_display.address }}>{validator.count_nominators}</NominatorLink>
              </Td>
              <Td>
                <ValidatorCommission pref={validator.validator_prefs_value} />
              </Td>
              <Td>
                <MyShare myBond={validator.bonded} nominatorBond={validator.bonded_nominators} validatorBond={validator.bonded_owner} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
