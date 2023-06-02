import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text, Flex } from '@/ui'
import { ParachainAuctionLink, ParachainLink } from '@/components/Links'
import { ParachainAuction, ParachainMeta } from '@/types/api'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'

interface Props extends BareProps, BareServerSideProps {
  auctions: ParachainAuction[]
  metaInfo: ParachainMeta
}

const Component: React.FC<Props> = ({ auctions, metaInfo, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Auction Inde</Th>
          <Th>Lease Period</Th>
          <Th>Winner</Th>
          <Th>Status</Th>
        </Tr>

        {auctions?.map((item, index) => {
          return (
            <Tr key={item.auction_index}>
              <Td>
                <ParachainAuctionLink index={item.auction_index} />
              </Td>
              <Td>
                <Text>
                  {item.lease_index}-{item.lease_index + metaInfo.lease_periods_per_slot - 1}
                </Text>
              </Td>
              <Td>
                {!item.winners && <Text>-</Text>}
                {item.winners?.map((winner) => {
                  const projectInfo = getParachainProjectInfoById(chain.chainConf.id as RelaychainName, winner.para_id) || DEFAULT_PARACHAIN
                  return (
                    <Flex key={winner.bidder_account}>
                      <ParachainLink id={winner.para_id}>
                        <Text>{winner.para_id}</Text>
                        <Text className="ml-3">{projectInfo?.['Project Name'] || 'Un'}</Text>
                      </ParachainLink>
                    </Flex>
                  )
                })}
              </Td>
              <Td>
                <Text>{item.status}</Text>
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Component
