import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Kulupu: Chain = {
  id: 'kulupu',
  nativeTokenUniqueId: 'KLP',
  name: 'Kulupu',
  type: 'mainnet',
  theme: {
    colors: ['#18B06B', '#71CDA4', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#18B06B', 6),
  },
  gtag: 'G-N20B8D58HC',
  api: 'https://kulupu.webapi.subscan.io',
  domain: 'https://kulupu.subscan.io',
  subdomain: ['kulupu'],
  social: {
    telegram: ' ',
    twitter: 'https://twitter.com/home ',
    github: 'https://github.com/kulupu/kulupu ',
    price: 'https://www.coingecko.com/en/coins/kulupu',
  },
  donate: '2f26iQ5tzF9Utmpzf1tPWykpxkgoWHSbNeo1bsxY5PcZdbZb',
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
