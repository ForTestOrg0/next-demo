import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Polkadot: Chain = {
  id: 'polkadot',
  nativeTokenUniqueId: 'DOT',
  name: 'Polkadot',
  type: 'mainnet',
  theme: {
    colors: ['#E90979', '#F081B9', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#E90979', 6),
  },
  gtag: 'G-1HVHK949MH',
  api: 'https://polkadot.webapi.subscan.io',
  domain: 'https://polkadot.subscan.io',
  subdomain: ['polkadot'],
  social: {
    telegram: 'https://t.me/polkadotofficial',
    twitter: 'https://twitter.com/Polkadot',
    github: 'https://github.com/paritytech/polkadot',
    price: 'https://www.coingecko.com/en/coins/polkadot',
  },
  donate: '14RYaXRSqb9rPqMaAVp1UZW2czQ6dMNGMbvukwfifi6m8ZgZ',
  modules: {
    BOUNTY: true,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    EVM_NETWORK: false,
    FELLOWSHIP: true,
    GRANDPA_VOTE: true,
    MULTISIG_TOOL: true,
    NOMINATION_POOL: true,
    NOMINATE_FEATURE: true,
    PARACHAIN: true,
    PARATHREAD: false,
    POLKASSEMBLY_LINK: true,
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
    REFERENDA_V2: true,
    SYSTEM_ACCOUNT: false,
    V2_API: false,
    V2_REWARD: true,
    VESTING: true,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: true,
  },
}
