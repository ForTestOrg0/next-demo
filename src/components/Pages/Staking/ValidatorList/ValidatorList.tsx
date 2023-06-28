import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { BlockLink, NominatorLink } from '@/components/Links'
import { Validator } from '@/types/api'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { ValidatorCommission } from '@/components/ValidatorCommission'

interface Props extends BareProps, BareServerSideProps {
  validators: Validator[]
  disableColumn?: ValidatorListDisableColumn
}

export type ValidatorListDisableColumn = Partial<Record<'grandpaVote' | 'rewardPoint' | 'latestMining', boolean>>

export const ValidatorList: React.FC<Props> = ({ validators, chain, disableColumn }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Validator</Th>
          <Th>Self Bonded</Th>
          <Th>Total Bonded</Th>
          <Th>Nominator</Th>
          <Th>Commission</Th>
          {!disableColumn?.grandpaVote && <Th>Grandpa Vote</Th>}
          {!disableColumn?.rewardPoint && <Th>Reward Point</Th>}
          {!disableColumn?.latestMining && <Th>Latest Mining</Th>}
        </Tr>

        {validators?.map((item, index) => {
          return (
            <Tr key={item.stash_account_display.address}>
              <Td>
                <Identicon account={item.stash_account_display} type="validator" />
              </Td>
              <Td>{item.bonded_owner ? <Balance value={item.bonded_owner} token={chain.nativeTokenConf} /> : <Text>-</Text>}</Td>
              <Td>{item.bonded_total ? <Balance value={item.bonded_total} token={chain.nativeTokenConf} /> : <Text>-</Text>}</Td>
              <Td>
                <NominatorLink query={{ address: item.stash_account_display.address }}>{item.count_nominators}</NominatorLink>
              </Td>
              <Td>
                <ValidatorCommission pref={item.validator_prefs_value} />
              </Td>
              {!disableColumn?.grandpaVote && (
                <Td>
                  <Text>{item.grandpa_vote}</Text>
                </Td>
              )}
              {!disableColumn?.rewardPoint && (
                <Td>
                  <Text>{item.reward_point}</Text>
                </Td>
              )}
              {!disableColumn?.latestMining && (
                <Td>
                  <BlockLink blockNumber={item.latest_mining} />
                </Td>
              )}
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
