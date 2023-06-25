import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const BifrostTestnet: Chain = {
  id: 'bifrost-testnet',
  nativeTokenUniqueId: 'BNC',
  name: 'Bifrost Testnet',
  type: 'testnet',
  theme: {
    colors: ['#5a25f0', '#b499ff', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#5a25f0', 6),
  },
  gtag: 'G-BJ9TWZZJ1C',
  api: 'https://bifrost-testnet.webapi.subscan.io',
  domain: 'https://bifrost-testnet.subscan.io',
  subdomain: ['bifrost-testnet'],
  social: {
    telegram: 'https://t.me/bifrost_finance',
    twitter: 'https://twitter.com/bifrost_finance',
    github: 'https://github.com/bifrost-finance',
    price: '',
  },
  donate: 'f9W8Ufs9LQDLBnMbh69jy6aVuFrxT9PVFFhT3XXSqfgpHr9',
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
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
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
}
