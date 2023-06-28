import { APIWarpperProps, EraStat, Nominator, RewardSlash, StakingVoted, Validator } from '@/types/api'
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

/***** Staking Validators Active *****/
export interface GetStakingValidatorsProps {
  count: number
  list: Validator[]
}

export async function getStakingValidators(
  hostname = '',
  params: {
    order?: string
    /** (rank_validator,bonded_nominators,bonded_owner,count_nominators,validator_prefs_value,bonded_total) */
    order_field?: string
    row?: number
    page?: number
  }
): Promise<APIWarpperProps<GetStakingValidatorsProps>> {
  return await subscanFetch(hostname, 'api/scan/staking/validators', params)
}

export const useStakingValidators = (hostname = '', params: Parameters<typeof getStakingValidators>[1]) => {
  return useSWR<APIWarpperProps<GetStakingValidatorsProps>, Error>([hostname, 'api/scan/staking/validators', params], swrFetcher)
}

/***** Staking Validators Waiting *****/
export interface GetStakingWaitingProps {
  count: number
  list: Validator[]
}

export async function getStakingWaiting(
  hostname = '',
  params: {
    order?: string
    /** (bonded_nominators,bonded_owner,count_nominators,validator_prefs_value) */
    order_field?: string
  }
): Promise<APIWarpperProps<GetStakingWaitingProps>> {
  return await subscanFetch(hostname, 'api/scan/staking/waiting', params)
}

export const useStakingWaiting = (hostname = '', params: Parameters<typeof getStakingWaiting>[1]) => {
  return useSWR<APIWarpperProps<GetStakingWaitingProps>, Error>([hostname, 'api/scan/staking/waiting', params], swrFetcher)
}

/***** Staking Validator *****/
export interface GetStakingValidatorProps {
  info: Validator
}

export async function getStakingValidator(
  hostname = '',
  params: {
    stash: string
  }
): Promise<APIWarpperProps<GetStakingValidatorProps>> {
  return await subscanFetch(hostname, 'api/scan/staking/validator', params)
}

export const useStakingValidator = (hostname = '', params: Parameters<typeof getStakingValidator>[1]) => {
  return useSWR<APIWarpperProps<GetStakingValidatorProps>, Error>([hostname, 'api/scan/staking/validator', params], swrFetcher)
}

/***** Staking Nominators *****/
export interface GetStakingNominatorsProps {
  count: number
  list: Nominator[]
}

export async function getStakingNominators(
  hostname = '',
  params: {
    address: string
    row: number
    page: number
    order?: string
    /** rank_nominator,bonded */
    order_field?: string
  }
): Promise<APIWarpperProps<GetStakingNominatorsProps>> {
  return await subscanFetch(hostname, 'api/scan/staking/nominators', params)
}

export const useStakingNominators = (hostname = '', params: Parameters<typeof getStakingNominators>[1]) => {
  return useSWR<APIWarpperProps<GetStakingNominatorsProps>, Error>([hostname, 'api/scan/staking/nominators', params], swrFetcher)
}

/***** Staking EraStat *****/
export interface GetStakingEraStatProps {
  count: number
  list: EraStat[]
}

export async function getStakingEraStat(
  hostname = '',
  params: {
    address: string
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetStakingEraStatProps>> {
  return await subscanFetch(hostname, 'api/scan/staking/era_stat', params)
}

export const useStakingEraStat = (hostname = '', params: Parameters<typeof getStakingEraStat>[1]) => {
  return useSWR<APIWarpperProps<GetStakingEraStatProps>, Error>([hostname, 'api/scan/staking/era_stat', params], swrFetcher)
}

/***** Staking Reward Slash *****/
export interface GetStakingRewardSlashProps {
  count: number
  list: RewardSlash[]
}

export async function getStakingRewardSlash(
  hostname = '',
  params: {
    address: string
    row: number
    page: number
    category?: 'Reward' | 'Slash'
    is_stash?: boolean
    /** blockNum range like (1000-1200) */
    block_range?: string
  }
): Promise<APIWarpperProps<GetStakingRewardSlashProps>> {
  return await subscanFetch(hostname, 'api/scan/staking/reward_slash', params)
}

export const useStakingRewardSlash = (hostname = '', params: Parameters<typeof getStakingRewardSlash>[1]) => {
  return useSWR<APIWarpperProps<GetStakingRewardSlashProps>, Error>([hostname, 'api/scan/staking/reward_slash', params], swrFetcher)
}
