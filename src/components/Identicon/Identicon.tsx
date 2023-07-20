import React, { ReactElement, useMemo } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { AccountDisplay } from '@/types/api'
import { Text, Tooltip, TooltipContent, TooltipTrigger } from '@/ui'
import { AccountLink, NominatorLink, ValidatorLink } from '@/components/Links'
import { formatHash } from '@/utils/formatText'
import { GOOD_JUDGEMENTS, BAD_JUDGEMENTS } from '@/config/constants'
import styles from './Identicon.module.css'

type IdenticonType = '' | 'validator' | 'account' | 'nominator'

interface Props extends BareProps {
  account: AccountDisplay
  type?: IdenticonType
  short?: boolean
}

interface DisplayAddressProps extends BareProps {
  displayName: string
  account: AccountDisplay
  type?: IdenticonType
  short?: boolean
}

const DisplayAddress: React.FC<DisplayAddressProps> = ({ displayName, className, account, type = '', short }) => {
  const accountText = short ? <Text>{formatHash(displayName)}</Text> : <Text>{displayName}</Text>
  return (
    <>
      {(!type || type === 'account') && <AccountLink address={account?.address}>{accountText}</AccountLink>}
      {type === 'validator' && <ValidatorLink address={account?.address}>{accountText}</ValidatorLink>}
      {type === 'nominator' && <NominatorLink address={account?.address}>{accountText}</NominatorLink>}
    </>
  )
}

const Identicon: React.FC<Props> = ({ account, className, type, short = true }) => {
  const judgements = useMemo(() => {
    let result: string[] = []
    account?.judgements?.forEach((item) => {
      result.push(item.judgement)
    })
    return result
  }, [account])
  const isGoodJudgement = useMemo(() => {
    let result = false
    judgements.forEach((item) => {
      if (GOOD_JUDGEMENTS.indexOf(item.toLowerCase()) > -1) {
        result = true
        return false
      }
    })
    return result
  }, [judgements])
  const isBadJudgement = useMemo(() => {
    let result = false
    judgements.forEach((item) => {
      if (BAD_JUDGEMENTS.indexOf(item.toLowerCase()) > -1) {
        result = true
        return false
      }
    })
    return result
  }, [judgements])
  const judgementContent = useMemo(() => {
    const judgementText: any[] = []
    if (judgements && judgements.length > 0) {
      judgements.forEach((item) => {
        const text = item && item.toLowerCase()
        text.replace(' ', '')
        judgementText.push(text)
      })
      return 'Identity level: ' + judgementText.join(', ')
    } else {
      return 'Identity level: ' + 'No Judgement'
    }
  }, [judgements])
  const displayName = account?.display || account?.address
  if (!account) return <Text>-</Text>
  return (
    <div className={clsx('flex', className)}>
      <div className={clsx('flex items-center')}>
        {judgements && account?.identity ? (
          <div
            className={clsx(
              'flex justify-center w-5 h-5 rounded-full text-center mr-2.5 bg-[#98959f] text-sub-bg-light',
              {
                [styles.good]: isGoodJudgement,
              },
              {
                [styles.bad]: isBadJudgement,
              }
            )}>
            <Tooltip>
              <TooltipTrigger className="flex justify-center">{isGoodJudgement ? <div>V</div> : <div>-</div>}</TooltipTrigger>
              <TooltipContent className="Tooltip">{judgementContent}</TooltipContent>
            </Tooltip>
          </div>
        ) : null}
        <Tooltip copyable>
          <TooltipTrigger>
            <DisplayAddress account={account} displayName={displayName} type={type} short={short} />
          </TooltipTrigger>
          <TooltipContent className="Tooltip">{account?.address}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default Identicon
