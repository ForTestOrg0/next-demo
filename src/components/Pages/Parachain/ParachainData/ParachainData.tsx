import React from 'react'
import { BareProps } from '@/types/page'
import { TableCol, TdCol, TrCol, Text, Link } from '@/ui'
import { ParachainInfo } from '@/types/api'
import { ParachainLink } from '@/components/Links'
import { Identicon } from '@/components/Identicon'

interface Props extends BareProps {
  chainInfo: ParachainInfo
}

export const ParachainData: React.FC<Props> = ({ chainInfo }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap w-60">Para ID</TdCol>
          <TdCol>
            <ParachainLink id={chainInfo.para_id} />
          </TdCol>
        </TrCol>
        {chainInfo.fund_account && (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">Fund Account</TdCol>
            <TdCol>
              <Identicon account={chainInfo.fund_account_display} />
            </TdCol>
          </TrCol>
        )}
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Head Data</TdCol>
          <TdCol>
            <Text>{chainInfo.genesis_head}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Validation Code</TdCol>
          <TdCol>
            <Link href={chainInfo.validation_code_url} external>
              Download WASM Hex Code
            </Link>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Register Status</TdCol>
          <TdCol>
            <Text>{chainInfo.status}</Text>
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}
