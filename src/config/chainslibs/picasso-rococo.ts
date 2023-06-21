import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const PicassoRococo: Chain = {
  id: 'picasso-rococo',
  nativeTokenUniqueId: 'PICA',
  name: 'Picasso Rococo',
  type: 'testnet',
  theme: {
    colors: ['#FF8500', '#FFC27F', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#FF8500', 6),
  },
  gtag: 'G-1RTL6QKW17',
  api: 'https://picasso-rococo.webapi.subscan.io',
  domain: 'https://picasso-rococo.subscan.io',
  subdomain: ['picasso-rococo'],
  social: {
    telegram: ' ',
    twitter: 'https://twitter.com/ComposableFin ',
    github: 'https://github.com/ComposableFi/ ',
    price: '',
  },
  donate: '5wzsF8xCfr1U3iBJYavAyiXrHmQWKLDmbh5LuSBUMcEevAft',
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
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
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
