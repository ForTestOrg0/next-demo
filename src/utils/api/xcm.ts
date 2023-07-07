import { APIWarpperProps, XCM, XCMChanel, DailyXCMStatistics, XCMMeta } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** XCM *****/

export async function getXCMInfo(
  hostname = '',
  params: {
    unique_id: string
  }
): Promise<APIWarpperProps<XCM>> {
  return await subscanFetch(hostname, 'api/scan/xcm/info', params)
}

export const useXCMInfo = (hostname = '', params: Parameters<typeof getXCMInfo>[1]) => {
  return useSWR<APIWarpperProps<XCM>, Error>([hostname, 'api/scan/xcm/info', params], swrFetcher)
}
export interface GetXCMListProps {
  count: number
  list: XCM[]
}

export async function getXCMList(
  hostname = '',
  params: {
    address?: boolean
    dest_para_id?: number
    filter_para_id?: number
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
    filter_para_id?: number
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

export interface GetDailyXCMStateProps {
  all?: DailyXCMStatistics[]
  send?: DailyXCMStatistics[]
  receiver?: DailyXCMStatistics[]
}
export async function getDailyXCMState(
  hostname = '',
  params: {
    filter_para_id?: number
    start: string
    end: string
  }
): Promise<APIWarpperProps<GetDailyXCMStateProps>> {
  return await subscanFetch(hostname, 'api/scan/xcm/stat', params)
}

export const useDailyXCMState = (hostname = '', params: Parameters<typeof getDailyXCMState>[1]) => {
  return useSWR<APIWarpperProps<GetDailyXCMStateProps>, Error>([hostname, 'api/scan/xcm/stat', params], swrFetcher)
}

/***** XCM Meta *****/
export type GetXCMMetaProps = XCMMeta

export async function getXCMMeta(
  hostname = '',
  params: {
    para_id?: number
  }
): Promise<APIWarpperProps<GetXCMMetaProps>> {
  return await subscanFetch(hostname, 'api/scan/xcm/meta')
}

export const useXCMMeta = (hostname = '', params: Parameters<typeof getXCMMeta>[1]) => {
  return useSWR<APIWarpperProps<GetXCMMetaProps>, Error>([hostname, 'api/scan/xcm/meta', params], swrFetcher)
}
