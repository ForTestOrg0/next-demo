import {
  APIWarpperProps,
  Block,
  BlockDetail,
  Event,
  Extrinsic,
  ExtrinsicDetail,
  TokenMetadata,
  Log,
  Transfer,
  Provider,
  Token,
  Holder,
} from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

export interface GetTokenUniqueIdProps {
  detail: Record<string, TokenMetadata>
  token: string[]
  unique_id: string[]
}

export async function getTokenUniqueId(
  hostname = '',
  params: { t?: string; id?: string; q?: string }
): Promise<APIWarpperProps<GetTokenUniqueIdProps>> {
  return await subscanFetch(hostname, 'api/scan/token/unique_id', params)
}

export const useTokenUniqueId = (hostname = '', params: { t?: string; id?: string; q?: string }) => {
  return useSWR<APIWarpperProps<GetTokenUniqueIdProps>, Error>([hostname, 'api/scan/token/unique_id', params], swrFetcher)
}

/***** Blocks *****/
export interface GetBlocksProps {
  count: number
  blocks: Block[]
}

export async function getBlocks(hostname = '', params: { page: number; row: number }): Promise<APIWarpperProps<GetBlocksProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/blocks', params)
}

/***** Block Detail *****/
export interface GetBlockProps extends BlockDetail {}

export async function getBlock(
  hostname = '',
  params: {
    block_num?: number
    block_hash?: string
    block_timestamp?: number
    only_head?: boolean
  }
): Promise<APIWarpperProps<GetBlockProps>> {
  return await subscanFetch(hostname, 'api/scan/block', params)
}

/***** Extrinsics *****/
export interface GetExtrinsicsProps {
  count: number
  extrinsics: Extrinsic[]
}

export async function getExtrinsics(
  hostname = '',
  params: {
    page: number
    row: number
    signed?: string
    address?: string
    module?: string
    call?: string
    block_num?: number
    block_range?: string
    success?: boolean
    after_id?: number
    order?: 'desc' | 'asc'
  }
): Promise<APIWarpperProps<GetExtrinsicsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/extrinsics', params)
}

export const useExtrinsics = (
  hostname = '',
  params: {
    page: number
    row: number
    signed?: string
    address?: string
    module?: string
    call?: string
    block_num?: number
    block_range?: string
    success?: boolean
    after_id?: number
    order?: 'desc' | 'asc'
  }
) => {
  return useSWR<APIWarpperProps<GetExtrinsicsProps>, Error>([hostname, 'api/v2/scan/extrinsics', params], swrFetcher)
}

export interface GetExtrinsicProps extends ExtrinsicDetail {}

export async function getExtrinsic(
  hostname = '',
  params: {
    extrinsic_index?: string
    hash?: string
    events_limit?: number
    focus?: string
  }
): Promise<APIWarpperProps<GetExtrinsicProps>> {
  return await subscanFetch(hostname, 'api/scan/extrinsic', params)
}

/***** Events *****/
export interface GetEventsProps {
  count: number
  events: Event[]
}

export async function getEvents(
  hostname = '',
  params: {
    page: number
    row: number
    module?: string
    event_id?: string
    block_num?: number
    extrinsic_index?: string
    block_range?: string
    finalized?: boolean
    phase?: 0 | 1 | 2
    address?: string
    after_id?: number
    order?: 'desc' | 'asc'
  }
): Promise<APIWarpperProps<GetEventsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/events', params)
}

export const useEvents = (
  hostname = '',
  params: {
    page: number
    row: number
    module?: string
    event_id?: string
    block_num?: number
    extrinsic_index?: string
    block_range?: string
    finalized?: boolean
    phase?: 0 | 1 | 2
    address?: string
    after_id?: number
    order?: 'desc' | 'asc'
  }
) => {
  return useSWR<APIWarpperProps<GetEventsProps>, Error>([hostname, 'api/v2/scan/events', params], swrFetcher)
}

/***** Logs *****/
export interface GetLogsProps {
  count: number
  logs: Log[]
}

export async function getLogs(
  hostname = '',
  params: { page: number; row: number; engine?: string; type?: string }
): Promise<APIWarpperProps<GetLogsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/logs', params)
}

/***** Transfers *****/
export interface GetTransfersProps {
  count: number
  transfers: Transfer[]
}

export async function getTransfers(
  hostname = '',
  params: {
    page: number
    row: number
    addres?: string
    extrinsic_index?: string
    block_range?: string
    direction?: 'all' | 'sent' | 'received'
    min_amount?: string
    max_amount?: string
    currency?: 'token' | 'usd'
    success?: boolean
    asset_symbol?: string
    asset_unique_id?: string
    after_id?: number[]
  }
): Promise<APIWarpperProps<GetTransfersProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/transfers', params)
}

/***** Assets *****/
export interface GetTokenProvidersProps {
  providers: Provider[]
}

export async function getTokenProviders(hostname = '', params: {}): Promise<APIWarpperProps<GetTokenProvidersProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/token/providers', params)
}

export interface GetTokensProps {
  provider: string
  count: number
  tokens: Token[]
}

export async function getTokensFromProvider(
  hostname = '',
  params: {
    provider: string
    row: number
    page: number
    include_extends?: boolean
  }
): Promise<APIWarpperProps<GetTokensProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/tokens', params)
}

export const useTokensFromProvider = (
  hostname = '',
  params: {
    provider?: string
    row: number
    page: number
    include_extends?: boolean
  }
) => {
  return useSWR<APIWarpperProps<GetTokensProps>, Error>([hostname, 'api/v2/scan/tokens', params], swrFetcher)
}
export interface GetTokenDetailProps {
  system?: Token[]
}

export async function getTokenDetail(
  hostname = '',
  params: {
    unique_ids: string[]
    include_extends?: boolean
  }
): Promise<APIWarpperProps<GetTokenDetailProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/token/search', params)
}

export const useTokenDetail = (
  hostname = '',
  params: {
    unique_ids?: string[]
    include_extends?: boolean
  }
) => {
  return useSWR<APIWarpperProps<GetTokenDetailProps>, Error>([hostname, 'api/v2/scan/token/search', params], swrFetcher)
}

export interface GetTokenHoldersProps {
  count: number
  list: Holder[]
}
export async function getTokenHolders(
  hostname = '',
  params: {
    unique_id?: string
    order?: 'desc' | 'asc'
    order_field?: string
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetTokenHoldersProps>> {
  return await subscanFetch(hostname, 'api/scan/token/holders', params)
}
export const useTokenHolders = (
  hostname = '',
  params: {
    unique_id?: string
    order?: 'desc' | 'asc'
    order_field?: string
    row: number
    page: number
  }
) => {
  return useSWR<APIWarpperProps<GetTokenHoldersProps>, Error>([hostname, 'api/scan/token/holders', params], swrFetcher)
}
