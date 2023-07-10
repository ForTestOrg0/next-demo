import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Button, Table, Td, Text, Th, Tr } from '@/ui'
import { countDownByBlock } from '@/utils/time'
import { CrowdloanLink, ParachainLink } from '@/components/Links'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { ParachainFund } from '@/types/api'

export type ParachainCrowdloadDisableColumn = Partial<Record<'contribute', boolean>>

export const crowdloanListStatusMap = {
  active: {
    args: { order: 'raised desc', statuses: [1] },
  },
  completed: {
    args: { order: 'raised desc', statuses: [2] },
    title: 'Parathread',
  },
  retired: {
    args: { order: 'raised desc', statuses: [3, 4] },
    title: 'Registered Para ID',
    disableColumn: {
      contribute: true,
    },
  },
}

interface Props extends BareProps, BareServerSideProps {
  funds: ParachainFund[]
  type?: string
  disableColumn?: ParachainCrowdloadDisableColumn
}

const Component: React.FC<Props> = ({ children, className, chain, type, style, funds }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Para Id</Th>
          <Th>Project</Th>
          <Th>Owner</Th>
          <Th>Lease Period</Th>
          <Th>Fund Raised ({chain.nativeTokenConf.symbol})</Th>
          <Th>Fund Cap ({chain.nativeTokenConf.symbol})</Th>
          <Th>Countdown</Th>
          <Th>Contributor</Th>
          <Th></Th>
        </Tr>
        {funds?.map((fund) => {
          const projectInfo = getParachainProjectInfoById(chain.chainConf.id as RelaychainName, fund.para_id) || DEFAULT_PARACHAIN

          return (
            <Tr key={fund.fund_id}>
              <Td>
                <ParachainLink id={fund.para_id} />
              </Td>
              <Td>
                <Text>{projectInfo['Project Name']}</Text>
              </Td>
              <Td>
                <Identicon account={fund.owner_display} />
              </Td>
              <Td>
                <Text>
                  {fund.first_period}-{fund.last_period}
                </Text>
              </Td>
              <Td>
                {type === 'retired' ? (
                  <Balance value={fund.raised} token={chain.nativeTokenConf} showSymbol={false} />
                ) : (
                  <Balance value={fund.balance} token={chain.nativeTokenConf} showSymbol={false} />
                )}
              </Td>
              <Td>
                <Balance value={fund.cap} token={chain.nativeTokenConf} showSymbol={false} />
              </Td>
              <Td>
                <Text>{countDownByBlock(fund.end_block, chain.metadata.blockNum, chain.metadata.avgBlockTime)}</Text>
              </Td>
              <Td>
                <CrowdloanLink id={fund.fund_id} query={{ tab: 'contributor' }}>
                  {fund.contributors}
                </CrowdloanLink>
              </Td>
              <Td>
                {type === 'active' ? (
                  <CrowdloanLink id={fund.fund_id} query={{ tab: 'contribute' }}>
                    <Button outline>Contribute</Button>
                  </CrowdloanLink>
                ) : null}
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Component
