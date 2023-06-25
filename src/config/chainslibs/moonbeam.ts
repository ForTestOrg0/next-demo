import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Moonbeam: Chain = {
  id: 'moonbeam',
  nativeTokenUniqueId: 'GLMR',
  name: 'Moonbeam',
  type: 'mainnet',
  theme: {
    colors: ['#53CBC9', '#A9E5E4', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#53CBC9', 6),
  },
  gtag: 'G-0XPNT9XCP2',
  api: 'https://moonbeam.webapi.subscan.io',
  domain: 'https://moonbeam.subscan.io',
  subdomain: ['moonbeam'],
  social: {
    telegram: 'https://t.me/Moonbeam_Official',
    twitter: 'https://twitter.com/moonbeamnetwork',
    github: 'https://github.com/PureStake/moonbeam',
    price: 'https://coinmarketcap.com/currencies/moonbeam/',
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
    GRANDPA_VOTE: false,
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
    V2_API: true,
    V2_REWARD: false,
    VESTING: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: false,
    TREASURY_CHART: true,
    VALIDATOR: true,
  },
}
