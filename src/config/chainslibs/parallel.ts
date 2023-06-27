import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Parallel: Chain = {
  id: 'parallel',
  nativeTokenUniqueId: 'PARA',
  name: 'Parallel',
  type: 'mainnet',
  theme: {
    colors: ['#0C3EE3', '#859EF1', '#e6e6e6'],
    gradient: generateGradientColor('#d7d7d7', '#0C3EE3', 6),
  },
  gtag: 'G-ZT0MB54KWM',
  api: 'https://parallel.webapi.subscan.io',
  domain: 'https://parallel.subscan.io',
  subdomain: ['parallel'],
  social: {
    telegram: 'https://t.me/parallelfi_community',
    twitter: 'https://twitter.com/ParallelFi',
    github: 'https://github.com/parallel-finance',
    price: 'https://www.coingecko.com/en/coins/parallel-finance',
  },
  donate: 'p8EN6yxPJK4DCbinVxF6crWKszFUi1V7dL8mQDS55g3mQ8r1L',
  parachain: {
    id: 2012,
    relaychain: 'polkadot',
  },
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
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
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
    VALIDATOR: false,
  },
}
