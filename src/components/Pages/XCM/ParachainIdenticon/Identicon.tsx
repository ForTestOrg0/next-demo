import React, { useMemo } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { AccountDisplay } from '@/types/api'
import { Text, Tooltip, TooltipContent, TooltipTrigger } from '@/ui'
import { AccountLink } from '@/components/Links'
import { formatHash } from '@/utils/formatText'
import styles from './Identicon.module.css'

interface Props extends BareProps {
  address?: string
  paraId?: number | string
}

const Identicon: React.FC<Props> = ({ address, paraId, className }) => {
  if (!address && !paraId) return <Text>-</Text>
  return (
    <div className={clsx('flex', className)}>
      <div className={clsx('flex items-center')}>
        <Tooltip copyable>
          <TooltipTrigger>
            {address && (
              <AccountLink address={address}>
                <Text>{formatHash(address)}</Text>
              </AccountLink>
            )}
            {paraId && <Text>{paraId}</Text>}
          </TooltipTrigger>
          <TooltipContent className="Tooltip">{address || paraId}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default Identicon
