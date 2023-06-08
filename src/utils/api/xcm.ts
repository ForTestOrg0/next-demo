import { APIWarpperProps, XCM } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** Parachain List *****/
export interface GetXCMListProps {
  count: number
  list: XCM[]
}

export async function getXCMList(
  hostname = '',
  params: {
    address?: boolean
    dest_para_id?: string
    origin_para_id?: string
    protocol?: string
    row: number
    page: number
    status?: string
    message_type?: string
  }
): Promise<APIWarpperProps<GetXCMListProps>> {
  return await subscanFetch(hostname, 'api/scan/xcm/list', params)
}

export const useXCMList = (hostname = '', params: Parameters<typeof getXCMList>[1]) => {
  return useSWR<APIWarpperProps<GetXCMListProps>, Error>([hostname, 'api/scan/xcm/list', params], swrFetcher)
}
