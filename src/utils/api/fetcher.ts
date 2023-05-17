import { getChainConfigBySubdomain } from "@/config/chains";
import { APIWarpperProps } from "@/types/api";
import { getSubdomain } from "../url";

export function unwrap<T>(apiData: APIWarpperProps<T> | undefined): T | null {
  if (!apiData || apiData.code !== 0) {
    return null;
  }

  return apiData.data;
}

export async function subscanFetch(
  hostname: string,
  path: string,
  params = {}
) {
  const chainConf = getChainConfigBySubdomain(getSubdomain(hostname));
  console.info(`subscanFetch(${path}):`);
  console.info({ api: chainConf?.api, path, params });
  
  const res = await fetch(`${chainConf?.api}/${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params || {}),
  });
  const data = await res.json();
  // console.info(`subscanFetch(${path}) result:`);
  // console.info(data);
  return data;
}

export const swrFetcher = async ([hostname, path, params]: [
  string,
  string,
  object
]) => {
  return await subscanFetch(hostname, path, params);
};
