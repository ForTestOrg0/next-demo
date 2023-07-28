import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Basilisk: Chain = {
  id: 'basilisk',
  nativeTokenUniqueId: 'BSX',
  name: 'Basilisk',
  type: 'mainnet',
  theme: {
    colors: ['#34323C', '#99989D', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#34323C', 6),
  },
  gtag: 'G-E98K4GEHED',
  api: 'https://basilisk.webapi.subscan.io',
  domain: 'https://basilisk.subscan.io',
  subdomain: ['basilisk'],
  social: {
    telegram: 'https://t.me/bsx_fi',
    twitter: 'https://twitter.com/bsx_finance',
    github: 'https://github.com/galacticcouncil',
    price: 'https://www.coingecko.com/en/coins/basilisk',
    website: 'https://bsx.fi/',
    whitePaper: '',
  },
  parachain: {
    id: 2090,
    relaychain: 'kusama',
  },
  donate: 'bXk1xcqYdf5G5Az5M6UfjQHKvSvZyCmM6N72B6Wmpv1bbmG7e',
  modules: {
    BOUNTY: false,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: true,
    MULTISIG_TOOL: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    PARATHREAD: true,
    POLKASSEMBLY_LINK: false,
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: false,
    V2_API: false,
    V2_REWARD: false,
    VESTING: true,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: false,
  },
  disable: false,
}
