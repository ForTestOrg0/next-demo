import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const DockPoa: Chain = {
  id: 'dock-poa',
  nativeTokenUniqueId: 'DCK',
  name: 'Dock PoA',
  type: 'mainnet',
  theme: {
    colors: ['#1B83E3', '#8DC1F1', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#1B83E3', 6),
  },
  gtag: '',
  api: 'https://dock-poa.webapi.subscan.io',
  domain: 'https://dock-poa.subscan.io',
  subdomain: ['dock-poa'],
  social: {
    telegram: 'https://t.me/dockio ',
    twitter: 'https://twitter.com/docknetwork ',
    github: 'https://github.com/docknetwork ',
    price: 'https://www.coingecko.com/en/coins/dock',
  },
  donate: '3Fk4GMLKHzPqq8Fn6DAXnPMNqfYZqPDiWJ7oHypLrXBVKcA1',
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
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
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
    VALIDATOR: true,
  },
}