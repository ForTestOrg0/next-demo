import {
  APIWarpperProps,
  AccountDisplay,
  BountiesProposal,
  BountiesProposalDetail,
  CouncilProposal,
  CouncilProposalDetail,
  DemocracyReferendum,
  DemocracyReferendumDetail,
  DemocracyReferendumV2,
  DemocracyVote,
  ProposalPreImage,
  ProposalTimeline,
  ReferendaReferendumV2Detail,
  ReferendaVotesV2,
  ReferendumTrack,
  TechcommProposal,
  TechcommProposalDetail,
  TreasuryProposal,
  TreasuryProposalDetail,
  TreasuryTip,
  TreasuryTipDetail,
  TreasuryTipper,
} from '@/types/api'
import useSWR from 'swr'
import { subscanFetch, swrFetcher } from './fetcher'

export interface GetDemocracyProposalsDataProps {
  count: number
  list: {
    block_timestamp: number
    call_module: string
    call_name: string
    created_block: number
    proposal_id: number
    seconded_count: number
    status: string
  }[]
}

export async function getDemocracyProposals(hostname = '', params: any): Promise<APIWarpperProps<GetDemocracyProposalsDataProps>> {
  return await subscanFetch(hostname, 'api/scan/democracy/proposals', params)
}

export interface GetDemocracyProposalByIdDataProps {
  info: {
    call_module: string
    call_name: string
    created_block: number
    params: string
    pre_image: ProposalPreImage
    proposal_hash: string
    proposal_id: number
    seconded_count: number
    status: string
    timeline: ProposalTimeline[]
    updated_block: number
    value: string
  }
}

export async function getDemocracyProposalById(
  hostname = '',
  params: { democracy_id: number }
): Promise<APIWarpperProps<GetDemocracyProposalByIdDataProps>> {
  return await subscanFetch(hostname, 'api/scan/democracy/proposal', params)
}

/***** Democracy Seconded *****/
export interface GetDemocracySecondedProps {
  count: number
  list: {
    account: string
    account_display: AccountDisplay
    block_num: number
    event_index: string
    extrinsic_index: string
    proposal_id: number
  }[]
}

export async function getDemocracySeconded(
  hostname = '',
  params: { page: number; row: number; proposal_id: number }
): Promise<APIWarpperProps<GetDemocracySecondedProps>> {
  return await subscanFetch(hostname, 'api/scan/democracy/seconded', params)
}

export const useDemocracySeconded = (hostname = '', params: { page: number; row: number; proposal_id: number }) => {
  return useSWR<APIWarpperProps<GetDemocracySecondedProps>, Error>([hostname, 'api/scan/democracy/seconded', params], swrFetcher)
}

/***** Democracy Referendums *****/

export interface GetDemocracyReferendumsProps {
  count: number
  list: DemocracyReferendum[]
}

export async function getDemocracyReferendums(
  hostname = '',
  params: { page: number; row: number }
): Promise<APIWarpperProps<GetDemocracyReferendumsProps>> {
  return await subscanFetch(hostname, 'api/scan/democracy/referendums', params)
}

/***** Democracy Referendum *****/
export interface GetDemocracyReferendumProps {
  info: DemocracyReferendumDetail
}

export async function getDemocracyReferendum(
  hostname = '',
  params: { referendum_index: number }
): Promise<APIWarpperProps<GetDemocracyReferendumProps>> {
  return await subscanFetch(hostname, 'api/scan/democracy/referendum', params)
}

/***** Democracy Referendum Votes *****/
export interface GetDemocracyVotesProps {
  count: number
  list: DemocracyVote[]
}

export async function getDemocracyVotes(
  hostname = '',
  params: { page: number; row: number; referendum_index: number }
): Promise<APIWarpperProps<GetDemocracyVotesProps>> {
  return await subscanFetch(hostname, 'api/scan/democracy/votes', params)
}

export const useDemocracyVotes = (hostname = '', params: { page: number; row: number; referendum_index: number }) => {
  return useSWR<APIWarpperProps<GetDemocracyVotesProps>, Error>([hostname, 'api/scan/democracy/votes', params], swrFetcher)
}

/***** Council Proposals *****/
export interface GetCouncilProposalsProps {
  count: number
  list: CouncilProposal[]
}

export async function getCouncilProposals(hostname = '', params: { page: number; row: number }): Promise<APIWarpperProps<GetCouncilProposalsProps>> {
  return await subscanFetch(hostname, 'api/scan/council/proposals', params)
}

/***** Council Proposal *****/
export interface GetCouncilProposalProps {
  info: CouncilProposalDetail
}

