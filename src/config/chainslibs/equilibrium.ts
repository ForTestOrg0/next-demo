import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Equilibrium: Chain = {
  id: 'equilibrium',
  nativeTokenUniqueId: 'EQ',
  name: 'Equilibrium',
  type: 'mainnet',
  theme: {
    colors: ['#4490F7', '#87C5FC', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#4490F7', 6),
  },
  gtag: 'G-BJCVGXCLCE',
  api: 'https://equilibrium.webapi.subscan.io',
  domain: 'https://equilibrium.subscan.io',
  subdomain: ['equilibrium'],
  social: {
    telegram: 'https://t.me/equilibrium_eosdt_official ',
    twitter: 'https://twitter.com/EquilibriumDeFi ',
    github: 'https://github.com/equilibrium-eosdt ',
    price: 'https://www.coingecko.com/en/coins/equilibrium',
  },
  donate: 'cg6XcWabkEYsR326qQXgXWYBWEbfWhe5DobRVE3T3pe1rvEKy',
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
