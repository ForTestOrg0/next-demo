import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Bajun: Chain = {
  id: 'bajun',
  nativeTokenUniqueId: 'BAJU',
  name: 'Bajun',
  type: 'mainnet',
  theme: {
    colors: ['#E35E5B', '#F1AEAD', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#E35E5B', 6),
  },
  gtag: 'G-WZREP9YEMD',
  api: 'https://bajun.webapi.subscan.io',
  domain: 'https://bajun.subscan.io',
  subdomain: ['bajun'],
  social: {
    telegram: 'https://t.me/ajunacommunity',
    twitter: 'https://twitter.com/AjunaNetwork',
    github: 'https://github.com/ajuna-network/',
    price: 'https://www.coingecko.com/en/coins/ajuna-network',
  },
  donate: 'bUMFXq78vbBXMrzKaJNkvZeHUURhyLXwPx8BiBGubAwP2CHEG',
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
