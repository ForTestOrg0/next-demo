export interface Chain {
  name: string;
  nativeTokenUniqueId: string;
  type: string;
  theme: {
    colors: string[];
  };
  ua: string;
  gtag: string;
  api: string;
  domain: string;
  subdomain: string[];
  social: {
    telegram?: string;
    twitter?: string;
    github?: string;
    price?: string;
  };
  donate: string;
}

export const CHAINS: Chain[] = [
  {
    name: "kusama",
    nativeTokenUniqueId: "KSM",
    type: "mainnet",
    theme: {
      colors: ["#000000", "#7B7C7C", "#d7d7d7"],
    },
    ua: "UA-152561314-3",
    gtag: "G-F8SDNKSNRS",
    api: "https://kusama.webapi.subscan.io",
    domain: "https://kusama.subscan.io",
    subdomain: ["kusama", "localhost"],
    social: {
      telegram: "https://t.me/kusamanetworkofficial",
      twitter: "https://twitter.com/kusamanetwork",
      github: "https://github.com/paritytech/polkadot/",
      price: "https://www.coingecko.com/en/coins/kusama",
    },
    donate: "Fzs6WWFcAuJhxAVyZa4EN2suxggjidJjV3AzJxKbRHjh2Jc",
  },
];

export function getChainConfigBySubdomain(name: string): Chain | null {
  const result = CHAINS.filter((chain) => chain.subdomain.indexOf(name) > -1);
  if (result.length > 0) {
    return result[0];
  }
  return null;
}
