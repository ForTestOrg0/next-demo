import { parachainInfos } from '@subscan/parachains-info'

const localParachainInfos: Record<RelaychainName, ParachainProjectInfo[]> = {
  rococo: [
    {
      ParaID: 1000,
      'Project Name': 'Rockmine',
    },
    {
      ParaID: 4191,
      'Project Name': 'Acurast',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/77',
    },
    {
      ParaID: 2030,
      'Project Name': 'Bifrost Testnet',
    },
    {
      ParaID: 2087,
      'Project Name': 'Picasso Rococo',
    },
    {
      ParaID: 2084,
      'Project Name': 'Dolphin',
    },
    {
      ParaID: 2000,
      'Project Name': 'Karura-rococo',
    },
    {
      ParaID: 2004,
      // Logo: khala_logo,
      'Project Name': 'Khala-rococo',
    },
    {
      ParaID: 2110,
      'Project Name': 'Mangata',
      // Logo: mangata_icon,
    },
    {
      ParaID: 2043,
      'Project Name': 'OriginTrail Testnet',
    },
    {
      ParaID: 2105,
      'Project Name': 'Pangolin Parachain',
    },
    {
      ParaID: 2114,
      'Project Name': 'Turing Staging',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/76',
    },
  ],
  kusama: [
    {
      ParaID: 1000,
      'Project Name': 'Statemine',
      // Logo: statemint_icon,
    },
    {
      ParaID: 1001,
      'Project Name': 'Encointer Network',
      // Logo: encointer_icon,
    },
    {
      ParaID: 2088,
      'Project Name': 'Altair',
      // Logo: altair_icon,
    },
    {
      ParaID: 2124,
      'Project Name': 'Amplitude',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/46',
    },
    {
      ParaID: 2119,
      'Project Name': 'Bajun Network',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/50',
    },
    {
      ParaID: 2090,
      'Project Name': 'Basilisk',
      // Logo: basilisk_icon,
    },
    {
      ParaID: 2001,
      'Project Name': 'Bifrost',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/15',
    },
    {
      ParaID: 2096,
      'Project Name': 'Bit.Country Pioneer',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/20',
    },
    {
      ParaID: 2084,
      'Project Name': 'Calamari',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/17',
    },
    {
      ParaID: 2012,
      'Project Name': 'Crust Shadow',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/5',
    },
    {
      ParaID: 2105,
      'Project Name': 'Crab2',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/30',
    },
    {
      ParaID: 2229,
      'Project Name': 'Crab Slot Placeholder',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/62',
    },
    {
      ParaID: 2115,
      'Project Name': 'Dora Factory',
      // Logo: dorafactory_icon,
    },
    {
      ParaID: 2024,
      'Project Name': 'Genshiro',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/19',
    },
    {
      ParaID: 2123,
      'Project Name': 'GM Parachain',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/52',
    },
    {
      ParaID: 2015,
      'Project Name': 'IntegriTEE Network',
      // Logo: integritee_icon,
    },
    {
      ParaID: 2113,
      'Project Name': 'Kabocha (KSM parachain)',
    },
    {
      ParaID: 2000,
      'Project Name': 'Karura',
      // Logo: karura_icon,
      pr: 'https://github.com/subscan-explorer/projects-info/pull/9',
      'Description (en)':
        'Karura is the all-in-one DeFi Hub of Kusama and Acala’s sister network. Karura provides a platform for DApps as well as a suite of DeFi applications including liquid KSM staking, the Karura DEX, and the Karura Dollar (kUSD) stablecoin.',
      'Description (zh)':
        'Karura 是 Kusama 一站式跨链 DeFi 平台，Karura 能够为用户带来快速的资产互换体验，稳健的去中心化资产借贷体验，丰富的流动性挖矿体验以及安全的释放 KSM Staking 流动性体验，以及发行和使用稳定币 Karura Dollar (kUSD)',
      'Parachain Crowdloans Allocation (en)': '11% of KAR supply. https://acala.network/karura/token',
      'Parachain Crowdloans Allocation (zh)': 'KAR 总发行量的11%. https://acala.network/karura/token',
      'Auction Reward & Reward Vesting Schedule (en)':
        '30% liquid upon launch and 70% linear vesting over the duration of the parachain slot. https://acala.network/karura/token',
      'Auction Reward & Reward Vesting Schedule (zh)': '30%上线后即刻流动，70%在租赁期间线性释放. https://acala.network/karura/token',
      'Financing Information (en)': '',
      'Financing Information (zh)': '',
      'Website Link': 'https://karura.network',
      'Twitter Link': 'https://twitter.com/KaruraNetwork',
      'Telegram Link': 'https://t.me/karuranetwork',
      'Discord Link': 'https://discord.gg/HpsZx5r',
      'Medium Link': 'https://medium.com/acalanetwork',
      'Github Link': 'https://github.com/AcalaNetwork/',
    },
    {
      ParaID: 2004,
      'Project Name': 'Khala Network',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/11',
    },
    {
      'Website Link': 'https://dico.io/',
      ParaID: 2107,
      'Project Name': 'KICO',
      // Logo: kico_icon,
    },
    {
      ParaID: 2092,
      'Project Name': 'Kintsugi BTC',
      // Logo: kintsugi_icon,
    },
    {
      ParaID: 2019,
      'Project Name': 'Kpron',
      // Logo: apron_icon,
    },
    {
      ParaID: 2118,
      'Project Name': 'Listen Network',
      // Logo: listen_icon,
    },
    {
      'Website Link': 'https://kusama-crowdloan.litentry.com',
      ParaID: 2106,
      'Project Name': 'Litmus',
      // Logo: litmus_icon,
    },
    {
      ParaID: 2080,
      'Project Name': 'Loom Network',
      // Logo: loom_icon,
    },
    {
      ParaID: 2110,
      'Project Name': 'Mangata',
      // Logo: mangata_icon,
    },
    {
      ParaID: 2008,
      'Project Name': 'Mars',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/32',
    },
    {
      ParaID: 2023,
      'Project Name': 'Moonriver',
      // Logo: moonriver_icon,
    },
    {
      ParaID: 2085,
      'Project Name': 'Parallel Heiko',
      // Logo: heiko_icon,
      pr: 'https://github.com/subscan-explorer/projects-info/pull/18',
      'Description (en)': 'A decentralized lending & staking protocol built on top of the Polkadot ecosystem.',
      'Description (zh)': 'Parallel Heiko作为Parallel在kusama上的先行网，提供去中心化的借贷，质押功能',
      'Parachain Crowdloans Allocation (en)': '',
      'Parachain Crowdloans Allocation (zh)': '',
      'Auction Reward & Reward Vesting Schedule (en)': '',
      'Auction Reward & Reward Vesting Schedule (zh)': '',
      'Financing Information (en)': '',
      'Financing Information (zh)': '',
      'Website Link': 'https://parallel.fi',
      'Twitter Link': 'https://twitter.com/ParallelFi',
      'Telegram Link': 'https://t.me/parallelfi',
      'Discord Link': 'https://discord.com/invite/buKKx4dySW',
      'Medium Link': 'https://parallelfinance.medium.com',
      'Github Link': 'https://github.com/parallel-finance',
    },
    {
      ParaID: 2087,
      'Project Name': 'Picasso',
      // Logo: picasso_icon,
    },
    {
      ParaID: 2102,
      'Project Name': 'Pichiu',
      // Logo: pichiu_icon,
    },
    {
      ParaID: 2009,
      'Project Name': 'PolkaSmith',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/10',
    },
    {
      ParaID: 2095,
      'Project Name': 'Quartz by Unique',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/21',
    },
    {
      ParaID: 2227,
      'Project Name': 'RioDeFi',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/64',
    },
    {
      ParaID: 2048,
      'Project Name': 'Robonomics',
      // Logo: robonomics_icon,
      pr: 'https://github.com/subscan-explorer/projects-info/pull/12',
      'Description (en)':
        'Futuristic, secure, and server-less IoT platform on top of Ethereum && Polkadot. Bringing economy of robots into the 4th industrial revolution.',
      'Parachain Crowdloans Allocation (en)': 'https://robonomics.network/kusama-slot',
      'Auction Reward & Reward Vesting Schedule (en)': 'https://robonomics.network/blog/crowdloan-starts-today',
      'Financing Information (en)': '',
      'Financing Information (zh)': '',
      'Website Link': 'https://robonomics.network/',
      'Twitter Link': 'https://twitter.com/AIRA_Robonomics',
      'Telegram Link': 'https://t.me/robonomics',
      'Discord Link': 'https://discord.com/invite/TM4ABZcGPr',
      'Medium Link': 'https://robonomics.network/blog',
      'Github Link': 'https://github.com/airalab/robonomics',
    },
    {
      ParaID: 2016,
      'Project Name': 'Sakura',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/3',
    },
    {
      ParaID: 2013,
      'Project Name': 'SherpaX',
      // Logo: chainx_icon,
    },
    {
      ParaID: 2007,
      'Project Name': 'Shiden',
      // Logo: shiden_icon,
    },
    {
      ParaID: 2129,
      'Project Name': 'Snow',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/58',
    },
    {
      'Website Link': 'https://sora.org/',
      ParaID: 2011,
      'Project Name': 'SORA',
      // Logo: sora_icon,
    },
    {
      ParaID: 2018,
      'Project Name': 'SubGame Gamma',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/6',
    },
    {
      ParaID: 2100,
      'Project Name': 'Subsocial',
      // Logo: subsocial_icon,
    },
    {
      ParaID: 2116,
      'Project Name': 'Tanganika',
      // Logo: tanganika_icon,
    },
    {
      ParaID: 2125,
      'Project Name': 'InvArch Tinkernet',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/44',
    },
    {
      ParaID: 2078,
      'Project Name': 'Trustbase',
      // Logo: trustbase_icon,
    },
    {
      ParaID: 2114,
      pr: 'https://github.com/subscan-explorer/projects-info/pull/35',
      'Project Name': 'Turing Network',
    },
    {
      ParaID: 2094,
      'Project Name': 'Unorthodox',
      // Logo: unorthodox_icon,
    },
  ],
  polkadot: [
    {
      ParaID: 1000,
      // Logo: statemint_icon,
      'Project Name': 'Statemint',
    },
    {
      ParaID: 2000,
      // Logo: acala_icon,
      'Project Name': 'Acala',
    },
    {
      ParaID: 2028,
      'Project Name': 'Ares Odyssey',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/32',
    },
    {
      ParaID: 2006,
      'Project Name': 'Astar',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/25',
    },
    {
      ParaID: 2056,
      'Project Name': 'Aventus',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/61',
    },
    {
      ParaID: 2030,
      'Project Name': 'Bifrost',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/40',
    },
    {
      ParaID: 2031,
      // Logo: centrifuge_icon,
      'Project Name': 'Centrifuge',
    },
    {
      ParaID: 2002,
      // Logo: clover_icon,
      'Project Name': 'Clover',
    },
    {
      ParaID: 2027,
      // Logo: coinversation_icon,
      'Project Name': 'Coinversation',
    },
    {
      ParaID: 2019,
      // Logo: composable_icon,
      'Project Name': 'Composable Finance',
    },
    {
      ParaID: 2008,
      // Logo: crust_icon,
      'Project Name': 'Crust',
    },
    {
      ParaID: 2003,
      'Project Name': 'Darwinia',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/23',
    },
    {
      ParaID: 2021,
      // Logo: efinity_icon,
      'Project Name': 'Efinity',
    },
    {
      ParaID: 2011,
      // Logo: equilibrium_icon,
      pr: 'https://github.com/subscan-explorer/projects-info/pull/27',
      'Project Name': 'Equilibrium',
    },
    {
      ParaID: 2038,
      pr: 'https://github.com/subscan-explorer/projects-info/pull/34',
      'Project Name': 'Geminis',
    },
    {
      ParaID: 2093,
      pr: 'https://github.com/subscan-explorer/projects-info/pull/68',
      'Project Name': 'Hashed Network',
    },
    {
      ParaID: 2034,
      // Logo: hydrate_icon,
      'Project Name': 'HydraDX',
    },
    {
      ParaID: 2032,
      // Logo: interlay_icon,
      'Project Name': 'Interlay',
    },
    {
      ParaID: 2007,
      // Logo: kapex_icon,
      'Project Name': 'Kapex',
    },
    {
      ParaID: 2013,
      // Logo: litentry_icon,
      'Project Name': 'Litentry',
    },
    {
      ParaID: 2015,
      // Logo: manta_icon,
      'Project Name': 'Manta',
    },
    {
      ParaID: 2004,
      // Logo: moonbeam_icon,
      'Project Name': 'Moonbeam',
    },
    {
      ParaID: 2026,
      'Project Name': 'Nodle',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/26',
    },
    {
      ParaID: 2090,
      'Project Name': 'OAK Network',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/60',
    },
    {
      ParaID: 2043,
      'Project Name': 'OriginTrail Parachain',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/39',
    },
    {
      ParaID: 2012,
      // Logo: heiko_icon,
      'Project Name': 'Parallel',
    },
    {
      ParaID: 2094,
      'Project Name': 'Pendulum',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/70',
    },
    {
      ParaID: 2035,
      'Project Name': 'Phala Network',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/28',
    },
    {
      ParaID: 2040,
      // Logo: polkadex_icon,
      'Project Name': 'Polkadex',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/33',
      'Description (en)':
        'Polkadex is a fully decentralized peer-to-peer orderbook-based cryptocurrency exchange for the DeFi ecosystem built on Substrate.',
      'Parachain Crowdloans Allocation (en)': 'https://www.polkadex.trade/crowdloans',
      'Auction Reward & Reward Vesting Schedule (en)':
        'https://polkadex.medium.com/polkadex-needs-you-lets-win-a-parachain-on-polkadot-together-b0e480642bd3',
      'Financing Information (en)': '',
      'Website Link': 'https://www.polkadex.trade/',
      'Twitter Link': 'https://twitter.com/polkadex',
      'Telegram Link': 'https://t.me/Polkadex',
      'Discord Link': 'https://discord.gg/Uvua83QAzk',
      'Medium Link': 'https://polkadex.medium.com',
      'Github Link': 'https://github.com/Polkadex-Substrate/',
      'Owner account': '12jYuVktdKEC6C4g4d5fuW9MLgUDbxvJRhMBkhEGyqarUzbQ',
    },
    {
      ParaID: 2086,
      'Project Name': 'KILT Protocol',
      pr: 'https://github.com/subscan-explorer/projects-info/pull/16',
    },
    {
      ParaID: 2018,
      // Logo: subdao_icon,
      'Project Name': 'SubDAO',
    },
    {
      ParaID: 2017,
      // Logo: subgame_icon,
      'Project Name': 'SubGame Gamma',
    },
    {
      ParaID: 2037,
      // Logo: unique_icon,
      'Project Name': 'Unique Network',
    },
    {
      ParaID: 2046,
      'Project Name': 'Darwinia2',
      // Logo: darwinia_icon,
      pr: 'https://github.com/subscan-explorer/projects-info/pull/49',
    },
    {
      ParaID: 2092,
      'Project Name': 'Zeitgeist',
      // Logo: zeitgeist_icon,
    },
  ],
  westend: [
    {
      ParaID: 1001,
      'Project Name': 'Encointer Network',
      // Logo: encointer_icon,
    },
    {
      ParaID: 2097,
      'Project Name': 'Basilisk Egg',
      // Logo: basilisk_icon,
    },
    {
      ParaID: 2081,
      'Project Name': 'Integritee Network',
      // Logo: integritee_icon,
    },
    {
      ParaID: 2094,
      'Project Name': 'Interlay',
      // Logo: interlay_icon,
    },
    {
      ParaID: 2002,
      'Project Name': 'Moonshadow',
      // Logo: moonshadow_icon,
    },
    {
      ParaID: 2102,
      'Project Name': 'Pangoro',
      // Logo: pangoro_icon,
    },
    {
      ParaID: 2112,
      'Project Name': 'Pichiu',
      // Logo: pichiu_icon,
    },
    {
      ParaID: 2094,
      'Project Name': 'Standard',
      // Logo: standard_icon,
    },
    {
      ParaID: 2005,
      'Project Name': 'Wendala',
      // Logo: karura_icon,
    },
    {
      ParaID: 2013,
      'Project Name': 'Whala',
      // Logo: whala_icon,
    },
    {
      ParaID: 2085,
      'Project Name': 'WILT',
      // Logo: kilt_icon,
    },
  ],
}
const relaychain: RelaychainName[] = ['kusama', 'polkadot', 'rococo', 'westend']

