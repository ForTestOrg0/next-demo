import { BlockNumber } from "./base";

export interface APIWarpperProps<T> {
  code: number;
  data: T;
  generated_at: number;
  message: string;
}

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
  block_timestamp: number;
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
  block_timestamp: number;
  status: string;
  member_count: number;
  aye_votes: number;
  nay_votes: number;
  call_module: string;
  call_name: string;
}

export interface CouncilProposalVote {
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
  votes: CouncilProposalVote[];
  timeline: ProposalTimeline[];
}
