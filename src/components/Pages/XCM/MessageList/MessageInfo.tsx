import React, { use, useMemo } from 'react'
import _ from 'lodash'
import { BareProps, BareServerSideProps } from '@/types/page'
import { TableCol, TdCol, TrCol, Text } from '@/ui'
import { XCM } from '@/types/api'
import { Progress } from '@/components/Pages/XCM/MessageList'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { Parameters } from '@/components/Parameters'
import { Balance } from '@/components/Balance'
import MessageContent from './MessageContent'

interface Props extends BareProps, BareServerSideProps {
  messageInfo: XCM
  host: string
}

const Page: React.FC<Props> = ({ messageInfo, chain, host }) => {
  const isMsg = useMemo(() => {
    return messageInfo.message_type !== 'transfer'
  }, [messageInfo])
  const hasChildContent = useMemo(() => {
    if (isMsg) {
      return false
    }
    return messageInfo.child_para_id > -1
  }, [messageInfo, isMsg])
  const hasChildMsg = useMemo(() => {
    if (isMsg) {
      return false
    }
    return !!messageInfo?.child_message
  }, [messageInfo, isMsg])
  const childData = {
    assets: messageInfo.assets,
    ...messageInfo.child_message,
  } as XCM
  const parentData = {
    ...messageInfo,
    to_account_id: messageInfo.child_dest,
    dest_para_id: messageInfo.child_para_id,
  } as XCM
  return (
    <div className="w-full">
      {hasChildContent && (
        <Text bold className="pl-2 pb-2.5" v-if="hasChildContent">
          {'Step 1'}
        </Text>
      )}
      {hasChildContent ? (
        <MessageContent host={host} chain={chain} isMsg={isMsg} messageInfo={parentData}></MessageContent>
      ) : (
        <MessageContent host={host} chain={chain} isMsg={isMsg} messageInfo={messageInfo}></MessageContent>
      )}
      {hasChildMsg && (
        <Text bold className="pl-2 pb-2.5 pt-5" v-if="hasChildContent">
          {'Step 2'}
        </Text>
      )}
      {hasChildMsg && <MessageContent host={host} chain={chain} isMsg={isMsg} messageInfo={childData}></MessageContent>}
    </div>
  )
}

export default Page
