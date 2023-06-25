import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Shadow: Chain = {
  id: 'shadow',
  nativeTokenUniqueId: 'CSM',
  name: 'Crust Shadow',
  type: 'mainnet',
  theme: {
    colors: ['#FFA940', '#FFDDB3', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#FFA940', 6),
  },
  gtag: 'G-2Z0RY411ZX',
  api: 'https://shadow.webapi.subscan.io',
  domain: 'https://shadow.subscan.io',
  subdomain: ['shadow'],
  social: {
    telegram: 'https://t.me/CrustNetwork',
    twitter: 'https://twitter.com/CrustNetwork',
    github: 'https://github.com/crustio',
    price: 'https://www.coingecko.com/en/coins/crust-shadow',
  },
  donate: 'cTKmBRbJ93JvP3WKTUP5VBC97WVMsgBUbfCWgUZ8WZBuSty4u',
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
