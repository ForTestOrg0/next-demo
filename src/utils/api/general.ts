import {
  APIWarpperProps,
  Block,
  BlockDetail,
  Event,
  Extrinsic,
  TokenMetadata,
  Log,
} from "@/types/api";
import { subscanFetch, swrFetcher } from "./fetcher";
import useSWR from "swr";

export interface GetTokenUniqueIdProps {
  detail: Record<string, TokenMetadata>;
  token: string[];
  unique_id: string[];
}

export async function getTokenUniqueId(
  hostname = "",
  params: { t?: string; id?: string; q?: string }
): Promise<APIWarpperProps<GetTokenUniqueIdProps>> {
  return await subscanFetch(hostname, "api/scan/token/unique_id", params);
}

/***** Blocks *****/
export interface GetBlocksProps {
  count: number;
  blocks: Block[];
}

export async function getBlocks(
  hostname = "",
  params: { page: number; row: number }
): Promise<APIWarpperProps<GetBlocksProps>> {
  return await subscanFetch(hostname, "api/v2/scan/blocks", params);
}

/***** Block Detail *****/
export interface GetBlockProps extends BlockDetail {}

export async function getBlock(
  hostname = "",
  params: {
    block_num?: number;
    block_hash?: string;
    block_timestamp?: number;
    only_head?: boolean;
  }
): Promise<APIWarpperProps<GetBlockProps>> {
  return await subscanFetch(hostname, "api/scan/block", params);
}

/***** Extrinsics *****/
export interface GetExtrinsicsProps {
  count: number;
  extrinsics: Extrinsic[];
}

export async function getExtrinsics(
  hostname = "",
  params: {
    page: number;
    row: number;
    signed?: boolean;
    address?: string;
    module?: string;
    call?: string;
    block_num?: number;
    block_range?: string;
    success?: boolean;
    after_id?: number;
    order?: "desc" | "asc";
  }
): Promise<APIWarpperProps<GetExtrinsicsProps>> {
  return await subscanFetch(hostname, "api/v2/scan/blocks", params);
}

export const useExtrinsics = (
  hostname = "",
  params: {
    page: number;
    row: number;
    signed?: boolean;
    address?: string;
    module?: string;
    call?: string;
    block_num?: number;
    block_range?: string;
    success?: boolean;
    after_id?: number;
    order?: "desc" | "asc";
  }
) => {
  return useSWR<APIWarpperProps<GetExtrinsicsProps>, Error>(
    [hostname, "api/v2/scan/extrinsics", params],
    swrFetcher
  );
};


/***** Events *****/
export interface GetEventsProps {
  count: number;
  events: Event[];
}

export async function getEvents(
  hostname = "",
  params: {
    page: number;
    row: number;
    module?: string;
    event_id?: string;
    block_num?: number;
    extrinsic_index?: string;
    block_range?: string;
    finalized?: boolean;
    phase?: 0 | 1 | 2;
    address?: string;
    after_id?: number;
    order?: "desc" | "asc";
    signed?: boolean;
  }
): Promise<APIWarpperProps<GetEventsProps>> {
  return await subscanFetch(hostname, "api/v2/scan/events", params);
}

export const useEvents = (
  hostname = "",
  params: {
    page: number;
    row: number;
    module?: string;
    event_id?: string;
    block_num?: number;
    extrinsic_index?: string;
    block_range?: string;
    finalized?: boolean;
    phase?: 0 | 1 | 2;
    address?: string;
    after_id?: number;
    order?: "desc" | "asc";
    signed?: boolean;
  }
) => {
  return useSWR<APIWarpperProps<GetEventsProps>, Error>(
    [hostname, "api/v2/scan/events", params],
    swrFetcher
  );
};

/***** Logs *****/
export interface GetLogsProps {
  count: number;
  logs: Log[];
}

export async function getLogs(
  hostname = "",
  params: { page: number; row: number; engine?: string; type?: string; }
): Promise<APIWarpperProps<GetLogsProps>> {
  return await subscanFetch(hostname, "api/v2/scan/logs", params);
}

