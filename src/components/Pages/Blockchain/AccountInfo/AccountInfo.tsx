import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { TableCol, TdCol, TrCol, Text } from '@/ui'
import { AccountDetail } from '@/types/api'

interface Props extends BareProps, BareServerSideProps {
  account: AccountDetail
}

const Page: React.FC<Props> = ({ account, chain }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Address</TdCol>
          <TdCol>
            <Text>{account.address}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Nonce</TdCol>
          <TdCol>
            <Text>{account?.nonce}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Parent Hash</TdCol>
          <TdCol>{account.role}</TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  )
}

export default Page
