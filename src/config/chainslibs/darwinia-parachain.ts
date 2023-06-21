import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const DarwiniaParachain: Chain = {
  id: 'darwinia-parachain',
  nativeTokenUniqueId: 'RING',
  name: 'Darwinia2',
  type: 'mainnet',
  theme: {
    colors: ['#EA3382', '#F499C0', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#EA3382', 6),
  },
  gtag: 'G-MYEDJ9WZY6',
  api: 'https://darwinia.webapi.subscan.io',
  domain: 'https://darwinia.subscan.io',
  subdomain: ['darwinia'],
  social: {
    telegram: 'https://t.me/DarwiniaNetwork ',
    twitter: 'https://twitter.com/DarwiniaNetwork ',
    github: 'https://github.com/darwinia-network ',
    price: 'https://www.coingecko.com/en/coins/darwinia-network-native-token',
  },
  donate: '0x9c0fEf6b48Cb0B16EDc72a61d9503A78782c19e2',
  modules: {
    BOUNTY: false,
    CONTRACT: true,
    CONTRACT_SOURCIFY: true,
    ETH_ADDRESS: true,
    EVM: true,
    EVM_NETWORK: true,
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
    SS58: false,
    TREASURY_CHART: true,
    VALIDATOR: false,
  },
}
