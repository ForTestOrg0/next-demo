import {
  APIWarpperProps,
  AccountDisplay,
  CouncilProposal,
  CouncilProposalDetail,
  DemocracyReferendum,
  DemocracyReferendumDetail,
  DemocracyVote,
  ProposalPreImage,
  ProposalTimeline,
} from "@/types/api";
import useSWR from "swr";
import { subscanFetch, swrFetcher } from "./fetcher";

export function unwrap<T>(apiData: APIWarpperProps<T> | undefined): T | null {
  if (!apiData || apiData.code !== 0) {
    return null;
  }

  return apiData.data;
}

export async function getTransfers(hostname = "", params: any) {
  return await subscanFetch(hostname, "api/v2/scan/transfers", params);
}

export interface GetDemocracyProposalsDataProps {
  count: number;
  list: {
    block_timestamp: number;
    call_module: string;
    call_name: string;
    created_block: number;
    proposal_id: number;
    seconded_count: number;
    status: string;
  }[];
}

export async function getDemocracyProposals(
  hostname = "",
  params: any
): Promise<APIWarpperProps<GetDemocracyProposalsDataProps>> {
  return await subscanFetch(hostname, "api/scan/democracy/proposals", params);
}

export interface GetDemocracyProposalByIdDataProps {
  info: {
    call_module: string;
    call_name: string;
    created_block: number;
    params: string;
    pre_image: ProposalPreImage;
    proposal_hash: string;
    proposal_id: number;
    seconded_count: number;
    status: string;
    timeline: ProposalTimeline[];
    updated_block: number;
    value: string;
  };
}

export async function getDemocracyProposalById(
  hostname = "",
  params: { democracy_id: number }
): Promise<APIWarpperProps<GetDemocracyProposalByIdDataProps>> {
  return await subscanFetch(hostname, "api/scan/democracy/proposal", params);
}

/***** Democracy Seconded *****/
export interface GetDemocracySecondedProps {
  count: number;
  list: {
    account: string;
    account_display: AccountDisplay;
    block_num: number;
    event_index: string;
    extrinsic_index: string;
    proposal_id: number;
  }[];
}

export async function getDemocracySeconded(
  hostname = "",
  params: { page: number; row: number; proposal_id: number }
): Promise<APIWarpperProps<GetDemocracySecondedProps>> {
  return await subscanFetch(hostname, "api/scan/democracy/seconded", params);
}

export const useDemocracySeconded = (
  hostname = "",
  params: { page: number; row: number; proposal_id: number }
) => {
  return useSWR<APIWarpperProps<GetDemocracySecondedProps>, Error>([hostname, "api/scan/democracy/seconded", params], swrFetcher);
};

/***** Democracy Referendums *****/

export interface GetDemocracyReferendumsProps {
  count: number;
  list: DemocracyReferendum[];
}

export async function getDemocracyReferendums(
  hostname = "",
  params: { page: number; row: number; }
): Promise<APIWarpperProps<GetDemocracyReferendumsProps>> {
  return await subscanFetch(hostname, "api/scan/democracy/referendums", params);
}


/***** Democracy Referendum *****/
export interface GetDemocracyReferendumProps {
  info: DemocracyReferendumDetail;
}

export async function getDemocracyReferendum(
  hostname = "",
  params: { referendum_index: number; }
): Promise<APIWarpperProps<GetDemocracyReferendumProps>> {
  return await subscanFetch(hostname, "api/scan/democracy/referendum", params);
}


/***** Democracy Referendum Votes *****/
export interface GetDemocracyVotesProps {
  count: number;
  list: DemocracyVote[];
}

export async function getDemocracyVotes(
  hostname = "",
  params: { page: number; row: number; referendum_index: number; }
): Promise<APIWarpperProps<GetDemocracyVotesProps>> {
  return await subscanFetch(hostname, "api/scan/democracy/votes", params);
}

export const useDemocracyVotes = (
  hostname = "",
  params: { page: number; row: number; referendum_index: number }
) => {
  return useSWR<APIWarpperProps<GetDemocracyVotesProps>, Error>([hostname, "api/scan/democracy/votes", params], swrFetcher);
};

/***** Council Proposals *****/
export interface GetCouncilProposalsProps {
  count: number;
  list: CouncilProposal[];
}

export async function getCouncilProposals(
  hostname = "",
  params: { page: number; row: number;}
): Promise<APIWarpperProps<GetCouncilProposalsProps>> {
  return await subscanFetch(hostname, "api/scan/council/proposals", params);
}


/***** Council Proposal *****/
export interface GetCouncilProposalProps {
  info: CouncilProposalDetail;
}

export async function getCouncilProposal(
  hostname = "",
  params: { proposal_id: number;}
): Promise<APIWarpperProps<GetCouncilProposalProps>> {
  return await subscanFetch(hostname, "api/scan/council/proposal", params);
}