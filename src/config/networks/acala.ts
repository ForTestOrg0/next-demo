import { Chain } from './template'

export const acala: Chain = {
  name: 'acala',
  nativeTokenUniqueId: 'ACA',
  label: 'Acala',
  type: 'mainnet',
  theme: {
    colors: ['#FF4C3B', '#FFA59D', '#d7d7d7'],
  },
  gtag: 'G-8661YY7LG2',
  api: 'https://acala.webapi.subscan.io',
  domain: 'https://acala.subscan.io',
  subdomain: ['acala'],
  social: {
    telegram: 'https://t.me/acalaofficial',
    twitter: 'https://twitter.com/AcalaNetwork',
    github: 'https://github.com/AcalaNetwork',
    price: 'https://www.coingecko.com/en/coins/acala',
  },
  donate: '24J9ASqUgVu7xRQDDpcFFaAH5qq3BBfUF1UDun6jJG3dwgXb',
  modules: {
    ASSETS_MODULE: false,
    BOUNTY: true,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: false,
    MULTISIG_TOOL: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    PARATHREAD: true,
    POLKASSEMBLY_LINK: false,
    PRICE: true,
    PRICE_CONVERT: true,
    PRICE_HISTORY: true,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: false,
    V2_API: true,
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
