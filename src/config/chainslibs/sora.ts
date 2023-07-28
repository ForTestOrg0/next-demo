import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Sora: Chain = {
  id: 'sora',
  nativeTokenUniqueId: 'XOR',
  name: 'SORA',
  type: 'mainnet',
  theme: {
    colors: ['#E5232C', '#F37C7C', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#E5232C', 6),
  },
  gtag: 'G-RQYXVZPLN8',
  api: 'https://sora.webapi.subscan.io',
  domain: 'https://sora.subscan.io',
  subdomain: ['sora'],
  social: {
    telegram: '',
    twitter: 'https://twitter.com/sora_xor',
    github: 'https://github.com/sora-xor',
    price: 'https://www.coingecko.com/en/coins/sora',
    website: 'https://sora.org/',
    whitePaper: '',
  },
  parachain: {
    id: 2011,
    relaychain: 'kusama',
  },
  donate: 'cnUuq45FYqAqw2mzXNbz3gDChbepLDNNXsnstbncKTN54vsrK',
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
    PARATHREAD: false,
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
    TREASURY_CHART: false,
    VALIDATOR: true,
  },
  disable: false,
}
