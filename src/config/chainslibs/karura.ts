import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Karura: Chain = {
  id: 'karura',
  nativeTokenUniqueId: 'KAR',
  name: 'Karura',
  type: 'mainnet',
  theme: {
    colors: ['#FF4D3B', '#FFA69D', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#FF4D3B', 6),
  },
  gtag: 'G-RKNND9J1DK',
  api: 'https://karura.webapi.subscan.io',
  domain: 'https://karura.subscan.io',
  subdomain: ['karura'],
  social: {
    telegram: ' ',
    twitter: ' ',
    github: 'https://github.com/AcalaNetwork ',
    price: 'https://www.coingecko.com/en/coins/karura',
  },
  donate: 'ripeTkfuv9feJbHQkrCVmdRnsYT4pQRs8MxgQp8NYrfP6o2',
  modules: {
    BOUNTY: true,
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
