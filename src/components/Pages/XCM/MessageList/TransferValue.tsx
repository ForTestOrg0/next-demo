import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { XCMAsset } from '@/types/api'
import { Flex, Text } from '@/ui'
import { Balance } from '@/components/Balance'

interface Props extends BareProps {
  assets: XCMAsset[] | null
  text?: string
}

export const TransferValue: React.FC<Props> = ({ children, assets, text, className }) => {
  return (
    <div className={clsx('flex', className)}>
      {assets && assets.length === 1 && assets[0].symbol && (
        <>
          <Balance
            value={assets[0].amount}
            token={{
              decimals: assets[0].decimals,
              symbol: assets[0].symbol,
            }}></Balance>
        </>
      )}
      {assets && (assets.length > 1 || !assets[0]?.symbol) && <>{`${assets.length} Token`}</>}
      {(!assets || !assets.length) && <>-</>}
    </div>
  )
}
