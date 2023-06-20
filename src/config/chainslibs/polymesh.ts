import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Polymesh: Chain = {
  id: 'polymesh',
  nativeTokenUniqueId: 'POLYX',
  name: 'Polymesh',
  type: 'mainnet',
  theme: {
    colors: ['#EC4673', '#F5A2B9', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#EC4673', 6),
  },
  gtag: 'G-42KWXWPGBF',
  api: 'https://polymesh.webapi.subscan.io',
  domain: 'https://polymesh.subscan.io',
  subdomain: ['polymesh'],
  social: {
    telegram: ' ',
    twitter: 'https://twitter.com/PolymeshNetwork ',
    github: 'https://github.com/PolymeshAssociation ',
    price: 'https://www.coingecko.com/en/coins/polymesh',
  },
  donate: '2FsTgRvHT5eaGYD92tNJ1Nh8Np7dHYvWctaV99PLDyEcWAVc',
  modules: {
    SYSTEM_ACCOUNT: false,
    VESTING: false,
    GRANDPA_VOTE: false,
    BOUNTY: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    POLKASSEMBLY_LINK: false,
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
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
