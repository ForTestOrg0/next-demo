import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Pioneer: Chain = {
  id: 'pioneer',
  nativeTokenUniqueId: 'NEER',
  name: 'Pioneer',
  type: 'mainnet',
  theme: {
    colors: ['#E53295', '#F298CA', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#E53295', 6),
  },
  gtag: 'G-EPTQD41EZ9',
  api: 'https://pioneer.webapi.subscan.io',
  domain: 'https://pioneer.subscan.io',
  subdomain: ['pioneer'],
  social: {
    telegram: 'https://t.me/BitCountryOfficialTG ',
    twitter: 'https://twitter.com/BC_Pioneer ',
    github: 'https://github.com/bit-country ',
    price: 'https://www.coingecko.com/en/coins/metaverse-network-pioneer',
  },
  donate: 'WWasAMueAC7BBRhbiAueRYmHxZ3Hw3yzHwUV3r49FptWkYPx6',
  modules: {
    SYSTEM_ACCOUNT: false,
    VESTING: true,
    GRANDPA_VOTE: true,
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
    PARATHREAD: true,
    REFERENDA_V2: false,
    FELLOWSHIP: false,
    V2_API: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    TREASURY_CHART: true,
    VALIDATOR: false,
    SS58: true,
  },
}
