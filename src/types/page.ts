import { GetTokenUniqueIdProps } from '@/utils/api'
import { ChainMetadata, TokenMetadata } from './api'
import { Chain } from '@/config/types'

export type PageProps = any

export interface BareProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface Token {
  decimals: number
  symbol: string
}

export interface ChainProps {
  chainConf: Chain
  tokens: GetTokenUniqueIdProps
  nativeToken: TokenMetadata
  nativeTokenConf: Token
  metadata: ChainMetadata
}

export interface BareServerSideProps {
  chain: ChainProps
}

export interface DownloadRef {
  downloadCsv: (param: any[][], name: string) => void
}
