import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Subspace: Chain = {
  id: 'subspace',
  nativeTokenUniqueId: 'tSSC',
  name: 'Subspace Gemini 3D',
  type: 'testnet',
  theme: {
    colors: ['#502D89', '#9D84C6', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#502D89', 6),
  },
  gtag: 'G-1C4ZZ07QGG',
  api: 'https://subspace.webapi.subscan.io',
  domain: 'https://subspace.subscan.io',
  subdomain: ['subspace'],
  social: {
    telegram: 'https://t.me/subspace_network ',
    twitter: 'https://twitter.com/NetworkSubspace ',
    github: 'https://github.com/subspace ',
    price: '',
  },
  donate: 'st9gjWgsqgULbhvKe52QVYb9wVynuskJPJNg9tCeeuYQLnJJv',
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
    PARATHREAD: false,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
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
