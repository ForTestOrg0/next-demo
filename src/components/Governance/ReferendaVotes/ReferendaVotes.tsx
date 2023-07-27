import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { Identicon } from '@/components/Identicon'
import { ExtrinsicLink } from '@/components/Links'
import { DemocracyVote } from '@/types/api'
import { Time } from '@/components/Time'
import { ReplyStatus, ReplyV2Status } from '@/components/Status'
import { Balance } from '@/components/Balance'
import { getBalanceAmount } from '@/utils/formatBalance'
import BigNumber from 'bignumber.js'

interface Props extends BareProps, BareServerSideProps {
  votes: DemocracyVote[]
}

const ReferendaVotes: React.FC<Props> = ({ votes, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Extrinsic ID</Th>
          <Th>Account</Th>
          <Th>Delegate to</Th>
          <Th>Conviction</Th>
          <Th>Value</Th>
          <Th>Effective Votes</Th>
          <Th>Time</Th>
          <Th>Voted</Th>
        </Tr>

        {votes?.map((item, index) => {
          return (
            <Tr key={item.extrinsic_index}>
              <Td>
                <ExtrinsicLink extrinsicIndex={item.extrinsic_index} />
              </Td>
              <Td>
                <Identicon account={item.account} />
              </Td>
              <Td>
                <Identicon account={item.delegate_account} />
              </Td>
              <Td>
                <Text>{item.conviction}</Text>
              </Td>
              <Td>
                <Balance value={item.amount} token={chain?.nativeTokenConf} />
              </Td>
              <Td>
                <Text>{getBalanceAmount(new BigNumber(item.amount), chain.nativeTokenConf.decimals).times(item.conviction).toString()}</Text>
              </Td>
              <Td>
                <Time date={item.voting_time} />
              </Td>
              <Td>
                <ReplyStatus type={item.passed} valid={item.valid} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ReferendaVotes
