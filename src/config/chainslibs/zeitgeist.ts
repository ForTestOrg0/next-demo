import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Zeitgeist: Chain = {
  id: 'zeitgeist',
  nativeTokenUniqueId: 'ZTG',
  name: 'Zeitgeist',
  type: 'mainnet',
  theme: {
    colors: ['#000000', '#7F7F7F', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#000000', 6),
  },
  gtag: 'G-6TYJR388Z1',
  api: 'https://zeitgeist.webapi.subscan.io',
  domain: 'https://zeitgeist.subscan.io',
  subdomain: ['zeitgeist'],
  social: {
    telegram: 'https://t.me/zeitgeist_official',
    twitter: 'https://twitter.com/ZeitgeistPM',
    github: 'https://github.com/ZeitgeistPM',
    price: 'https://www.coingecko.com/en/coins/zeitgeist',
  },
  donate: 'dE2ShE3rmDek11oZHEuC8LuHV3sRcGHZnAahW6mFPzGHtyXwn',
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
    TREASURY_CHART: true,
    VALIDATOR: false,
  },
}
