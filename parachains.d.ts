type ParachainProjectInfo = {
  ParaID: number
  'Project Name': string
  Logo?: string
  logo?: any
  'Description (en)'?: string
  'Description (zh)'?: string
  'Parachain Crowdloans Allocation (en)'?: string
  'Parachain Crowdloans Allocation (zh)'?: string
  'Auction Reward & Reward Vesting Schedule (en)'?: string
  'Auction Reward & Reward Vesting Schedule (zh)'?: string
  'Financing Information (en)'?: string
  'Financing Information (zh)'?: string
  'Website Link'?: string
  'Twitter Link'?: string
  'Telegram Link'?: string
  'Discord Link'?: string
  'Medium Link'?: string
  'Github Link'?: string
  'Owner account'?: string
  /** for local parachain infos */
  pr?: string
}

type RelaychainName = 'kusama' | 'polkadot' | 'rococo' | 'westend'

type ParachainInfos = Record<RelaychainName, Record<string, ParachainProjectInfo>>

declare module '@subscan/parachains-info' {
  export let parachainInfos: ParachainInfos
}
