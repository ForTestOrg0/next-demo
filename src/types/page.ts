import { GetTokenUniqueIdProps } from "@/utils/api";
import { TokenMetadata } from "./api";
import { Chain } from "@/config/networks/template";

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

export interface DownloadRef  {
  downloadCsv: (param: any[][], name: string) => void;
}
