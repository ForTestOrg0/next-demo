import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Crab: Chain = {
  id: 'crab',
  nativeTokenUniqueId: 'CRAB',
  name: 'Darwinia Crab',
  type: 'mainnet',
  theme: {
    colors: ['#512DBC', '#AE94EC', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#512DBC', 6),
  },
  gtag: 'G-CP7HRJLKYD',
  api: 'https://crab1.webapi.subscan.io',
  domain: 'https://crab1.subscan.io',
  subdomain: ['crab1'],
  social: {
    telegram: 'https://t.me/DarwiniaNetwork',
    twitter: 'https://twitter.com/DarwiniaNetwork',
    github: 'https://github.com/darwinia-network',
    price: '',
  },
  donate: '5FVFSCANyotNxJM4Crm1LQfsmNQSw3p8H7CRbegN7d5Ex91y',
  modules: {
    BOUNTY: true,
    CONTRACT: true,
    CONTRACT_SOURCIFY: true,
    ETH_ADDRESS: false,
    EVM: true,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: true,
    MULTISIG_TOOL: true,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: true,
    PARACHAIN: false,
    PARATHREAD: false,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: true,
    V2_API: false,
    V2_REWARD: false,
    VESTING: true,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: true,
  },
}
