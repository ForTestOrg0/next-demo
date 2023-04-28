import { APIWarpperProps } from "@/types/api";

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
  let domain = "polkadot";
  if (hostname.indexOf("localhost") > -1) domain = "kusama";
  if (hostname.indexOf("kusama") > -1) domain = "kusama";
  if (hostname.indexOf("darwinia") > -1) domain = "darwinia";
  console.info(`subscanFetch(${path}):`);
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
  console.info(`subscanFetch(${path}) result:`);
  console.info(data);
  return data;
}

export const swrFetcher = async ([hostname, path, params]: [
  string,
  string,
  object
]) => {
  return await subscanFetch(hostname, path, params);
};
