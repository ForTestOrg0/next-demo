import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter, Table, Td, Th, Tr } from '@/ui'
import { BlockLink, ExtrinsicLink } from '@/components/Links'
import { GetDemocracyProposalsDataProps } from '@/utils/api'
import { TimeFromNow } from '@/components/Time'

interface Props extends BareProps {
  proposals: GetDemocracyProposalsDataProps['list']
}

const ProposalList: React.FC<Props> = ({ proposals }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Proposal ID</Th>
          <Th>Block</Th>
          <Th>Action</Th>
          <Th>Seconds</Th>
          <Th>Time</Th>
          <Th>Status</Th>
          <Th></Th>
        </Tr>
        {proposals?.map((proposal) => {
          return (
            <Tr key={proposal.proposal_id}>
              <Td>
                <LinkRouter href={`/democracy_proposal/${proposal.proposal_id}`}>{proposal.proposal_id}</LinkRouter>
              </Td>
              <Td>
                <BlockLink blockNumber={proposal.created_block} />
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
                <LinkRouter href={`/proposal_second/${proposal.proposal_id}`}>{proposal.seconded_count}</LinkRouter>
              </Td>
              <Td>
                <TimeFromNow date={proposal.block_timestamp} />
              </Td>
              <Td>{proposal.status}</Td>
              <Td>action</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ProposalList
