import { APIWarpperProps, Runtime } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** runtime List *****/
export type GetRuntimeInfoProps = Runtime

export async function getRuntimeInfo(
  hostname = '',
  params: {
    spec?: number
  }
): Promise<APIWarpperProps<GetRuntimeInfoProps>> {
  return await subscanFetch(hostname, 'api/scan/runtime/metadata', params)
}

export const useRuntimeInfo = (hostname = '', params: Parameters<typeof getRuntimeInfo>[1]) => {
  return useSWR<APIWarpperProps<GetRuntimeInfoProps>, Error>([hostname, 'api/scan/runtime/metadata', params], swrFetcher)
}