export async function getCouncilProposal(hostname = '', params: { proposal_id: number }): Promise<APIWarpperProps<GetCouncilProposalProps>> {
  return await subscanFetch(hostname, 'api/scan/council/proposal', params)
}

/***** Techcomm Proposals *****/

export interface GetTechcommProposalsProps {
  count: number
  list: TechcommProposal[]
}

export async function getTechcommProposals(
  hostname = '',
  params: { page: number; row: number }
): Promise<APIWarpperProps<GetTechcommProposalsProps>> {
  return await subscanFetch(hostname, 'api/scan/techcomm/proposals', params)
}

/***** Techcomm Proposal *****/

export interface GetTechcommProposalProps {
  info: TechcommProposalDetail
}

export async function getTechcommProposal(hostname = '', params: { proposal_id: number }): Promise<APIWarpperProps<GetTechcommProposalProps>> {
  return await subscanFetch(hostname, 'api/scan/techcomm/proposal', params)
}

/***** Treasury Proposals *****/

export interface GetTreasuryProposalsProps {
  count: number
  list: TreasuryProposal[]
}

export async function getTreasuryProposals(
  hostname = '',
  params: { page: number; row: number }
): Promise<APIWarpperProps<GetTreasuryProposalsProps>> {
  return await subscanFetch(hostname, 'api/scan/treasury/proposals', params)
}

/***** Treasury Proposal *****/

export interface GetTreasuryProposalProps {
  info: TreasuryProposalDetail
}

export async function getTreasuryProposal(hostname = '', params: { proposal_id: number }): Promise<APIWarpperProps<GetTreasuryProposalProps>> {
  return await subscanFetch(hostname, 'api/scan/treasury/proposal', params)
}

/***** Treasury Tips *****/

export interface GetTreasuryTipsProps {
  count: number
  list: TreasuryTip[]
}

export async function getTreasuryTips(hostname = '', params: { page: number; row: number }): Promise<APIWarpperProps<GetTreasuryTipsProps>> {
  return await subscanFetch(hostname, 'api/scan/treasury/tips', params)
}

/***** Treasury Tip *****/

export interface GetTreasuryTipProps {
  info: TreasuryTipDetail
}

export async function getTreasuryTip(hostname = '', params: { hash: string }): Promise<APIWarpperProps<GetTreasuryTipProps>> {
  return await subscanFetch(hostname, 'api/scan/treasury/tip', params)
}

/***** Treasury Tippers *****/
export interface GetTreasuryTippersProps {
  list: TreasuryTipper[]
}

export async function getTreasuryTippers(hostname = '', params: { hash: string }): Promise<APIWarpperProps<GetTreasuryTippersProps>> {
  return await subscanFetch(hostname, 'api/scan/treasury/tippers', params)
}

export const useTreasuryTippers = (hostname = '', params: { hash: string }) => {
  return useSWR<APIWarpperProps<GetTreasuryTippersProps>, Error>([hostname, 'api/scan/treasury/tippers', params], swrFetcher)
}

/***** Bounties Proposals *****/
export interface GetBountiesProposalsProps {
  count: number
  list: BountiesProposal[]
}

export async function getBountiesProposals(
  hostname = '',
  params: { page: number; row: number; status: string }
): Promise<APIWarpperProps<GetBountiesProposalsProps>> {
  return await subscanFetch(hostname, 'api/scan/bounties/proposals', params)
}

/***** Bounties Proposal *****/
export interface GetBountiesProposalProps extends BountiesProposalDetail {}

export async function getBountiesProposal(hostname = '', params: { proposal_id: number }): Promise<APIWarpperProps<GetBountiesProposalProps>> {
  return await subscanFetch(hostname, 'api/scan/bounties/proposal', params)
}

/***** ReferendumV2 List *****/
export interface GetReferendaReferendumsProps {
  count: number
  list: DemocracyReferendumV2[]
}

export async function getReferendaReferendums(
  hostname = '',
  params: {
    row: number
    page: number
    status?: 'completed' | 'active'
    origin?: string
  }
): Promise<APIWarpperProps<GetReferendaReferendumsProps>> {
  return await subscanFetch(hostname, 'api/scan/referenda/referendums', params)
}

export const useReferendaReferendums = (hostname = '', params: Parameters<typeof getReferendaReferendums>[1]) => {
  return useSWR<APIWarpperProps<GetReferendaReferendumsProps>, Error>([hostname, 'api/scan/referenda/referendums', params], swrFetcher)
}

/***** ReferendumV2 Tracks *****/
export type GetReferendaTracksProps = Record<string, ReferendumTrack>

