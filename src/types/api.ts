import { BlockNumber, Timestamp } from './base'

export interface APIWarpperProps<T> {
  code: number
  data: T
  generated_at: number
  message: string
}
/** EVM **/
export interface EvmToken {
  base_token_uri: string
  category: string
  contract: string
  decimals: number
  holders: number
  name: string
  price: string
  symbol: string
  totalSupply: string
  transfer_count: number
}

export interface EvmTokenHolder {
  ID: number
  contract: string
  holder?: string
  account_display: AccountDisplay
  balance: string
}
export interface EvmTokenTransfer {
  contract: string
  create_at: number
  decimals: number
  from: string
  from_display: AccountDisplay
  hash: string
  name: string
  symbol: string
  to: string
  to_display: AccountDisplay
  token_id?: string
  value: string
}
export interface EvmTransaction {
  block_timestamp: number
  contract: string
  contract_name: string
  effective_gas_price: string
  extrinsic_id: number
  from: string
  from_display: AccountDisplay
  gas_price: string
  gas_used: string
  hash: string
  method: string
  success: boolean
  to: string
  to_display: AccountDisplay
  value: string
}
/** Tool */
export interface Module {
  calls: any[]
  calls_value: {
    type: number
  }
  constants: any[]
  errors: any[]
  errors_value: {
    type: number
  }
  events: any[]
  events_value: {
    type: number
  }
  index: number
  name: string
  prefix: string
  storage: any[]
}
export interface Runtime {
  info: {
    metadata: Module[]
  }
}
/** XCM **/
export interface XCMAsset {
  amount: string
  asset_module?: string
  decimals: number
  enum_key: string
  symbol: string
  raw?: any
}
export interface XCMChanel {
  active_at: number
  message_count: number
  proposed_max_capacity: number
  proposed_max_message_size: number
  recipient: number
  sender: number
  status: string
  transfer_count: number
}
export interface XCM {
  assets: XCMAsset[] | null
  block_num: number
  child_dest: string
  child_para_id: number
  confirm_block_timestamp: number
  dest_event_index: string
  dest_extrinsic_index: string
  dest_para_id: number
  extrinsic_index: string
  from_account_id: string
  instructions: any
  message_hash: string
  message_type: string
  origin_block_timestamp: number
  origin_event_index: string
  origin_para_id: number
  protocol: string
  relayed_block_timestamp: number
  relayed_event_index: string
  relayed_extrinsic_index: string
  status: string
  to_account_id: string
  unique_id: string
  xcm_version: number
}

export interface XCMMeta {
  all_channel?: number
  connected_parachain_count?: number
  online_parachain: number
  open_channel: number
  parachain_count_with_requested?: number
  received_xcm_message_count?: number
  received_xcm_transfer_count?: number
  relayed_message_count: number
  relayed_transfer_count: number
  send_xcm_message_count?: number
  send_xcm_transfer_count?: number
  support_parachain: number
}

/** Governance **/
export interface ProposalPreImage {
  amount: string
  author: {
    address: string
  }
  call_module: string
  call_name: string
  created_block: number
  hash: string
  params: string
  status: string
  updated_block: number
}

export interface ProposalTimeline {
  block: number
  extrinsic_index: string
  index: number
  params: string | null
  prophecy: boolean
  status: string
  time: number
}

export interface AccountDisplay {
  address: string
  display?: string
  identity?: boolean
  judgements?: {
    index: number
    judgement: string
  }[]
  account_index?: string
  parent?: {
    address: string
    display?: string
    identity?: boolean
    sub_symbol: string
  }
  merkle?: {
    tag_name: string
    tag_subtype: string
    tag_type: string
  }
}
export interface AssetHolder {
  holder?: AccountDisplay
  account_display: AccountDisplay
  balance: string
}
export interface Holder {
  account_display: AccountDisplay
  address: string
  balance: string
  balance_lock: string
  count_extrinsic: number
  derive_token: string | null
  evm_account?: string | null
  is_evm_contract?: boolean
  registrar_info?: string | null
  ring_lock: number
  substrate_account?: string | null
}

export interface DemocracyReferendum {
  author: AccountDisplay | null
  block_timestamp: Timestamp
  call_module: string
  call_name: string
  created_block: BlockNumber
  end: BlockNumber
  referendum_index: number
  status: string
  vote_threshold: string
}

