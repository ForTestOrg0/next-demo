import { APIWarpperProps, AccountStatisticsAssets, AccountStatisticsRole, Price } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** Account Statistics *****/
export type GetAccountStatisticsProps = AccountStatisticsRole[] | AccountStatisticsAssets[]

export async function getAccountStatistics(
  hostname = '',
  params: {
    type?: 'assets' | 'role'
  }
): Promise<APIWarpperProps<GetAccountStatisticsProps>> {
  return await subscanFetch(hostname, 'api/scan/accounts/statistics', params)
}

export const useAccountStatistics = (hostname = '', params: Parameters<typeof getAccountStatistics>[1]) => {
  return useSWR<APIWarpperProps<GetAccountStatisticsProps>, Error>([hostname, 'api/scan/accounts/statistics', params], swrFetcher)
}
