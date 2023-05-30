import { getChainConfigBySubdomain } from '@/config/chains'
import { getSubdomain } from './url'
import { getTokenUniqueId, unwrap } from './api'
import { ChainProps, Token } from '@/types/page'

export async function getChainProps(hostname = ''): Promise<ChainProps | null> {
  const chainConf = getChainConfigBySubdomain(getSubdomain(hostname))
  if (!chainConf) return null

  const tokens = await getTokenUniqueId(hostname, {})

  const unwrapedToken = unwrap(tokens)
  if (!unwrapedToken) return null
  let nativeToken
  for (const element in unwrapedToken.detail) {
    if (unwrapedToken.detail[element].asset_type === 'native') {
      nativeToken = unwrapedToken.detail[element]
      break
    }
  }

  // const nativeToken = unwrapedToken.detail[chainConf.nativeTokenUniqueId]
  if (!nativeToken) return null
  const nativeTokenConf: Token = {
    decimals: nativeToken.token_decimals,
    symbol: nativeToken.symbol,
  }
  return {
    chainConf,
    tokens: unwrapedToken,
    nativeToken,
    nativeTokenConf,
  }
}
