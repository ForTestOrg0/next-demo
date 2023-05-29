import { APIWarpperProps, StakingVoted, Validator } from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

/***** Staking Voted *****/
export interface GetStakingVotedProps {
  count: number
  list: StakingVoted[]
}

export async function getStakingVoted(
  hostname = '',
  params: {
    address: string
  }
): Promise<APIWarpperProps<GetStakingVotedProps>> {
  return await subscanFetch(hostname, 'api/scan/staking/voted', params)
}

export const useStakingVoted = (hostname = '', params: Parameters<typeof getStakingVoted>[1]) => {
  return useSWR<APIWarpperProps<GetStakingVotedProps>, Error>([hostname, 'api/scan/staking/voted', params], swrFetcher)
}
