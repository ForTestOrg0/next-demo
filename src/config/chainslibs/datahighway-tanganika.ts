import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const DatahighwayTanganika: Chain = {
  id: 'datahighway-tanganika',
  nativeTokenUniqueId: 'DHX',
  name: 'Datahighway Tanganika',
  type: 'mainnet',
  theme: {
    colors: ['#4765EA', '#A3B2F4', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#4765EA', 6),
  },
  gtag: 'G-WWWF7HJZ92',
  api: 'https://datahighway.webapi.subscan.io',
  domain: 'https://datahighway.subscan.io',
  subdomain: ['datahighway'],
  social: {
    telegram: '',
    twitter: 'https://twitter.com/DataHighway_DHX',
    github: '',
    price: 'https://www.coingecko.com/en/coins/datahighway',
  },
  donate: '4MQK7GHkXC1qYmht44qnwJH3x17oSQ9SaeDF4VtewvirREuw',
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
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: false,
    V2_API: false,
    V2_REWARD: false,
    VESTING: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: false,
  },
}
