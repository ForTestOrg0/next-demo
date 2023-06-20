import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const PangolinParachain: Chain = {
  id: 'pangolin-parachain',
  nativeTokenUniqueId: 'PRING',
  name: 'Pangolin Parachain',
  type: 'testnet',
  theme: {
    colors: ['#512DBC', '#AE94EC', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#512DBC', 6),
  },
  gtag: 'G-0EQWR90J5N',
  api: 'https://pangolin-parachain.webapi.subscan.io',
  domain: 'https://pangolin-parachain.subscan.io',
  subdomain: ['pangolin-parachain'],
  social: {
    telegram: 'https://t.me/DarwiniaNetwork ',
    twitter: 'https://twitter.com/DarwiniaNetwork ',
    github: 'https://github.com/darwinia-network ',
    price: '',
  },
  donate: '5FVFSCANyotNxJM4Crm1LQfsmNQSw3p8H7CRbegN7d5Ex91y',
  modules: {
    SYSTEM_ACCOUNT: false,
    VESTING: false,
    GRANDPA_VOTE: false,
    BOUNTY: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
    V2_REWARD: false,
    MULTISIG_TOOL: false,
    EVM_NETWORK: false,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    PARATHREAD: true,
    REFERENDA_V2: false,
    FELLOWSHIP: false,
    V2_API: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    TREASURY_CHART: true,
    VALIDATOR: false,
    SS58: true,
  },
}