export async function getReferendaTracks(hostname = ''): Promise<APIWarpperProps<GetReferendaTracksProps>> {
  return await subscanFetch(hostname, 'api/scan/referenda/tracks')
}

export const useReferendaTracks = (hostname = '') => {
  return useSWR<APIWarpperProps<GetReferendaTracksProps>, Error>([hostname, 'api/scan/referenda/tracks'], swrFetcher)
}

/***** Fellowship List *****/
export interface GetFellowshipReferendumsProps {
  count: number
  list: DemocracyReferendumV2[]
}

export async function getFellowshipReferendums(
  hostname = '',
  params: {
    row: number
    page: number
    status?: 'completed' | 'active'
    origin?: string
  }
): Promise<APIWarpperProps<GetFellowshipReferendumsProps>> {
  return await subscanFetch(hostname, 'api/scan/fellowship/referendums', params)
}

export const useFellowshipReferendums = (hostname = '', params: Parameters<typeof getFellowshipReferendums>[1]) => {
  return useSWR<APIWarpperProps<GetFellowshipReferendumsProps>, Error>([hostname, 'api/scan/fellowship/referendums', params], swrFetcher)
}

/***** Referenda Referendum *****/
export interface GetFellowshipReferendumProps extends ReferendaReferendumV2Detail {}

export async function getFellowshipReferendum(
  hostname = '',
  params: {
    referendum_index: number
  }
): Promise<APIWarpperProps<GetFellowshipReferendumProps>> {
  return await subscanFetch(hostname, 'api/scan/fellowship/referendum', params)
}

export const useFellowshipReferendum = (hostname = '', params: Parameters<typeof getFellowshipReferendum>[1]) => {
  return useSWR<APIWarpperProps<GetFellowshipReferendumProps>, Error>([hostname, 'api/scan/fellowship/referendum', params], swrFetcher)
}

/***** Fellowship Tracks *****/
export type GetFellowshipTracksProps = Record<string, ReferendumTrack>

export async function getFellowshipTracks(hostname = ''): Promise<APIWarpperProps<GetFellowshipTracksProps>> {
  return await subscanFetch(hostname, 'api/scan/fellowship/tracks')
}

export const useFellowshipTracks = (hostname = '') => {
  return useSWR<APIWarpperProps<GetFellowshipTracksProps>, Error>([hostname, 'api/scan/fellowship/tracks'], swrFetcher)
}

/***** Referenda Referendum *****/
export interface GetFellowshipVotesProps {
  count: number
  list: ReferendaVotesV2[]
}

export async function getFellowshipVotes(
  hostname = '',
  params: {
    referendum_index: number
    page: number
    row: number
    /** conviction amount votes */
    sort?: string
    /** valid invalid */
    valid?: string
  }
): Promise<APIWarpperProps<GetFellowshipVotesProps>> {
  return await subscanFetch(hostname, 'api/scan/fellowship/votes', params)
}

export const useFellowshipVotes = (hostname = '', params: Parameters<typeof getFellowshipVotes>[1]) => {
  return useSWR<APIWarpperProps<GetReferendaVotesProps>, Error>([hostname, 'api/scan/fellowship/votes', params], swrFetcher)
}

/***** Referenda Referendum *****/
export interface GetReferendaReferendumProps extends ReferendaReferendumV2Detail {}

export async function getReferendaReferendum(
  hostname = '',
  params: {
    referendum_index: number
  }
): Promise<APIWarpperProps<GetReferendaReferendumProps>> {
  return await subscanFetch(hostname, 'api/scan/referenda/referendum', params)
}

export const useReferendaReferendum = (hostname = '', params: Parameters<typeof getReferendaReferendum>[1]) => {
  return useSWR<APIWarpperProps<GetReferendaReferendumProps>, Error>([hostname, 'api/scan/referenda/referendum', params], swrFetcher)
}

/***** Referenda Referendum *****/
export interface GetReferendaVotesProps {
  count: number
  list: ReferendaVotesV2[]
}

export async function getReferendaVotes(
  hostname = '',
  params: {
    referendum_index: number
    page: number
    row: number
    /** conviction amount votes */
    sort?: string
    /** valid invalid */
    valid?: string
  }
): Promise<APIWarpperProps<GetReferendaVotesProps>> {
  return await subscanFetch(hostname, 'api/scan/referenda/votes', params)
}

export const useReferendaVotes = (hostname = '', params: Parameters<typeof getReferendaVotes>[1]) => {
  return useSWR<APIWarpperProps<GetReferendaVotesProps>, Error>([hostname, 'api/scan/referenda/votes', params], swrFetcher)
}
