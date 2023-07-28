import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Maxwell: Chain = {
  id: 'maxwell',
  nativeTokenUniqueId: 'CRU',
  name: 'Crust Maxwell',
  type: 'mainnet',
  theme: {
    colors: ['#ED6E2D', '#F3B393', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#ED6E2D', 6),
  },
  gtag: 'G-S5BBXL1G76',
  api: 'https://maxwell.webapi.subscan.io',
  domain: 'https://maxwell.subscan.io',
  subdomain: ['maxwell'],
  social: {
    telegram: 'https://t.me/CrustNetwork',
    twitter: 'https://twitter.com/CrustNetwork',
    github: 'https://github.com/crustio',
    price: '',
    website: 'https://crust.network/',
    whitePaper: '',
  },
  donate: '5FVFSCANyotNxJM4Crm1LQfsmNQSw3p8H7CRbegN7d5Ex91y',
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
    PARATHREAD: false,
    POLKASSEMBLY_LINK: false,
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: false,
    V2_API: true,
    V2_REWARD: false,
    VESTING: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: true,
  },
  disable: true,
}
