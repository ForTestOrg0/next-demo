import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Nodle: Chain = {
  id: 'nodle',
  nativeTokenUniqueId: 'NODL',
  name: 'Nodle',
  type: 'mainnet',
  theme: {
    colors: ['#51AB85', '#A8D5C1', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#51AB85', 6),
  },
  gtag: 'G-2YKHBMMJ1K',
  api: 'https://nodle.webapi.subscan.io',
  domain: 'https://nodle.subscan.io',
  subdomain: ['nodle'],
  social: {
    telegram: 'https://telegram.me/nodlecommunity/ ',
    twitter: 'https://twitter.com/NodleNetwork ',
    github: 'https://github.com/NodleCode ',
    price: 'https://www.coingecko.com/en/coins/nodle-network',
  },
  donate: '4kYx9ETN4MWkB1KjgCMtSuLkXwgyf8fXLQRmXETroM6oYFqJ',
  modules: {
    SYSTEM_ACCOUNT: false,
    VESTING: false,
    GRANDPA_VOTE: false,
    BOUNTY: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    POLKASSEMBLY_LINK: false,
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
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
    TREASURY_CHART: false,
    VALIDATOR: false,
    SS58: true,
  },
}
