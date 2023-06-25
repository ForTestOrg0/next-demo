import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Shibuya: Chain = {
  id: 'shibuya',
  nativeTokenUniqueId: 'SBY',
  name: 'Shibuya',
  type: 'testnet',
  theme: {
    colors: ['#4C68D8', '#A2B0E8', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#4C68D8', 6),
  },
  gtag: 'G-81F03NPDEK',
  api: 'https://shibuya.webapi.subscan.io',
  domain: 'https://shibuya.subscan.io',
  subdomain: ['shibuya'],
  social: {
    telegram: 'https://t.me/PlasmOfficial ',
    twitter: 'https://twitter.com/AstarNetwork ',
    github: 'https://github.com/AstarNetwork/Astar ',
    price: '',
  },
  donate: 'ZMqsV8Tm3XVB8NthAD8N4q9rR7ZuGWsJJhZqMtDyz5CXyX7',
  modules: {
    BOUNTY: false,
    CONTRACT: true,
    CONTRACT_SOURCIFY: true,
    ETH_ADDRESS: true,
    EVM: true,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: true,
    MULTISIG_TOOL: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    PARATHREAD: false,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: false,
    V2_API: true,
    V2_REWARD: false,
    VESTING: true,
    WASM_CONTRACT: true,
    WASM_CONTRACT_SOURCIFY: true,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: false,
    VALIDATOR: false,
  },
}