import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { Nominator } from '@/types/api'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { MyShare } from '../../Blockchain/StakingVotedList/MyShare'

interface Props extends BareProps, BareServerSideProps {
  nominators: Nominator[]
  nominatorBond: string
  validatorBond: string
}

export const NominatorsList: React.FC<Props> = ({ nominators, chain, nominatorBond, validatorBond }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Account</Th>
          <Th>Voted</Th>
          <Th>Share</Th>
        </Tr>

        {nominators?.map((item, index) => {
          return (
            <Tr key={item.account_display.address}>
              <Td>
                <Identicon account={item.account_display} type="nominator" />
              </Td>
              <Td>
                <Balance value={item.bonded} token={chain.nativeTokenConf} />
              </Td>
              <Td>
                <MyShare myBond={item.bonded} nominatorBond={nominatorBond} validatorBond={validatorBond} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
