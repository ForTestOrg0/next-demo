import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Statemine: Chain = {
  id: 'statemine',
  nativeTokenUniqueId: 'KSM',
  name: 'Statemine',
  type: 'mainnet',
  theme: {
    colors: ['#000000', '#7C7C7C', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#000000', 6),
  },
  gtag: 'G-MVLN25GD9P',
  api: 'https://statemine.webapi.subscan.io',
  domain: 'https://statemine.subscan.io',
  subdomain: ['statemine'],
  social: {
    telegram: ' ',
    twitter: ' ',
    github: ' ',
    price: 'https://www.coingecko.com/en/coins/kusama',
  },
  donate: 'Fzs6WWFcAuJhxAVyZa4EN2suxggjidJjV3AzJxKbRHjh2Jc',
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
    TREASURY_CHART: true,
    VALIDATOR: false,
    SS58: true,
  },
}
