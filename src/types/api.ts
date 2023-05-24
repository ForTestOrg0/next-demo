import { BlockNumber, Timestamp } from "./base";

export interface APIWarpperProps<T> {
  code: number;
  data: T;
  generated_at: number;
  message: string;
}

/** Governance **/
export interface ProposalPreImage {
  amount: string;
  author: {
    address: string;
  };
  call_module: string;
  call_name: string;
  created_block: number;
  hash: string;
  params: string;
  status: string;
  updated_block: number;
}

export interface ProposalTimeline {
  block: number;
  extrinsic_index: string;
  index: number;
  params: string | null;
  prophecy: boolean;
  status: string;
  time: number;
}

export interface AccountDisplay {
  address: string;
  display?: string;
  identity?: boolean;
  judgements?: any[];
  account_index?: string;
  parent?: {
    address: string;
    display?: string;
    identity?: boolean;
    sub_symbol: string;
  };
}

export interface DemocracyReferendum {
  author: AccountDisplay | null;
  block_timestamp: Timestamp;
  call_module: string;
  call_name: string;
  created_block: BlockNumber;
  end: BlockNumber;
  referendum_index: number;
  status: string;
  vote_threshold: string;
}

export interface DemocracyReferendumDetail {
  created_block: BlockNumber;
  aye_amount: string;
  aye_without_conviction: string;
  nay_amount: string;
  nay_without_conviction: string;
  turnout: string;
  delay: BlockNumber;
  end: BlockNumber;
  referendum_index: number;
  executed_success: boolean;
  pre_image?: ProposalPreImage;
  timeline: ProposalTimeline[];
  updated_block: BlockNumber;
  status: string;
  vote_threshold: string;
  value: string;
}

export interface DemocracyVote {
  account: AccountDisplay;
  amount: string;
  conviction: string;
  extrinsic_hash: string;
  extrinsic_index: string;
  passed: boolean;
  voting_time: string;
}

export interface CouncilProposal {
  proposal_id: number;
  created_block: BlockNumber;
  block_timestamp: Timestamp;
  status: string;
  member_count: number;
  aye_votes: number;
  nay_votes: number;
  call_module: string;
  call_name: string;
}

export interface SimpleProposalVote {
  account: AccountDisplay;
  extrinsic_hash: string;
  extrinsic_index: string;
  passed: boolean;
  voting_time: string;
}

export interface CouncilProposalDetail extends CouncilProposal {
  updated_block: BlockNumber;
  proposal_hash: string;
  proposer: AccountDisplay;
  executed_success: boolean;
  value: string;
  params: string;
  pre_image: ProposalPreImage;
  votes: SimpleProposalVote[];
  timeline: ProposalTimeline[];
}

export type TechcommProposal = CouncilProposal;
export type TechcommProposalDetail = CouncilProposalDetail;

export interface TreasuryProposal {
  proposal_id: number;
  created_block: BlockNumber;
  block_timestamp: Timestamp;
  status: string;
  reward: string;
  reward_extra: string;
  beneficiary: AccountDisplay;
  proposer: AccountDisplay;
}

export interface TreasuryProposalDetail extends TreasuryProposal {
  council: CouncilProposalDetail;
  timeline: ProposalTimeline[];
}

export interface TreasuryTip {
  amount: string;
  beneficiary: AccountDisplay;
  block_num: BlockNumber;
  block_timestamp: Timestamp;
  close_block_num: BlockNumber;
  extrinsic_index: string;
  finder: AccountDisplay;
  hash: string;
  reason: string;
  status: string;
  tipper_num: number;
}

export interface TreasuryTipDetail extends TreasuryTip {}

export interface TreasuryTipper {
  amount: string;
  extrinsic_index: string;
  rewarder: AccountDisplay;
}

export interface BountiesProposal {
  proposal_id: number;
  block_timestamp: Timestamp;
  status: string;
  value: string;
  description: string;
  proposer: AccountDisplay;
}

export interface BountiesProposalDetail extends BountiesProposal {
  beneficiary: AccountDisplay;
  bond: string;
  created_block: BlockNumber;
  curator: AccountDisplay;
  curator_deposit: string;
  curator_fee: string;
  expire_block: BlockNumber;
  timeline: ProposalTimeline[];
}

export interface TokenMetadata {
  symbol: string;
  unique_id: string;
  display_name: string;
  asset_type: string;
  token_decimals: number;
  price: string;
  price_change: string;
  total_issuance: string;
  free_balance: string;
  available_balance: string;
  locked_balance: string;
  reserved_balance: string;
  validator_bonded: string;
  nominator_bonded: string;
  bonded_locked_balance: string;
  unbonded_locked_balance: string;
  democracy_locked_balance: string;
  election_locked_balance: string;
  vesting_balance: string;
  inflation: string;
}

/** General **/
export interface Block {
  block_num: BlockNumber;
  block_timestamp: Timestamp;
  hash: string;
  event_count: number;
  extrinsics_count: number;
  finalized: boolean;
  account_display: AccountDisplay;
}

export interface Extrinsic {
  block_timestamp: number;
  block_num: number;
  extrinsic_index: string;
  call_module_function: string;
  call_module: string;
  params: string;
  account_id: string;
  account_index: string;
  signature: string;
  nonce: number;
  extrinsic_hash: string;
  success: boolean;
  fee: string;
  fee_used: string;
  from_hex: string;
  finalized: boolean;
  account_display: AccountDisplay;
}

export interface Event {
  id: number;
  event_index: string;
  block_num: BlockNumber;
  extrinsic_idx?: number;
  module_id: string;
  event_id: string;
  params: string;
  phase: number;
  event_idx?: number;
  extrinsic_hash: string;
  finalized: boolean;
  block_timestamp: Timestamp;
  extrinsic_index: string;
}

export interface Log {
  id: number;
  block_num: BlockNumber;
  log_index: string;
  log_type: string;
  engine: string;
  data: string;
}

export interface BlockDetail extends Block {
  parent_hash: string;
  state_root: string;
  extrinsics_root: string;
  spec_version: number;
  validator: string;
  events: Event[];
  extrinsics: Extrinsic[];
  logs: Log[];
}
