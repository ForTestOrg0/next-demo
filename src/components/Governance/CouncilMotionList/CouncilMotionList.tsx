import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { BlockLink, CouncilProposalLink, ExtrinsicLink, ReferendaLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { CouncilProposal, DemocracyReferendum } from '@/types/api'
import { ResultStatus } from '@/components/Status'
import CouncilMotionStatus from './CouncilMotionStatus'

interface Props extends BareProps {
  proposals: CouncilProposal[]
}

const CouncilMotionList: React.FC<Props> = ({ proposals }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Proposal ID</Th>
          <Th>Block</Th>
          <Th>Member Threshold</Th>
          <Th>Aye</Th>
          <Th>Nay</Th>
          <Th>Action</Th>
          <Th>Time</Th>
          <Th>Status</Th>
          <Th></Th>
        </Tr>
        {proposals.map((proposal) => {
          return (
            <Tr key={proposal.proposal_id}>
              <Td>
                <CouncilProposalLink index={proposal.proposal_id} />
              </Td>
              <Td>
                <BlockLink blockNumber={proposal.created_block} />
              </Td>
              <Td>
                <Text>{proposal.member_count}</Text>
              </Td>
              <Td>
                <Text>{proposal.aye_votes}</Text>
              </Td>
              <Td>
                <Text>{proposal.nay_votes}</Text>
              </Td>
              <Td>
                <ExtrinsicLink
                  empty={!proposal.call_module}
                  query={{
                    module: proposal.call_module,
                    call: proposal.call_name,
                  }}>{`${proposal.call_module} (${proposal.call_name})`}</ExtrinsicLink>
              </Td>
              <Td>
                <TimeFromNow date={proposal.block_timestamp} />
              </Td>
              <Td>
                <CouncilMotionStatus status={proposal.status} text={proposal.status} />
              </Td>
              <Td>action</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default CouncilMotionList
