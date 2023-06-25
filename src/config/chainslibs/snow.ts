import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Snow: Chain = {
  id: 'snow',
  nativeTokenUniqueId: 'ICZ',
  name: 'SNOW',
  type: 'mainnet',
  theme: {
    colors: ['#282180', '#9D84C6', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#282180', 6),
  },
  gtag: 'G-CTZB6EBJXR',
  api: 'https://snow.webapi.subscan.io',
  domain: 'https://snow.subscan.io',
  subdomain: ['snow'],
  social: {
    telegram: '',
    twitter: 'https://twitter.com/icenetwork_io',
    github: '',
    price: '',
  },
  donate: 'ni1gZzUF5dKYHuMSFdYD3hyBjSReQnUGju6HDGE8z9TocEZeP',
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
    PARATHREAD: true,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
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
