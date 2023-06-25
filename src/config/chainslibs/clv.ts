import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Clv: Chain = {
  id: 'clv',
  nativeTokenUniqueId: 'CLV',
  name: 'Clover Parachain',
  type: 'mainnet',
  theme: {
    colors: ['#25E5DA', '#92F2EC', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#25E5DA', 6),
  },
  gtag: 'G-3HWKS4132B',
  api: 'https://clv.webapi.subscan.io',
  domain: 'https://clv.subscan.io',
  subdomain: ['clv'],
  social: {
    telegram: 'https://t.me/clover_en/',
    twitter: 'https://twitter.com/clover_finance',
    github: 'https://github.com/clover-network',
    price: 'https://www.coingecko.com/en/coins/clover-finance',
  },
  donate: 'jHFWb6Dhx3mLSnRaBQyojWuRG1rnfTPyv9Sjfih3Dp9LHcsAt',
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
    TREASURY_CHART: false,
    VALIDATOR: false,
  },
}
