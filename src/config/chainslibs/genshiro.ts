import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Genshiro: Chain = {
  id: 'genshiro',
  nativeTokenUniqueId: 'GENS',
  name: 'Genshiro',
  type: 'mainnet',
  theme: {
    colors: ['#D86E3D', '#ebb69e', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#D86E3D', 6),
  },
  gtag: 'G-29NR416TMB',
  api: 'https://genshiro.webapi.subscan.io',
  domain: 'https://genshiro.subscan.io',
  subdomain: ['genshiro'],
  social: {
    telegram: 'https://t.me/genshiro_official',
    twitter: 'https://twitter.com/GenshiroDeFi',
    github: 'https://github.com/equilibrium-eosdt',
    price: 'https://www.coingecko.com/en/coins/genshiro',
  },
  donate: 'cZi9Py5wwdvtu3GD9STP1LsAJsYWhBumujPy5rJHnBuxeuQ7F',
  modules: {
    BOUNTY: false,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: false,
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
    VESTING: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: false,
  },
}
