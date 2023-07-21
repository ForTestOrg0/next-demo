import React, { useMemo } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'

interface Props extends BareProps {
  symbol: string
  chainId: string
  fallbackImage?: string
  type?: 'asset' | 'erc20' | 'erc721' | 'system' | 'custom'
}

const Component: React.FC<Props> = ({ children, className, chainId, symbol, fallbackImage, type }) => {
  const fallback = useMemo(() => {
    if (fallbackImage) return fallbackImage
    if (type) {
      return `/website/assets/${type}-default.png`
    }
    return ''
  }, [fallbackImage, type])

  return (
    <img
      className={clsx('', className)}
      src={`/chains/${chainId}/tokens/${symbol}.svg`}
      alt={`${chainId} - ${symbol}`}
      onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        if (fallback) {
          event.currentTarget.src = fallback
        }
      }}
    />
  )
}

export default Component
