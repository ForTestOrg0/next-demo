import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Phala: Chain = {
  id: 'phala',
  nativeTokenUniqueId: 'PHA',
  name: 'Phala',
  type: 'mainnet',
  theme: {
    colors: ['#a4df00', '#cdeb7c', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#a4df00', 6),
  },
  gtag: '',
  api: 'https://phala.webapi.subscan.io',
  domain: 'https://phala.subscan.io',
  subdomain: ['phala'],
  social: {
    telegram: 'https://t.me/phalanetwork ',
    twitter: 'https://twitter.com/PhalaNetwork ',
    github: 'https://github.com/Phala-Network ',
    price: 'https://www.coingecko.com/en/coins/phala-network',
  },
  donate: '443LLHfYNKPf5bVVLUCiobUn1YgvGrFt1pYrDSxkZMwPa3Bq',
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
    TREASURY_CHART: true,
    VALIDATOR: false,
  },
}
