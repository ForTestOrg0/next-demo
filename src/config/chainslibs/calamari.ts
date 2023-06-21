import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Calamari: Chain = {
  id: 'calamari',
  nativeTokenUniqueId: 'KMA',
  name: 'Calamari',
  type: 'mainnet',
  theme: {
    colors: ['#FF9F1A', '#FCCC89', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#FF9F1A', 6),
  },
  gtag: 'G-CE4HCX97NG',
  api: 'https://calamari.webapi.subscan.io',
  domain: 'https://calamari.subscan.io',
  subdomain: ['calamari'],
  social: {
    telegram: 'https://t.me/mantanetworkofficial ',
    twitter: 'https://twitter.com/mantanetwork ',
    github: 'https://twitter.com/CalamariNetwork ',
    price: 'https://www.coingecko.com/en/coins/calamari-network',
  },
  donate: 'dmxMmwX7nCkcazb1j5GhjBGPTs9Bhpw4LXZyWyV3k9tZw31uK',
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
    SYSTEM_ACCOUNT: true,
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
}
