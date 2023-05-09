import { Chain } from "@/config/chains";
import { GetTokenUniqueIdProps } from "@/utils/api";
import { TokenMetadata } from "./api";

export type PageProps = any;

export interface BareProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface Token {
  decimals: number;
  symbol: string;
}

export interface ChainProps {
  chainConf: Chain;
  tokens: GetTokenUniqueIdProps;
  nativeToken: TokenMetadata;
  nativeTokenConf: Token;
}

export interface BareServerSideProps {
  chain: ChainProps;
}
