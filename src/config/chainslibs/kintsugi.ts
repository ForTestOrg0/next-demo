import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Kintsugi: Chain = {
  id: 'kintsugi',
  nativeTokenUniqueId: 'KINT',
  name: 'Kintsugi',
  type: 'mainnet',
  theme: {
    colors: ['#041333', '#818999', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#041333', 6),
  },
  gtag: 'G-1F3XZPBG04',
  api: 'https://kintsugi.webapi.subscan.io',
  domain: 'https://kintsugi.subscan.io',
  subdomain: ['kintsugi'],
  social: {
    telegram: '',
    twitter: 'https://twitter.com/kintsugi_btc',
    github: 'https://github.com/interlay',
    price: 'https://www.coingecko.com/en/coins/kintsugi',
  },
  donate: 'a3ddhYfHgyzUpPKx1T1UEXbpChBACqbwuaNvs9ekzL5SntP4g',
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
    TREASURY_CHART: false,
    VALIDATOR: false,
  },
}
