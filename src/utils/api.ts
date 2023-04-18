import { APIWarpperProps } from "@/types/api";

export async function subscanFetch(
  hostname: string,
  path: string,
  params = {}
) {
  let domain = "polkadot";
  if (hostname.indexOf("localhost") > -1) domain = "polkadot";
  if (hostname.indexOf("kusama") > -1) domain = "kusama";
  if (hostname.indexOf("darwinia") > -1) domain = "darwinia";

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

export async function getDemocracyProposals(hostname = "", params: any): Promise<APIWarpperProps<GetDemocracyProposalsDataProps>> {
  return await subscanFetch(hostname, "api/scan/democracy/proposals", params);
}