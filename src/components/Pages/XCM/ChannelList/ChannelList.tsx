import React from 'react'
import { Token, BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { AccountLink, XCMMessageLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { XCMChanel } from '@/types/api'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { Balance } from '@/components/Balance'
import { TransferStatus } from './TransferStatus'
import { formatHash } from '@/utils/formatText'

interface Props extends BareProps, BareServerSideProps {
  channels: XCMChanel[]
  token?: Token
  pageSize?: number
  current?: number
}

const Page: React.FC<Props> = ({ channels, token, current = 1, pageSize = 10, chain }) => {
  const getRowIndex = (index = 0) => {
    const count = index + (current - 1) * pageSize + 1
    return count.toString()
  }
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Rank</Th>
          <Th>From</Th>
          <Th>To</Th>
          <Th>Transfers</Th>
          <Th>Active Time</Th>
          <Th>Status</Th>
        </Tr>
        {channels?.map((item, index) => {
          return (
            <Tr key={`${item.sender}-${item.recipient}`}>
              <Td>{getRowIndex(index)}</Td>
              <Td>
                <Identicon paraId={item.sender} />
              </Td>
              <Td>
                <Identicon paraId={item.recipient} />
              </Td>
              <Td>{item.transfer_count}</Td>
              <Td>
                <TimeFromNow date={item.active_at} />
              </Td>
              <Td>
                <TransferStatus type={item.status} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
