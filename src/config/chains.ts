export interface Chain {
  name: string;
  nativeTokenUniqueId: string;
  label: string;
  type: string;
  theme: {
    colors: string[];
  };
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
  modules?: {
    showSystemAccount?: boolean;
    hasVesting?: boolean;
    hasGrandpaVote?: boolean;
    hasBounty?: boolean;
    hasNominationPool?: boolean;
    hasNominateFeature?: boolean;
    hasParachain?: boolean;
    hasPolkassemblyLink?: boolean;
    hasPrice?: boolean;
    hasPriceHistory?: boolean;
    hasPriceConvert?: boolean;
    hideTools?: boolean;
    isV2Reward?: boolean;
    hasMultisigTool?: boolean;
    isEvmNetwork?: boolean;
    hasContract?: boolean;
    hasContractSourcify?: boolean;
    ethAddress?: boolean;
    hasEvm?: boolean;
    hasAssetsModule?: boolean;
    hideSS58?: boolean;
    isParathread?: boolean;
    hideValidator?: boolean;
    hasReferendaV2?: boolean;
    hasFellowship?: boolean;
    hideTreasuryChart?: boolean;
    hasV2Api?: boolean;
    hasWasmContract?: boolean;
    hasWasmContractSourcify?: boolean;
  }
}

export const CHAINS: Chain[] = [
  {
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
      hasVesting: true,
      hasGrandpaVote: true,
      hasBounty: true,
      hasNominationPool: true,
      hasNominateFeature: true,
      hasParachain: true,
      hasPolkassemblyLink: true,
      hasPrice: true,
      hasPriceHistory: true,
      hasPriceConvert: true,
      hideTools: true,
      isV2Reward: true,
      hasMultisigTool: true,
    }
  },
  {
    name: "kusama",
    nativeTokenUniqueId: "KSM",
    label: 'Kusama',
    type: "mainnet",
    theme: {
      colors: ["#000000", "#7B7C7C", "#d7d7d7"],
    },
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
    modules: {
      hasBounty: true,
      hasNominationPool: true,
      hasNominateFeature: true,
      hasParachain: true,
      hasPolkassemblyLink: true,
      hasPrice: true,
      hasPriceHistory: true,
      hasPriceConvert: true,
      isV2Reward: true,
      hasMultisigTool: true,
      hasReferendaV2: true,
      hasFellowship: true,
    }
  },
  {
    name: "darwinia-parachain",
    nativeTokenUniqueId: "RING",
    label: 'Darwinia2',
    type: "mainnet",
    theme: {
      colors: ['#EA3382', '#F499C0', '#d7d7d7'],
    },
    gtag: 'G-MYEDJ9WZY6',
    api: "https://darwinia.webapi.subscan.io",
    domain: "https://darwinia.subscan.io",
    subdomain: ["darwinia"],
    social: {
      telegram: "https://t.me/DarwiniaNetwork",
      twitter: "https://twitter.com/DarwiniaNetwork",
      github: "https://github.com/darwinia-network",
      price: "https://www.coingecko.com/en/coins/darwinia-network-native-token",
    },
    donate: "0x9c0fEf6b48Cb0B16EDc72a61d9503A78782c19e2",
    modules: {
      showSystemAccount: true,
      hasVesting: true,
      hasPrice: true,
      hasPriceHistory: true,
      hasPriceConvert: true,
      isEvmNetwork: true,
      hasContract: true,
      hasContractSourcify: true,
      ethAddress: true,
      hasEvm: true,
      hasAssetsModule: true,
      hideSS58: true,
      isParathread: true,
      hideValidator: true,
    }
  },
  {
    name: "shibuya",
    nativeTokenUniqueId: "SBY",
    label: 'Shibuya',
    type: "testnet",
    theme: {
      colors: ['#4C68D8', '#A2B0E8', '#d7d7d7'],
    },
    gtag: 'G-81F03NPDEK',
    api: "https://shibuya.webapi.subscan.io",
    domain: "https://shibuya.subscan.io",
    subdomain: ["shibuya"],
    social: {
      telegram: 'https://t.me/PlasmOfficial',
      twitter: 'https://twitter.com/AstarNetwork',
      github: 'https://github.com/AstarNetwork/Astar',
    },
    donate: "ZMqsV8Tm3XVB8NthAD8N4q9rR7ZuGWsJJhZqMtDyz5CXyX7",
    modules: {
      hasVesting: true,
      hideValidator: true,
      hideTreasuryChart: true,
      hasV2Api: true,
      hasAssetsModule: true,
      hasWasmContract: true,
      hasWasmContractSourcify: false,
      hasContract: true,
      hasContractSourcify: true,
      ethAddress: true,
      hasEvm: true,
    }
  }
];

export function getChainConfigBySubdomain(name: string): Chain | null {
  const result = CHAINS.filter((chain) => chain.subdomain.indexOf(name) > -1);
  if (result.length > 0) {
    return result[0];
  }
  return null;
}
