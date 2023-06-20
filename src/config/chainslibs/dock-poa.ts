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
    SYSTEM_ACCOUNT: false,
    VESTING: false,
    GRANDPA_VOTE: false,
    BOUNTY: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
    V2_REWARD: false,
    MULTISIG_TOOL: false,
    EVM_NETWORK: false,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    PARATHREAD: false,
    REFERENDA_V2: false,
    FELLOWSHIP: false,
    V2_API: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    TREASURY_CHART: true,
    VALIDATOR: true,
    SS58: true,
  },
}
