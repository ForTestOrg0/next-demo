import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { ExtrinsicLink } from '@/components/Links'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { ParachainContributes } from '@/types/api'
import { TimeFromNow } from '@/components/Time'

interface Props extends BareProps, BareServerSideProps {
  contributes: ParachainContributes[]
}

export const ContributeList: React.FC<Props> = ({ children, className, chain, style, contributes }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Latest Contribute</Th>
          <Th>Account</Th>
          <Th>Total</Th>
          <Th>Update Time</Th>
        </Tr>
        {contributes.map((contribute) => {
          return (
            <Tr key={contribute.extrinsic_index}>
              <Td>
                <ExtrinsicLink extrinsicIndex={contribute.extrinsic_index} />
              </Td>
              <Td>
                <Identicon account={contribute.who_display} />
              </Td>
              <Td>
                <Balance value={contribute.contributed} token={chain.nativeTokenConf} />
              </Td>
              <Td>
                <TimeFromNow date={contribute.block_timestamp} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}
