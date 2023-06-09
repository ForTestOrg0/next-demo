import React from 'react'
import { BareProps } from '@/types/page'
import { TableCol, TdCol, TrCol, Text, Link } from '@/ui'
import Image from 'next/image'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'

interface Props extends BareProps {
  relaychainName: RelaychainName
  parachainId: number
}

export const ProjectInfo: React.FC<Props> = ({ relaychainName, parachainId }) => {
  const project = getParachainProjectInfoById(relaychainName, parachainId) || DEFAULT_PARACHAIN
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap w-60">Project</TdCol>
          <TdCol>
            <Image className="inline-block" width={30} height={30} src={project.Logo || ''} alt={project['Project Name']} />
            <Text className="ml-2">{project['Project Name']}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Description</TdCol>
          <TdCol>
            <Text>{project['Description (en)']}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Crowdloans Allocation</TdCol>
          <TdCol>
            <Link href={project['Parachain Crowdloans Allocation (en)']}>{project['Parachain Crowdloans Allocation (en)']}</Link>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Auction Reward & Reward Vesting Schedule</TdCol>
          <TdCol>
            <Link href={project['Auction Reward & Reward Vesting Schedule (en)']}>{project['Auction Reward & Reward Vesting Schedule (en)']}</Link>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Financing Information</TdCol>
          <TdCol>
            <TdCol>
              {project['Financing Information (en)'] && (
                <Link href={project['Financing Information (en)']}>{project['Financing Information (en)']}</Link>
              )}
            </TdCol>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Website</TdCol>
          <TdCol>{project['Website Link'] && <Link href={project['Website Link']}>{project['Website Link']}</Link>}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Twitter</TdCol>
          <TdCol>{project['Twitter Link'] && <Link href={project['Twitter Link']}>{project['Twitter Link']}</Link>}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Telegram</TdCol>
          <TdCol>{project['Telegram Link'] && <Link href={project['Telegram Link']}>{project['Telegram Link']}</Link>}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Discord</TdCol>
          <TdCol>{project['Discord Link'] && <Link href={project['Discord Link']}>{project['Discord Link']}</Link>}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Medium</TdCol>
          <TdCol>{project['Medium Link'] && <Link href={project['Medium Link']}>{project['Medium Link']}</Link>}</TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Github</TdCol>
          <TdCol>{project['Github Link'] && <Link href={project['Github Link']}>{project['Github Link']}</Link>}</TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}
