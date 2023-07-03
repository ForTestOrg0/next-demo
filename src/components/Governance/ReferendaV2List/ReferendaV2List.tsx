import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { ExtrinsicLink, FellowshipLink, ReferendaV2Link } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { DemocracyReferendumV2 } from '@/types/api'
import { toBigCamel } from '@/utils/formatText'
import { Identicon } from '@/components/Identicon'

interface Props extends BareProps {
  referendums: DemocracyReferendumV2[]
  type?: 'referenda' | 'fellowship'
}

const ReferendaV2List: React.FC<Props> = ({ referendums, type = 'referenda' }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>ID</Th>
          <Th>Origins</Th>
          <Th>Action</Th>
          <Th>Proposed By</Th>
          <Th>Submitted Time</Th>
          <Th>Status</Th>
        </Tr>
        {referendums?.map((referendum) => {
          return (
            <Tr key={referendum.referendum_index}>
              <Td>
                {type === 'referenda' && <ReferendaV2Link index={referendum.referendum_index} />}
                {type === 'fellowship' && <FellowshipLink index={referendum.referendum_index} />}
              </Td>
              <Td>
                <Text>{toBigCamel(referendum.origins)}</Text>
              </Td>
              <Td>
                <ExtrinsicLink
                  empty={!referendum.call_module}
                  query={{
                    module: referendum.call_module,
                    call: referendum.call_name,
                  }}>{`${referendum.call_module} (${referendum.call_name})`}</ExtrinsicLink>
              </Td>
              <Td>
                <Identicon account={referendum.account} />
              </Td>
              <Td>
                <TimeFromNow date={referendum.created_block_timestamp} />
              </Td>
              <Td>
                <Text>{referendum.status}</Text>
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ReferendaV2List
