import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text, Tooltip, TooltipTrigger, TooltipContent } from '@/ui'
import { ReferendumTrackWithId } from '@/types/api'
import { toBigCamel } from '@/utils/formatText'
import { blockToPeriod } from '@/utils/blockTime'

interface Props extends BareProps, BareServerSideProps {
  tracks: ReferendumTrackWithId[]
}

const ReferendaTracksList: React.FC<Props> = ({ tracks, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Origin Id</Th>
          <Th>Name</Th>
          <Th>Prepare Period</Th>
          <Th>Voting Period</Th>
          <Th>Confirm Period</Th>
          <Th>Min Enactment Period</Th>
          <Th>Current/Maximum</Th>
        </Tr>
        {tracks?.map((track) => {
          return (
            <Tr key={track.id}>
              <Td>
                <Text>{track.id}</Text>
              </Td>
              <Td>
                <Text>{toBigCamel(track.name)}</Text>
              </Td>
              <Td>
                <Tooltip>
                  <TooltipTrigger>{blockToPeriod(track.prepare_period, chain.metadata.blockTime)}</TooltipTrigger>
                  <TooltipContent>{track.prepare_period} Blocks</TooltipContent>
                </Tooltip>
              </Td>
              <Td>
                <Tooltip>
                  <TooltipTrigger>{blockToPeriod(track.decision_period, chain.metadata.blockTime)}</TooltipTrigger>
                  <TooltipContent>{track.decision_period} Blocks</TooltipContent>
                </Tooltip>
              </Td>
              <Td>
                <Tooltip>
                  <TooltipTrigger>{blockToPeriod(track.confirm_period, chain.metadata.blockTime)}</TooltipTrigger>
                  <TooltipContent>{track.confirm_period} Blocks</TooltipContent>
                </Tooltip>
              </Td>
              <Td>
                <Tooltip>
                  <TooltipTrigger>{blockToPeriod(track.min_enactment_period, chain.metadata.blockTime)}</TooltipTrigger>
                  <TooltipContent>{track.min_enactment_period} Blocks</TooltipContent>
                </Tooltip>
              </Td>
              <Td>
                <Text>
                  {track.current_deciding}/{track.max_deciding}
                </Text>
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ReferendaTracksList
