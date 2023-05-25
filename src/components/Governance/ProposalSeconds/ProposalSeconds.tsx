import React from 'react'
import { BareProps } from '@/types/page'
import { GetDemocracySecondedProps, unwrap, useDemocracySeconded } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { Table, Td, Th, Tr } from '@/ui'
import { Identicon } from '@/components/Identicon'
import { ExtrinsicLink } from '@/components/Links'

interface Props extends BareProps {
  seconds: GetDemocracySecondedProps['list']
  total: number
  start: number
}

const ProposalSeconds: React.FC<Props> = ({ seconds, total, start }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Extrinsic ID</Th>
          <Th>Account</Th>
          <Th>Second Upper Bond</Th>
        </Tr>

        {seconds?.map((item, index) => {
          const secondUpperBond = total - index - start > 0 ? total - index - start : '-'
          return (
            <Tr key={item.event_index}>
              <Td>
                <ExtrinsicLink extrinsicIndex={item.extrinsic_index} />
              </Td>
              <Td>
                <Identicon account={item.account_display} />
              </Td>
              <Td>{secondUpperBond}</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ProposalSeconds
