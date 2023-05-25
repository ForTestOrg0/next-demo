export interface Chain {
  name: string
  nativeTokenUniqueId: string
  label: string
  type: string
  theme: {
    colors: string[]
  }
  gtag: string
  api: string
  domain: string
  subdomain: string[]
  social: {
    telegram?: string
    twitter?: string
    github?: string
    price?: string
  }
  donate: string
  modules?: {
    ASSETS_MODULE: boolean
    BOUNTY: boolean
    CONTRACT: boolean
    CONTRACT_SOURCIFY: boolean
    ETH_ADDRESS: boolean
    EVM: boolean
    EVM_NETWORK: boolean
    FELLOWSHIP: boolean
    GRANDPA_VOTE: boolean
    MULTISIG_TOOL: boolean
    NOMINATION_POOL: boolean
    NOMINATE_FEATURE: boolean
    PARACHAIN: boolean
    PARATHREAD: boolean
    POLKASSEMBLY_LINK: boolean
    PRICE: boolean
    PRICE_CONVERT: boolean
    PRICE_HISTORY: boolean
    REFERENDA_V2: boolean
    SYSTEM_ACCOUNT: boolean
    V2_API: boolean
    V2_REWARD: boolean
    VESTING: boolean
    WASM_CONTRACT: boolean
    WASM_CONTRACT_SOURCIFY: boolean
    // has hide prefix before
    SS58: boolean
    TREASURY_CHART: boolean
    VALIDATOR: boolean
  }
}
