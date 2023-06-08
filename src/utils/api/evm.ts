import { APIWarpperProps, EvmToken, EvmTokenHolder, EvmTokenTransfer, EvmTransaction } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** EVM Tokens *****/
export interface GetEvmTokensProps {
  count: number
  list: EvmToken[]
}

export async function getEvmTokens(
  hostname = '',
  params: {
    category?: string
    contracts?: string[]
    row?: number
    page?: number
  }
): Promise<APIWarpperProps<GetEvmTokensProps>> {
  return await subscanFetch(hostname, 'api/scan/evm/tokens', params)
}

export const useEvmTokens = (hostname = '', params: Parameters<typeof getEvmTokens>[1]) => {
  return useSWR<APIWarpperProps<GetEvmTokensProps>, Error>([hostname, 'api/scan/evm/tokens', params], swrFetcher)
}
export interface GetEvmTokenHoldersProps {
  count: number
  list: EvmTokenHolder[]
}
export async function getEvmTokenHolders(
  hostname = '',
  params: {
    contract?: string
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetEvmTokenHoldersProps>> {
  return await subscanFetch(hostname, 'api/scan/evm/token/holders', params)
}

export const useEvmTokenHolders = (hostname = '', params: Parameters<typeof getEvmTokenHolders>[1]) => {
  return useSWR<APIWarpperProps<GetEvmTokenHoldersProps>, Error>([hostname, 'api/scan/evm/token/holders', params], swrFetcher)
}
export interface GetEvmTokenTransfersProps {
  count: number
  list: EvmTokenTransfer[]
}
export async function getERC20Transfers(
  hostname = '',
  params: {
    contract?: string
    category?: string
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetEvmTokenTransfersProps>> {
  return await subscanFetch(hostname, 'api/scan/evm/erc20/transfer', params)
}

export const useERC20Transfers = (hostname = '', params: Parameters<typeof getERC20Transfers>[1]) => {
  return useSWR<APIWarpperProps<GetEvmTokenTransfersProps>, Error>([hostname, 'api/scan/evm/erc20/transfer', params], swrFetcher)
}

export interface GetEvmTransactionsProps {
  count: number
  list: EvmTransaction[]
}
export async function getEvmTransactions(
  hostname = '',
  params: {
    contract?: string
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetEvmTransactionsProps>> {
  return await subscanFetch(hostname, 'api/scan/evm/v2/transactions', params)
}

export const useEvmTransactions = (hostname = '', params: Parameters<typeof getEvmTransactions>[1]) => {
  return useSWR<APIWarpperProps<GetEvmTransactionsProps>, Error>([hostname, 'api/scan/evm/v2/transactions', params], swrFetcher)
}
