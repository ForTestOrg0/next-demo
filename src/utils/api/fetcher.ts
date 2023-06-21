import { getChainConfigBySubdomain } from '@/config/chains'
import { APIWarpperProps } from '@/types/api'

export function unwrap<T>(apiData: APIWarpperProps<T> | undefined): T | null {
  if (!apiData || apiData.code !== 0) {
    return null
  }

  return apiData.data
}

export async function subscanFetch(subdomain: string, path: string, params = {}) {
  try {
    const chainConf = getChainConfigBySubdomain(subdomain)
    // console.info(`subscanFetch(${path}):`)
    console.info({ subdomain, api: chainConf?.api, path, params })

    const res = await fetch(`${chainConf?.api}/${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params || {}),
    })
    const data = await res.json()
    // console.info(`subscanFetch(${path}) result:`)
    // console.info(data)
    return data
  } catch (error) {
    console.log('fetch error', error)
    return {
      code: 1,
      data: null,
    }
  }
}

export const swrFetcher = async ([hostname, path, params]: [string, string, object]) => {
  return await subscanFetch(hostname, path, params)
}
