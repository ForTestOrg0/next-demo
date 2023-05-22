import { APIWarpperProps, Block, TokenMetadata } from "@/types/api";
import { subscanFetch } from "./fetcher";

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
  params: { page: number; row: number; }
): Promise<APIWarpperProps<GetBlocksProps>> {
  return await subscanFetch(hostname, "api/v2/scan/blocks", params);
}

/***** Block Detail *****/
export interface GetBlockProps {
  data: Block[];
}

export async function getBlock(
  hostname = "",
  params: { page: number; row: number; }
): Promise<APIWarpperProps<GetBlocksProps>> {
  return await subscanFetch(hostname, "api/scan/block", params);
}
