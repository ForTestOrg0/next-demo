import { APIWarpperProps, Price } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** Price History *****/
export interface GetPriceHistoryProps {
  ema30_average: string
  ema7_average: string
  list: Price[]
}

export async function getPriceHistory(
  hostname = '',
  params: {
    start: string
    end: string
    format?: 'hour' | '6hour' | '12hour' | 'day'
    currency?: string
  }
): Promise<APIWarpperProps<GetPriceHistoryProps>> {
  return await subscanFetch(hostname, 'api/scan/price/history', params)
}

export const usePriceHistory = (hostname = '', params: Parameters<typeof getPriceHistory>[1]) => {
  return useSWR<APIWarpperProps<GetPriceHistoryProps>, Error>([hostname, 'api/scan/price/history', params], swrFetcher)
}