export interface DemocracyReferendumDetail {
  created_block: BlockNumber
  aye_amount: string
  aye_without_conviction: string
  nay_amount: string
  nay_without_conviction: string
  turnout: string
  delay: BlockNumber
  end: BlockNumber
  referendum_index: number
  executed_success: boolean
  pre_image?: ProposalPreImage
  timeline: ProposalTimeline[]
  updated_block: BlockNumber
  status: string
  vote_threshold: string
  value: string
}

export interface DemocracyVote {
  account: AccountDisplay
  amount: string
  conviction: string
  extrinsic_hash: string
  extrinsic_index: string
  passed: boolean
  voting_time: string
}

export interface CouncilProposal {
  proposal_id: number
  created_block: BlockNumber
  block_timestamp: Timestamp
  status: string
  member_count: number
  aye_votes: number
  nay_votes: number
  call_module: string
  call_name: string
}

export interface SimpleProposalVote {
  account: AccountDisplay
  extrinsic_hash: string
  extrinsic_index: string
  passed: boolean
  voting_time: string
}

export interface CouncilProposalDetail extends CouncilProposal {
  updated_block: BlockNumber
  proposal_hash: string
  proposer: AccountDisplay
  executed_success: boolean
  value: string
  params: string
  pre_image: ProposalPreImage
  votes: SimpleProposalVote[]
  timeline: ProposalTimeline[]
}

export type TechcommProposal = CouncilProposal
export type TechcommProposalDetail = CouncilProposalDetail

export interface TreasuryProposal {
  proposal_id: number
  created_block: BlockNumber
  block_timestamp: Timestamp
  status: string
  reward: string
  reward_extra: string
  beneficiary: AccountDisplay
  proposer: AccountDisplay
}

export interface TreasuryProposalDetail extends TreasuryProposal {
  council: CouncilProposalDetail
  timeline: ProposalTimeline[]
}

export interface TreasuryTip {
  amount: string
  beneficiary: AccountDisplay
  block_num: BlockNumber
  block_timestamp: Timestamp
  close_block_num: BlockNumber
  extrinsic_index: string
  finder: AccountDisplay
  hash: string
  reason: string
  status: string
  tipper_num: number
}

export interface TreasuryTipDetail extends TreasuryTip {}

export interface TreasuryTipper {
  amount: string
  extrinsic_index: string
  rewarder: AccountDisplay
}

export interface BountiesProposal {
  proposal_id: number
  block_timestamp: Timestamp
  status: string
  value: string
  description: string
  proposer: AccountDisplay
}

export interface BountiesProposalDetail extends BountiesProposal {
  beneficiary: AccountDisplay
  bond: string
  created_block: BlockNumber
  curator: AccountDisplay
  curator_deposit: string
  curator_fee: string
  expire_block: BlockNumber
  timeline: ProposalTimeline[]
}
export interface Asset {
  asset_id: string
  holders: number
  issuer: AccountDisplay
  owner: AccountDisplay
  metadata: {
    decimals: number
    name: string
    native: boolean
    symbol: string
  }
  supply: string
  unique_id: string
}
export interface AssetActivity {
  asset_id: string
  block_num: number
  block_timestamp: number
  event_id: string
  event_index: string
  extrinsic_index: string
  module_id: string
}
export interface Token {
  category: string
  currency_id: string
  decimals: number
  extends?: {
    holders: number
  }
  is_native: boolean
  metadata: {
    decimals: number
    name: string
    native: boolean
    symbol: string
  }
  name: string
  symbol: string
  unique_id: string
}

export interface TokenMetadata {
  symbol: string
  unique_id: string
  display_name: string
  asset_type: string
  token_decimals: number
  price: string
  price_change: string
  total_issuance: string
  free_balance: string
  available_balance: string
  locked_balance: string
  reserved_balance: string
  validator_bonded: string
  nominator_bonded: string
  bonded_locked_balance: string
  unbonded_locked_balance: string
  democracy_locked_balance: string
  election_locked_balance: string
  vesting_balance: string
  inflation: string
}

/** General **/
export interface Block {
  block_num: BlockNumber
  block_timestamp: Timestamp
  hash: string
  event_count: number
  extrinsics_count: number
  finalized: boolean
  account_display: AccountDisplay
}

export interface Extrinsic {
  block_timestamp: number
  block_num: number
  extrinsic_index: string
  call_module_function: string
  call_module: string
  params: Params[]
  account_id: string
  account_index: string
  signature: string
  nonce: number
  extrinsic_hash: string
  success: boolean
  fee: string
  fee_used: string
  from_hex: string
  finalized: boolean
  account_display: AccountDisplay
}

export interface Params {
  name: string
  type: string
  type_name: string
  value: string
}

