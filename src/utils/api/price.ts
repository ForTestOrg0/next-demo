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
interface record {
  height: number
  time: number
  price: string
}
export interface GetPriceConverterProps {
  output: string
  price: {
    height: number
    time: number
    price: string
    records: record[]
  }
}

export async function getPriceConverter(
  hostname = '',
  params: {
    from: string
    value: number
    time: number
    quote: string
  }
): Promise<APIWarpperProps<GetPriceConverterProps>> {
  return await subscanFetch(hostname, 'api/open/price_converter', params)
}

export const usePriceConverter = (hostname = '', params: Parameters<typeof getPriceConverter>[1]) => {
  return useSWR<APIWarpperProps<GetPriceConverterProps>, Error>([hostname, 'api/open/price_converter', params], swrFetcher)
}
