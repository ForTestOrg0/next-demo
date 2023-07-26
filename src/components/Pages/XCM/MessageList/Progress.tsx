import React from 'react'
import clsx from 'clsx'
import { Text, Link, Flex } from '@/ui'
import { BareProps } from '@/types/page'
import { XCM } from '@/types/api'
import { parseTimeToUtc } from '@/utils/time'
import { CheckCircleIcon, CircleTimesIcon, WaitIcon, QuestionIcon } from '@/ui/Svg'
import { getRelaySubdomainFromSubdomain, getChainConfigBySubdomain, getChainConfigByParachainId } from '@/config/chains'

interface Props extends BareProps {
  host: string
  value: XCM
}

const Parameters: React.FC<Props> = ({ value, className, host }) => {
  const relaySubdomain = getRelaySubdomainFromSubdomain(host)
  const relayChainConf = getChainConfigBySubdomain(relaySubdomain)
  const sendChainConfig = getChainConfigByParachainId(value.origin_para_id, relaySubdomain as RelaychainName)
  const toChainConfig = getChainConfigByParachainId(value.dest_para_id, relaySubdomain as RelaychainName)
  const fromBlock = value.extrinsic_index?.split('-')[0] || ''
  const getStatusStyle = (type?: string) => {
    if (type === 'relay') {
      return value.status === 'pending' ? 'border-sub-warning bg-[#fff8e6]' : 'border-sub-success bg-[#f1f8e6]'
    }
    switch (value.status) {
      case 'success':
        return 'border-sub-success bg-[#f1f8e6]'
      case 'failed':
        return 'border-sub-error bg-[#ffecef]'
      case 'pending':
        return 'border-sub-warning bg-[#fff8e6]'
      case 'relayed':
        return 'border-sub-b2 bg-[#f6f6f6]'
    }
  }
  const destStyle = getStatusStyle()
  const relayStyle = getStatusStyle('relay')
  return (
    <div className={clsx('', className)}>
      <Flex className="h-16 bg-white">
        <Flex className="w-12 mr-1 border-sub-success border-l-4 bg-[#f1f8e6] justify-center items-center">
          <CheckCircleIcon className="w-6 text-sub-success" />
        </Flex>
        <Flex className="border-sub-b4 border-b flex-auto items-center">
          <Text className="w-16 pl-2">From</Text>
          {value.origin_para_id === 0 ? (
            <div className="flex-auto">
              {relayChainConf?.name}
              {' ('}
              <Link external href={relayChainConf?.domain}>
                Relay
              </Link>
              {')'}
            </div>
          ) : (
            <div className="flex-auto">
              {sendChainConfig?.name}
              {' (Para ID: '}
              <Link external href={sendChainConfig?.domain}>
                {value.origin_para_id}
              </Link>
              {')'}
            </div>
          )}
          <div className="mr-2.5">
            {value.origin_event_index === '0-0' ? (
              <Link external className="parachain" href={`${sendChainConfig?.domain}/block/${fromBlock}`}>
                {fromBlock}
              </Link>
            ) : (
              <Link
                external
                className="parachain"
                href={`${sendChainConfig?.domain}/extrinsic/${value.extrinsic_index}?event=${value.origin_event_index}`}>
                {value.origin_event_index}
              </Link>
            )}
          </div>
          <Text className="mr-2.5 text-sub-b2">{parseTimeToUtc(value.origin_block_timestamp)}</Text>
        </Flex>
      </Flex>
      {value.protocol === 'HRMP' && (
        <Flex className="h-16 bg-white">
          <Flex className={clsx('w-12 mr-1 border-l-4  justify-center items-center', relayStyle)}>
            {value.status === 'pending' ? (
              <WaitIcon className="w-6 text-sub-warning-light" />
            ) : (
              <CheckCircleIcon className="w-6 text-sub-success-light" />
            )}
          </Flex>
          <Flex className="border-sub-b4 border-b flex-auto items-center">
            <Text className="w-16 pl-2">Relay</Text>
            <div className="flex-auto">
              {relayChainConf?.name}
              {' ('}
              <Link external href={relayChainConf?.domain}>
                Relay
              </Link>
              {')'}
            </div>
            <div className="mr-2.5">
              {value.relayed_event_index === '0-0' ? null : (
                <Link
                  external
                  className="parachain"
                  href={`${relayChainConf?.domain}/extrinsic/${value.relayed_extrinsic_index}?event=${value.relayed_event_index}`}>
                  {value.relayed_event_index}
                </Link>
              )}
            </div>
            {value.relayed_block_timestamp && <Text className="mr-2.5 text-sub-b2">{parseTimeToUtc(value.relayed_block_timestamp)}</Text>}
          </Flex>
        </Flex>
      )}
      <Flex className="h-16 bg-white">
        <Flex className={clsx('w-12 mr-1 border-l-4  justify-center items-center', destStyle)}>
          {value.status === 'success' ? <CheckCircleIcon className="w-6 text-sub-success-light" /> : null}
          {value.status === 'failed' ? <CircleTimesIcon className="w-6 text-sub-error-light" /> : null}
          {value.status === 'pending' ? <WaitIcon className="w-6 text-sub-warning-light" /> : null}
          {value.status === 'relayed' ? <QuestionIcon className="w-6 text-sub-b2" /> : null}
        </Flex>
        <Flex className="border-sub-b4 border-b flex-auto items-center">
          <Text className="w-16 pl-2">To</Text>
          {value.dest_para_id === 0 ? (
            <div className="flex-auto">
              {relayChainConf?.name}
              {' ('}
              <Link external href={relayChainConf?.domain}>
                Relay
              </Link>
              {')'}
            </div>
          ) : (
            <div className="flex-auto">
              {toChainConfig?.name}
              {' (Para ID: '}
              <Link external href={toChainConfig?.domain}>
                {value.dest_para_id}
              </Link>
              {')'}
            </div>
          )}
          {value.dest_extrinsic_index && value.dest_event_index && (
            <div className="mr-2.5">
              {value.dest_event_index === '0-0' ? (
                <Link external className="parachain" href={`${toChainConfig?.domain}/block/${value.block_num}`}>
                  {value.block_num}
                </Link>
              ) : (
                <Link
                  external
                  className="parachain"
                  href={`${toChainConfig?.domain}/extrinsic/${value.dest_extrinsic_index}?event=${value.dest_event_index}`}>
                  {value.dest_event_index}
                </Link>
              )}
            </div>
          )}
          {!!value.confirm_block_timestamp && <Text className="mr-2.5 text-sub-b2">{parseTimeToUtc(value.confirm_block_timestamp)}</Text>}
        </Flex>
      </Flex>
    </div>
  )
}

export default Parameters
