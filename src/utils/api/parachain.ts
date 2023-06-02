import {
  APIWarpperProps,
  AuctionLeadingBlocks,
  Parachain,
  ParachainAuction,
  ParachainBid,
  ParachainFund,
  ParachainMeta,
  StakingVoted,
} from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** Parachain Meta *****/
export type GetParachainMetaProps = ParachainMeta

export async function getParachainMeta(hostname = ''): Promise<APIWarpperProps<GetParachainMetaProps>> {
  return await subscanFetch(hostname, 'api/scan/parachain/meta')
}

export const useParachainMeta = (hostname = '') => {
  return useSWR<APIWarpperProps<GetParachainMetaProps>, Error>([hostname, 'api/scan/parachain/meta'], swrFetcher)
}

/***** Parachain Funds *****/
export interface GetParachainFundsProps {
  count: number
  funds: ParachainFund[]
}

export async function getParachainFunds(
  hostname = '',
  params: {
    fund_id?: string
    bid_id?: string
    status?: number // Enum(1:Created|2:Leased|3:Ended|4:Dissolved)
    statuses?: number[]
    page: number
    row: number
  }
): Promise<APIWarpperProps<GetParachainFundsProps>> {
  return await subscanFetch(hostname, 'api/scan/parachain/funds', params)
}

export const useParachainFunds = (hostname = '', params: Parameters<typeof getParachainFunds>[1]) => {
  return useSWR<APIWarpperProps<GetParachainFundsProps>, Error>([hostname, 'api/scan/parachain/funds', params], swrFetcher)
}

/***** Parachain Bids *****/
export interface GetParachainBidsProps {
  count: number
  bids: ParachainBid[]
}

export async function getParachainBids(
  hostname = '',
  params: {
    page: number
    row: number
    auction_index?: number
    from_history?: boolean
    bid_id?: string
    fund_id?: string
    para_id?: number
    latest?: boolean
    order?: string
    /** Enum(1:Accepted|2:Leased|3:Renewal) */
    status?: number
    /** Enum(1:Slot|2:Crowdloan) */
    source?: number
  }
): Promise<APIWarpperProps<GetParachainBidsProps>> {
  return await subscanFetch(hostname, 'api/scan/parachain/bids', params)
}

export const useParachainBids = (hostname = '', params: Parameters<typeof getParachainBids>[1]) => {
  return useSWR<APIWarpperProps<GetParachainBidsProps>, Error>([hostname, 'api/scan/parachain/bids', params], swrFetcher)
}

/***** Auction Leading Blocks *****/
export type GetParachainAuctionLeadingBlocksProps = AuctionLeadingBlocks[]

export async function getParachainAuctionLeadingBlocks(
  hostname = '',
  params: {
    auction_id: number
  }
): Promise<APIWarpperProps<GetParachainAuctionLeadingBlocksProps>> {
  return await subscanFetch(hostname, 'api/scan/parachain/auction_leading_blocks', params)
}

export const useParachainAuctionLeadingBlocks = (hostname = '', params: Parameters<typeof getParachainAuctionLeadingBlocks>[1]) => {
  return useSWR<APIWarpperProps<GetParachainAuctionLeadingBlocksProps>, Error>(
    [hostname, 'api/scan/parachain/auction_leading_blocks', params],
    swrFetcher
  )
}

/***** Auctions *****/
export interface GetParachainAuctionsProps {
  count: number
  auctions: ParachainAuction[]
}

export async function getParachainAuctions(
  hostname = '',
  params: {
    auction_id?: number
    /** Enum(1:Started|2:Closed) */
    status?: number
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetParachainAuctionsProps>> {
  return await subscanFetch(hostname, 'api/scan/parachain/auctions', params)
}

export const useParachainAuctions = (hostname = '', params: Parameters<typeof getParachainAuctions>[1]) => {
  return useSWR<APIWarpperProps<GetParachainAuctionsProps>, Error>([hostname, 'api/scan/parachain/auctions', params], swrFetcher)
}

/***** Parachain List *****/
export interface GetParachainListProps {
  count: number
  chains: Parachain[]
}

export async function getParachainList(
  hostname = '',
  params: {
    /** Enum(Onboarding|Parathread|Parachain) */
    status?: string[]
    filter_anonymous?: boolean
    order?: string
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetParachainListProps>> {
  return await subscanFetch(hostname, 'api/scan/parachain/list', params)
}

export const useParachainList = (hostname = '', params: Parameters<typeof getParachainList>[1]) => {
  return useSWR<APIWarpperProps<GetParachainListProps>, Error>([hostname, 'api/scan/parachain/list', params], swrFetcher)
}