export interface ExtrinsicDetail extends Extrinsic {
  events: Event[]
  event_count: number
  lifetime: {
    birth: number
    death: number
  }
  tip: string
  crosschain_op: string
  block_hash: string
  pending: boolean
  proxy: any
  multisig: any
}

export interface Event {
  id: number
  event_index: string
  block_num: BlockNumber
  extrinsic_idx?: number
  module_id: string
  event_id: string
  params: string
  phase: number
  event_idx?: number
  extrinsic_hash: string
  finalized: boolean
  block_timestamp: Timestamp
  extrinsic_index: string
}

export interface Log {
  id: number
  block_num: BlockNumber
  log_index: string
  log_type: string
  engine: string
  data: string
}

export interface Provider {
  can_legacy: boolean
  id: string
  is_primary: boolean
  name: string
}

export interface BlockDetail extends Block {
  parent_hash: string
  state_root: string
  extrinsics_root: string
  spec_version: number
  validator: string
  events: Event[]
  extrinsics: Extrinsic[]
  logs: Log[]
}

export interface Transfer {
  from: string
  to: string
  extrinsic_index: string
  event_idx: number
  success: boolean
  hash: string
  block_num: BlockNumber
  block_timestamp: Timestamp
  module: string
  amount: string
  amount_v2: string
  fee: string
  nonce: number
  asset_symbol: string
  asset_type: string
  asset_unique_id: string
  from_account_display: AccountDisplay
  to_account_display: AccountDisplay
}

export type DeriveToken = {
  token: string
  balance: string
  locked: string
  unique_id: string
  reserved: string
  bonded: string
  unbonding: string
}
export interface Account {
  account_display: AccountDisplay
  address: string
  substrate_account: AccountDisplay
  balance: string // with decimals
  balance_lock: string // with decimals
  count_extrinsic: number
  derive_token: Record<string, DeriveToken>
  is_erc20: boolean
  is_evm_contract: boolean
  lock: string
  ring_lock?: string
  fellowship_rank: number
  assets_tag: string[]
  registrar_info: {
    registrar_index: number
    registrar_fee: string
  }
}

export type ProxyAccount = {
  account_display: {
    address: string
  }
  proxy_type: string
}

export interface Proxy {
  proxy_account: ProxyAccount[]
  real_account: ProxyAccount[]
}

export interface AccountDetail extends Account {
  bonded: string
  democracy_lock: string
  election_lock: string
  evm_account: string
  is_council_member: boolean
  is_erc721: boolean
  is_fellowship_member: boolean
  is_module_account: boolean
  is_registrar: boolean
  is_techcomm_member: boolean
  is_contract?: boolean
  lock: string
  multisig?: {
    multi_account_member: AccountDisplay[]
    threshold: number
    multi_account: AccountDisplay[]
  }
  nonce: number
  proxy: Proxy
  registrar_info: {
    registrar_index: number
    registrar_fee: string
  }
  reserved: string
  role: string
  staking_info: {}
  stash: string
  unbonding: string
  vesting: null
  twitter: string
  web: string
  riot: string
  email: string
}

export interface Validator {
  rank_validator: number
  bonded_nominators: string
  bonded_owner: string
  count_nominators: number
  validator_prefs_value: number
  latest_mining: number
  reward_point: number
  session_key: {
    babe: string
    grandpa: string
    im_online: string
    authority_discovery: string
  }
  stash_account_display: AccountDisplay
  controller_account_display: AccountDisplay
  node_name: string
  reward_account: string
  reward_pot_balance: string
  grandpa_vote: number
  bonded_total: string
  status: string
}

export interface StakingVoted extends Validator {
  bonded: string
}

export interface ParachainMeta {
  auction_count: number
  auction_active: boolean
  online_count: number
  upcoming_count: number
  lease_period: number
  lease_offset: number
  ending_period: number
  retirement_period: number
  lease_periods_per_slot: number
  total_slot_num: number
}

export interface ChainMetadata {
  addressType: string
  avgBlockTime: number
  blockNum: BlockNumber
  blockTime: number
  bootTime: number
  commissionAccuracy: number
  count_account: number
  count_event: number
  count_signed_extrinsic: number
  count_transfer: number
  currentPools: number
  current_era: number
  current_validator_count: number
  epochLength: number
  epochProcess: number
  eraLength: number
  eraProcess: number
  exist_roles: string[]
  finalized_blockNum: number
  history_depth: number
  implName: string
  maxNominatorRewardedPerValidator: number
  maxPools: number
  networkNode: string
  specVersion: number
  unbondDuration: number
  validator_count: number
  waiting_validator: number
}

