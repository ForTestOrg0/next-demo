import { APIWarpperProps, XCM, XCMChanel } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** XCM List *****/
export interface GetXCMListProps {
  count: number
  list: XCM[]
}

export async function getXCMList(
  hostname = '',
  params: {
    address?: boolean
    dest_para_id?: number
    origin_para_id?: number
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
export interface GetXCMChannelsProps {
  list: XCMChanel[]
}

export async function getXCMChannels(
  hostname = '',
  params: {
    recipient?: boolean
    sender?: string
    status?: string
  }
): Promise<APIWarpperProps<GetXCMChannelsProps>> {
  return await subscanFetch(hostname, 'api/scan/xcm/channels', params)
}

export const useXCMChannels = (hostname = '', params: Parameters<typeof getXCMList>[1]) => {
  return useSWR<APIWarpperProps<GetXCMChannelsProps>, Error>([hostname, 'api/scan/xcm/channels', params], swrFetcher)
}

export async function getXCMChannel(
  hostname = '',
  params: {
    recipient: number
    sender: number
  }
): Promise<APIWarpperProps<XCMChanel>> {
  return await subscanFetch(hostname, 'api/scan/xcm/channel', params)
}

export const useXCMChannel = (hostname = '', params: Parameters<typeof getXCMList>[1]) => {
  return useSWR<APIWarpperProps<XCMChanel>, Error>([hostname, 'api/scan/xcm/channel', params], swrFetcher)
}
