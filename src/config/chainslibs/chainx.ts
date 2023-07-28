import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Chainx: Chain = {
  id: 'chainx',
  nativeTokenUniqueId: 'PCX',
  name: 'ChainX',
  type: 'mainnet',
  theme: {
    colors: ['#2E2E2E', '#929393', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#2E2E2E', 6),
  },
  gtag: 'G-6WG30F4WTZ',
  api: 'https://chainx.webapi.subscan.io',
  domain: 'https://chainx.subscan.io',
  subdomain: ['chainx'],
  social: {
    telegram: 'https://t.me/chainx_org',
    twitter: 'https://twitter.com/chainx_org',
    github: 'https://github.com/chainx-org/chainx',
    price: 'https://www.coingecko.com/en/coins/chainx',
    website: 'https://chainx.org/',
    whitePaper: '',
  },
  donate: '5T4ZxBFBkPdqGR9z1vX46DCj4Lh33R5AezJgq1xy3LGDWYBp',
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
  disable: true,
}
