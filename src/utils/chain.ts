import { getChainConfigBySubdomain } from '@/config/chains'
import { getSubdomain } from './url'
import { getMetadata, getTokenUniqueId, unwrap } from './api'
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

  const metadata = await getMetadata(hostname)

  const unwrapedMetadata = unwrap(metadata)
  if (!unwrapedMetadata) return null

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
    metadata: {
      addressType: unwrapedMetadata.addressType,
      avgBlockTime: parseInt(unwrapedMetadata.avgBlockTime),
      blockNum: parseInt(unwrapedMetadata.blockNum),
      blockTime: parseInt(unwrapedMetadata.blockTime),
      bootTime: parseInt(unwrapedMetadata.bootTime),
      commissionAccuracy: parseInt(unwrapedMetadata.commissionAccuracy),
      count_account: parseInt(unwrapedMetadata.count_account),
      count_event: parseInt(unwrapedMetadata.count_event),
      count_signed_extrinsic: parseInt(unwrapedMetadata.count_signed_extrinsic),
      count_transfer: parseInt(unwrapedMetadata.count_transfer),
      currentPools: parseInt(unwrapedMetadata.currentPools),
      current_era: parseInt(unwrapedMetadata.current_era),
      current_validator_count: parseInt(unwrapedMetadata.current_validator_count),
      epochLength: parseInt(unwrapedMetadata.epochLength),
      epochProcess: parseInt(unwrapedMetadata.epochProcess),
      eraLength: parseInt(unwrapedMetadata.eraLength),
      eraProcess: parseInt(unwrapedMetadata.eraProcess),
      exist_roles: unwrapedMetadata.exist_roles.split(','),
      finalized_blockNum: parseInt(unwrapedMetadata.finalized_blockNum),
      history_depth: parseInt(unwrapedMetadata.history_depth),
      implName: unwrapedMetadata.implName,
      maxNominatorRewardedPerValidator: parseInt(unwrapedMetadata.maxNominatorRewardedPerValidator),
      maxPools: parseInt(unwrapedMetadata.maxPools),
      networkNode: unwrapedMetadata.networkNode,
      specVersion: parseInt(unwrapedMetadata.specVersion),
      unbondDuration: parseInt(unwrapedMetadata.unbondDuration),
      validator_count: parseInt(unwrapedMetadata.validator_count),
      waiting_validator: parseInt(unwrapedMetadata.waiting_validator),
    },
  }
}
