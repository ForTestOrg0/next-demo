import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Alephzero: Chain = {
  id: 'alephzero',
  nativeTokenUniqueId: 'AZERO',
  name: 'Aleph Zero',
  type: 'mainnet',
  theme: {
    colors: ['#00CCAB', '#B2F8EE', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#00CCAB', 6),
  },
  gtag: 'G-ZS79RF8P4F',
  api: 'https://alephzero.webapi.subscan.io',
  domain: 'https://alephzero.subscan.io',
  subdomain: ['alephzero'],
  social: {
    telegram: 'https://t.me/AlephZeroFoundation ',
    twitter: 'https://twitter.com/Aleph__Zero ',
    github: 'https://github.com/aleph-zero-foundation ',
    price: 'https://www.coingecko.com/en/coins/aleph-zero',
  },
  donate: '5FVFSCANyotNxJM4Crm1LQfsmNQSw3p8H7CRbegN7d5Ex91y',
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
    NOMINATION_POOL: true,
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
    WASM_CONTRACT: true,
    WASM_CONTRACT_SOURCIFY: true,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: true,
  },
}
