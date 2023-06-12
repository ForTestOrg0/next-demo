import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Button, Link, Table, Td, Text, Th, Tr } from '@/ui'
import { Parachain } from '@/types/api'
import { CrowdloanLink, ParachainLink, XCMChannelsLink, XCMTransferLink } from '@/components/Links'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { getChainConfigByParachainId } from '@/config/chains'
import { Identicon } from '@/components/Identicon'

export type ParachainListDisableColumn = Partial<
  Record<'fundId' | 'owner' | 'leasePeriod' | 'sentXCM' | 'receiveXCM' | 'channel' | 'explorer', boolean>
>

export const parachainListStatusMap = {
  parachain: {
    args: {
      order: 'para_id desc',
      status: ['Parachain', 'DowngradingParachain', 'OffboardingParachain', 'UpgradingToParachain'],
    },
    title: 'Parachain',
    disableColumn: {
      owner: true,
    },
  },
  parathread: {
    args: {
      filter_anonymous: true,
      order: 'para_id desc',
      status: ['Onboarding', 'Parathread', 'UpgradingParathread', 'DowngradingToParathread'],
    },
    title: 'Parathread',
    disableColumn: {
      leasePeriod: true,
      sentXCM: true,
      receiveXCM: true,
      channel: true,
      explorer: true,
    },
  },
  registered: {
    args: {
      filter_anonymous: true,
      order: 'para_id desc',
      status: ['Reserved'],
    },
    title: 'Registered Para ID',
    disableColumn: {
      leasePeriod: true,
      sentXCM: true,
      receiveXCM: true,
      channel: true,
      explorer: true,
      fundId: true,
    },
  },
  xcm: {
    args: {
      order: 'para_id asc',
      status: ['Parachain', 'DowngradingParachain', 'OffboardingParachain', 'UpgradingToParachain'],
      filter_anonymous: true,
    },
    title: 'Parachain',
    disableColumn: {
      fundId: true,
      owner: true,
    },
  },
}

interface Props extends BareProps, BareServerSideProps {
  parachains: Parachain[]
  disableColumn?: ParachainListDisableColumn
}
const Component: React.FC<Props> = ({ children, className, chain, parachains, disableColumn }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Para Id</Th>
          {!disableColumn?.fundId && <Th>Fund Id</Th>}
          {!disableColumn?.owner && <Th>Owner</Th>}
          {!disableColumn?.leasePeriod && <Th>Lease Period</Th>}
          {!disableColumn?.sentXCM && <Th>Sent XCM Transfers</Th>}
          {!disableColumn?.receiveXCM && <Th>Received XCM Transfers</Th>}
          {!disableColumn?.channel && <Th>Channels</Th>}
          {!disableColumn?.explorer && <Th></Th>}
        </Tr>
        {parachains.map((parachain) => {
          const projectInfo = getParachainProjectInfoById(chain.chainConf.id as RelaychainName, parachain.para_id) || DEFAULT_PARACHAIN
          const chainConfig = getChainConfigByParachainId(parachain.para_id, chain.chainConf.id as RelaychainName)
          return (
            <Tr key={parachain.para_id}>
              <Td>
                <ParachainLink id={parachain.para_id} />
                <Text className="ml-3">{projectInfo['Project Name']}</Text>
              </Td>
              {!disableColumn?.fundId && (
                <Td>
                  <CrowdloanLink empty={!parachain.fund_id} id={parachain.fund_id} />
                </Td>
              )}
              {!disableColumn?.owner && (
                <Td>
                  <Identicon account={parachain.manager_display} />
                </Td>
              )}
              {!disableColumn?.leasePeriod && (
                <Td>
                  <Text>
                    {parachain.first_period}-{parachain.last_period}
                  </Text>
                </Td>
              )}
              {!disableColumn?.sentXCM && (
                <Td>
                  <XCMTransferLink empty={!parachain.xcm_send_transfer_count} query={{ fromChain: parachain.para_id.toString() }}>
                    {parachain.xcm_send_transfer_count}
                  </XCMTransferLink>
                </Td>
              )}
              {!disableColumn?.receiveXCM && (
                <Td>
                  <XCMTransferLink empty={!parachain.xcm_receive_transfer_count} query={{ toChain: parachain.para_id.toString() }}>
                    {parachain.xcm_receive_transfer_count}
                  </XCMTransferLink>
                </Td>
              )}
              {!disableColumn?.channel && (
                <Td>
                  <XCMChannelsLink empty={!parachain.open_channel_count} query={{ result: 'accepted' }}>
                    {parachain.open_channel_count}
                  </XCMChannelsLink>
                </Td>
              )}
              {!disableColumn?.explorer && (
                <Td>
                  {chainConfig && (
                    <Link href={chainConfig.domain} external>
                      <Button outline>Explorer</Button>
                    </Link>
                  )}
                </Td>
              )}
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Component