export interface ParachainFund {
  fund_id: string
  bid_id: string
  para_id: number
  first_period: number
  last_period: number
  auction_index: number
  owner: string
  owner_display: AccountDisplay
  cap: string
  end_block: number
  raised: string
  balance: string
  contributors: number
  status: number
  start_block: number
  start_block_at: number
  last_change_block: number
  last_change_timestamp: number
  extrinsic_index: string
  fund_auction_status: number
  in_auctions: number[]
}

export interface ParachainBid {
  bid_id: string
  fund_id: string
  auction_index: number
  first_period: number
  last_period: number
  para_id: number
  bidder_account: string
  amount: string
  /** Enum(1:Slot|2:Crowdloan) */
  source: number
  /** Enum(1:Accepted|2:Leased|3:Renewal) */
  status: number
  block_num: number
  block_timestamp: number
  extrinsic_index: string
  event_index: string
  bidder_account_display: AccountDisplay
  bid_count: number
}

export interface AuctionLeadingBlocks {
  bid_id: string
  para_id: number
  fund_id: string
  leading_blocks: number
  unique_key: string
}

export interface ParachainAuctionWinner {
  bid_id: string
  fund_id: string
  auction_index: number
  first_period: number
  last_period: number
  para_id: number
  bidder_account: string
  bidder_account_display: AccountDisplay
  bid_count: number
  amount: string
  source: number
  status: number
  block_num: number
  block_timestamp: number
  extrinsic_index: string
  event_index: string
}

export interface ParachainAuction {
  auction_index: number
  lease_index: number
  start_block: number
  early_end_block: number
  end_block: number
  extinguish_block: number
  status: number
  winners: ParachainAuctionWinner[]
}

export interface Parachain {
  para_id: number
  status: string
  begin_period: number
  first_period: number
  last_period: number
  manager_display: AccountDisplay
  reserved_extrinsic_index: string
  fund_id: string
  bid_id: string
  open_channel_count: number
  xcm_receive_message_count: number
  xcm_receive_transfer_count: number
  xcm_send_message_count: number
  xcm_send_transfer_count: number
}

export interface ParachainTimeline {
  para_id: number
  block_num: BlockNumber
  block_timestamp: Timestamp
  event_index: string
  extrinsic_index: string
  module: string
  status: string
  params: {
    auction_id: number
  }
}

export interface ParachainContributes {
  fund_id: string
  para_id: number
  who: string
  contributed: string
  contributing: string
  block_num: BlockNumber
  block_timestamp: Timestamp
  extrinsic_index: string
  event_index: string
  status: number
  memo: string
  who_display: AccountDetail
}

export interface ParachainFundTimeline {
  fund_id: string
  block_num: BlockNumber
  block_timestamp: Timestamp
  event_index: string
  extrinsic_index: string
  module_name: string
  event_name: string
}

export interface ParachainInfo {
  para_id: number
  status: string
  genesis_head: string
  validation_code_url: string
  manager: string
  deposit: string
  validators: string[]
  source: number
  first_period: number
  last_period: number
  auction_index: number
  reserved_extrinsic_index: string
  xcm_send_transfer_count: number
  xcm_receive_transfer_count: number
  xcm_send_message_count: number
  xcm_receive_message_count: number
  open_channel_count: number
  bid_id: string
  begin_period: number
  manager_display: AccountDisplay
  validators_display: AccountDisplay[]
  fund_id: string
  fund_account: string
  fund_account_display: AccountDisplay
}
export interface DailyStatistics {
  time_utc: string
  total: number
  transfer_amount: string
}
export interface DailyToken {
  available: string
  other: string
  other_details: {
    democracy_locked_balance: string
    election_locked_balance: string
    nominator_bonded: string
    reserved_balance: string
    unbonded_locked_balance: string
    validator_bonded: string
    vesting_balance: string
  }
  staking: string
  system_accounts?: string
  systemTotal?: string
  time_utc: string
  total_issuance: string
}
export interface DailyXCMStatistics {
  time_utc: string
  total: number
  message_total: number
}

export interface DataStatistics {
  extrinsic_count: number
  transfers_count: number
  extrinsic_fee_used: string
  transfers_amount: string
  transfers_usd_amount: string
  up_active_account_count: string
  up_holder_account_count: string
  down_active_account_count: string
  down_holder_account_count: string
  referendum_active_count: number
  referendum_vote_account_count: number
  referendum_vote_amount: string
}

export interface Price {
  feed_at: number
  price: string
}

export interface AccountStatisticsRole {
  role: string
  count: number
}

