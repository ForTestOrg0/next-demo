import { Chain } from './networks/template'
import { CHAINS } from './networks'

export { CHAINS }
export function getChainConfigBySubdomain(name: string): Chain | null {
  const result = CHAINS.filter((chain) => chain.subdomain.indexOf(name) > -1)
  if (result.length > 0) {
    return result[0]
  }
  return CHAINS[0]
}

export function getChainConfigByParachainId(parachainId: number | string, relaychain: RelaychainName): Chain | null {
  const result = CHAINS.filter((chain) => chain.parachain?.id === parachainId && chain.parachain.relaychain === relaychain)
  if (result.length > 0) {
    return result[0]
  }
  return null
}
