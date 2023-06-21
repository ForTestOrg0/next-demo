import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Kusama: Chain = {
  id: 'kusama',
  nativeTokenUniqueId: 'KSM',
  name: 'Kusama',
  type: 'mainnet',
  theme: {
    colors: ['#000000', '#7B7C7C', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#000000', 6),
  },
  gtag: 'G-F8SDNKSNRS',
  api: 'https://kusama.webapi.subscan.io',
  domain: 'https://kusama.subscan.io',
  subdomain: ['kusama'],
  social: {
    telegram: 'https://t.me/kusamanetworkofficial ',
    twitter: 'https://twitter.com/kusamanetwork ',
    github: 'https://github.com/paritytech/polkadot/ ',
    price: 'https://www.coingecko.com/en/coins/kusama',
  },
  donate: 'Fzs6WWFcAuJhxAVyZa4EN2suxggjidJjV3AzJxKbRHjh2Jc',
  modules: {
    BOUNTY: true,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    EVM_NETWORK: false,
    FELLOWSHIP: true,
    GRANDPA_VOTE: true,
    MULTISIG_TOOL: true,
    NOMINATION_POOL: true,
    NOMINATE_FEATURE: true,
    PARACHAIN: true,
    PARATHREAD: false,
    POLKASSEMBLY_LINK: true,
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
    REFERENDA_V2: true,
    SYSTEM_ACCOUNT: false,
    V2_API: false,
    V2_REWARD: true,
    VESTING: true,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: true,
  },
}
