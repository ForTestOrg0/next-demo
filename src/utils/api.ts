import {
  APIWarpperProps,
  AccountDisplay,
  ProposalPreImage,
  ProposalTimeline,
} from "@/types/api";

export async function subscanFetch(
  hostname: string,
  path: string,
  params = {}
) {
  let domain = "polkadot";
  if (hostname.indexOf("localhost") > -1) domain = "kusama";
  if (hostname.indexOf("kusama") > -1) domain = "kusama";
  if (hostname.indexOf("darwinia") > -1) domain = "darwinia";
  console.info("subscanFetch:");
  console.info({ domain, path, params });

  const res = await fetch(`https://${domain}.api.subscan.io/${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params || {}),
  });
  const data = await res.json();
  return data;
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
