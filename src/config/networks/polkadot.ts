import { Chain } from './template'

export const polkadot: Chain = {
  name: "polkadot",
  nativeTokenUniqueId: "DOT",
  label: 'Polkadot',
  type: "mainnet",
  theme: {
    colors: ['#E90979', '#F081B9', '#d7d7d7'],
  },
  gtag: 'G-1HVHK949MH',
  api: "https://polkadot.webapi.subscan.io",
  domain: "https://polkadot.subscan.io",
  subdomain: ["polkadot"],
  social: {
    telegram: "https://t.me/polkadotofficial",
    twitter: "https://twitter.com/Polkadot",
    github: "https://github.com/paritytech/polkadot/",
    price: "https://www.coingecko.com/en/coins/polkadot",
  },
  donate: "14RYaXRSqb9rPqMaAVp1UZW2czQ6dMNGMbvukwfifi6m8ZgZ",
  modules: {
    SYSTEM_ACCOUNT: false,
    VESTING: true,
    GRANDPA_VOTE: true,
    BOUNTY: true,
    NOMINATION_POOL: true,
    NOMINATE_FEATURE: true,
    PARACHAIN: true,
    POLKASSEMBLY_LINK: true,
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
    V2_REWARD: true,
    MULTISIG_TOOL: true,
    EVM_NETWORK: false,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    ASSETS_MODULE: false,
    PARATHREAD: false,
    REFERENDA_V2: false,
    FELLOWSHIP: false,
    V2_API: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    TREASURY_CHART: true,
    VALIDATOR: true,
    SS58: true,
  }
}