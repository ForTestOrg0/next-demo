import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { BlockLink, ExtrinsicLink, ReferendaLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { DemocracyReferendum } from '@/types/api'

interface Props extends BareProps {
  referendums: DemocracyReferendum[]
}

const ReferendaList: React.FC<Props> = ({ referendums }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Referendum ID</Th>
          <Th>Block</Th>
          <Th>Vote Threshold</Th>
          <Th>Action</Th>
          <Th>Time</Th>
          <Th>Status</Th>
          <Th></Th>
        </Tr>
        {referendums.map((referendum) => {
          return (
            <Tr key={referendum.referendum_index}>
              <Td>
                <ReferendaLink index={referendum.referendum_index} />
              </Td>
              <Td>
                <BlockLink blockNumber={referendum.created_block} />
              </Td>
              <Td>
                <Text>{referendum.vote_threshold}</Text>
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
                <TimeFromNow date={referendum.block_timestamp} />
              </Td>
              <Td>{referendum.status}</Td>
              <Td>action</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ReferendaList