export interface AccountStatisticsAssets {
  name: string
  max_balance: string
  min_balance: string
  total: string
  account_count: number
}

export interface Screenshot {
  success: boolean
  url: string
  key: string
  err: string
}

export interface Nominator {
  rank_nominator: number
  nominator_stash: string
  bonded: string
  account_display: AccountDisplay
  validator_stash: string
}

export interface EraStat {
  era: number
  start_block_num: BlockNumber
  end_block_num: BlockNumber
  reward: string
  slash: string
  block_produced: string
  reward_point: number
}

export interface RewardSlash {
  account: string
  amount: string
  block_num: BlockNumber
  block_timestamp: Timestamp
  event_id: string
  event_method: string
  event_idx: number
  event_index: string
  extrinsic_hash: string
  extrinsic_idx: number
  extrinsic_index: string
  module_id: string
  params: string
  stash: string
}

export interface DemocracyReferendumV2 {
  referendum_index: number
  created_block: BlockNumber
  created_block_timestamp: Timestamp
  origins_id: number
  origins: string
  account: AccountDisplay
  call_module: string
  call_name: string
  /** status enum: Submitted Decision Confirm Approved ConfirmAborted Rejected Cancelled Timeout Killed Executed ExecutedFailed */
  status: string
  latest_block_num: BlockNumber
  latest_block_timestamp: Timestamp
}

export interface ReferendumTrack {
  name: string
  current_deciding: number
  max_deciding: number
  decision_deposit: string
  prepare_period: number
  decision_period: number
  confirm_period: number
  min_enactment_period: number
  min_approval: {
    Reciprocal: {
      factor: string
      x_offset: string
      y_offset: string
    }
  }
  min_support: {
    LinearDecreasing: {
      length: number
      floor: number
      ceil: number
    }
  }
}

export interface ReferendumTrackWithId extends ReferendumTrack {
  id: string | number
}

export interface ReferendaReferendumV2Detail {
  referendum_index: number
  created_block: number
  created_block_timestamp: number
  origins_id: number
  origins: string
  account: AccountDisplay
  deposit_balance: string
  decision_deposit_account: AccountDisplay
  decision_deposit_balance: string
  status: string
  latest_block_num: number
  latest_block_timestamp: number
  pre_image: ProposalPreImage
  beneficiary: AccountDisplay
  beneficiary_amount: string
  ayes_amount: string
  ayes_count: number
  nays_amount: string
  nays_count: number
  abstains_count: number
  support_amount: string
  bare_ayes: string
  timeline: ProposalTimeline[]
}

export interface ReferendaVotesV2 {
  account: AccountDisplay
  delegate: AccountDisplay
  amount: string
  votes: string
  /** Ayes Nays Abstains */
  status: 'Ayes' | 'Nays' | 'Abstains'
  valid: boolean
  extrinsic_index: string
  conviction: string
  voting_time: Timestamp
}

export interface MultichainAccount {
  network: string
  symbol: string
  decimal: number
  price: string
  category: string
  asset_id: string
  balance: string
  locked: string
  reserved: string
  bonded: string
  unbonding: string
  democracy_lock: string
  conviction_lock: string
  election_lock: string
  nomination_bonded: string
  token_unique_id: string
}

export interface Substrate_NativeToken {
  symbol: string
  unique_id: string
  decimals: number
  balance: string
  lock: string
  reserved: string
  bonded: string
  unbonding: string
  democracy_lock: string
  conviction_lock: string
  election_lock: string
}

export interface Substrate_BuildinToken {
  symbol: string
  unique_id: string
  alias_name: string
  decimals: number
  balance: string
  lock: string
  reserved: string
  bonded: string
  unbonding: string
  currency_id: string
}

export interface Substrate_AssetsToken {
  symbol: string
  unique_id: string
  decimals: number
  balance: string
  lock: string
  asset_id: string
}

export interface Substrate_ERC20Token {
  symbol: string
  unique_id: string
  decimals: number
  balance: string
  contract: string
}

export interface Substrate_ERC721Token {
  symbol: string
  unique_id: string
  balance: string
  contract: string
}

export interface ReferendaStatistics {
  referendum_locked: string
  referendum_participate: string
  voting_total: number
  confirm_total: number
  origins: {
    ID: number
    Origins: string
    Count: number
  }[]
}

export interface FellowshipStatistics {
  fellowship_members: string
  active_fellowship_members: string
  voting_total: number
  confirm_total: number
  OriginsCount: number
  origins: {
    ID: number
    Origins: string
    Count: number
  }[]
}
