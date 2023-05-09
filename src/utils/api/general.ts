import { APIWarpperProps, TokenMetadata } from "@/types/api";
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
