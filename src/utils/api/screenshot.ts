import { APIWarpperProps, Screenshot } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** Screenshot *****/
export type GetScreenshotProps = Screenshot

export async function getScreenshot(
  hostname = '',
  params: {
    url?: string
    key?: string
    width?: number
    height?: number
    timeout?: number
  }
): Promise<APIWarpperProps<GetScreenshotProps>> {
  return await subscanFetch(hostname, 'api/scan/screenshot', params)
}

export const useScreenshot = (hostname = '', params: Parameters<typeof getScreenshot>[1]) => {
  return useSWR<APIWarpperProps<GetScreenshotProps>, Error>([hostname, 'api/scan/screenshot', params], swrFetcher)
}
