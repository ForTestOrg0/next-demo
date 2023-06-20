import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Edgeware: Chain = {
  id: 'edgeware',
  nativeTokenUniqueId: 'EDG',
  name: 'Edgeware',
  type: 'mainnet',
  theme: {
    colors: ['#151515', '#525252', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#151515', 6),
  },
  gtag: 'G-T5XNJ8357H',
  api: 'https://edgeware.webapi.subscan.io',
  domain: 'https://edgeware.subscan.io',
  subdomain: ['edgeware'],
  social: {
    telegram: 'https://t.me/heyedgeware ',
    twitter: 'https://twitter.com/heyedgeware ',
    github: 'https://github.com/hicommonwealth ',
    price: 'https://www.coingecko.com/en/coins/edgeware',
  },
  donate: 'kwAPUDGXdGwVFBpWDyB7sN19PQA1dmugBoq4jApuhGB6sAd',
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
