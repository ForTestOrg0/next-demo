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
  },
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
  display: string;
  identity: boolean;
}