export const parachainProjectInfoBuddle: ParachainInfos = relaychain.reduce(
  (buddle, currentRelaychainName) => {
    Object.keys(parachainInfos[currentRelaychainName]).forEach((paraId) => {
      buddle[currentRelaychainName][paraId] = { ...parachainInfos[currentRelaychainName][paraId] }
    })
    localParachainInfos[currentRelaychainName].forEach((projectInfo) => {
      buddle[currentRelaychainName][projectInfo.ParaID] = { ...projectInfo }
    })
    return buddle
  },
  { kusama: {}, polkadot: {}, rococo: {}, westend: {} } as ParachainInfos
)

export function getParachainProjectInfoById(relaychainName: RelaychainName, parachainId: number) {
  return parachainProjectInfoBuddle[relaychainName][parachainId]
}

export const DEFAULT_PARACHAIN = {
  ParaID: '',
  'Project Name': 'Unknown',
  Logo: '',
  'Description (en)': '',
  'Description (zh)': '',
  'Parachain Crowdloans Allocation (en)': '',
  'Parachain Crowdloans Allocation (zh)': '',
  'Auction Reward & Reward Vesting Schedule (en)': '',
  'Auction Reward & Reward Vesting Schedule (zh)': '',
  'Financing Information (en)': '',
  'Financing Information (zh)': '',
  'Website Link': '',
  'Twitter Link': '',
  'Telegram Link': '',
  'Discord Link': '',
  'Medium Link': '',
  'Github Link': '',
  'Owner account': '',
}
