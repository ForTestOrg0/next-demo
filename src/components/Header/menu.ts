
export type MenuType = {
  href: string;
  label: string;
  targetBlank?: boolean;
}[];

export type NavTree = {
  href?: string;
  label: string;
  menu?: MenuType;
  targetBlank?: boolean;
}[];

export const blockchainLinks = [
  { href: "/block", label: "Blocks" },
  { href: "/extrinsic", label: "Extrinsics" },
  { href: "/transfer", label: "Transfers" },
  { href: "/event", label: "Events" },
  { href: "/assets", label: "Assets" },
  { href: "/account", label: "Accounts" },
  { href: "/log", label: "Logs" },
];

export const parachainLinks = [
  { href: "/auction_board", label: "PLO Dashboard" },
  { href: "/parachain", label: "Parachain" },
  { href: "/auction", label: "Auction" },
  { href: "/crowdloan", label: "Crowdloan" },
  { href: "/bid", label: "Bid" },
];

export const xcmLinks = [
  { href: "/xcm_dashboard", label: "XCM Dashboard" },
  { href: "/xcm_message", label: "XCM Message" },
  { href: "/xcm_transfer", label: "XCM Transfers" },
  { href: "/xcm_channel", label: "XCM Channels" },
];

export const govLinks = [
  { href: "/democracy_proposal", label: "Democracy Proposals" },
  { href: "/referenda", label: "Democracy Referenda" },
  { href: "/council", label: "Council Motions" },
  { href: "/tech", label: "Tech. comm. Proposals" },
  { href: "/treasury", label: "Treasury Proposals" },
  { href: "/treasury_tip", label: "Treasury Tips" },
  { href: "/bounty", label: "Bounties" },
];

export const toolsLinks = [
  { href: "/tools/charts", label: "Charts" },
  { href: "/tools/format_transform", label: "Account Format Transform" },
  { href: "/tools/price_converter", label: "Price Converter" },
  { href: "/runtime", label: "Runtime" },
  {
    href: "https://multisig.subscan.io/",
    label: "Multi-sig Tool",
    targetBlank: true,
  },
  { href: "https://support.subscan.io/", label: "API Docs", targetBlank: true },
  { href: "https://pro.subscan.io/", label: "Get API Key", targetBlank: true },
];

export const navTree: NavTree = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blockchain",
    menu: blockchainLinks,
  },
  {
    label: "Parachain",
    menu: parachainLinks,
  },
  {
    label: "XCM",
    menu: xcmLinks,
  },
  {
    label: "Staking",
    href: "/validator",
  },
  {
    label: "Governance",
    menu: govLinks,
  },
  {
    label: "Tools",
    menu: toolsLinks,
  },
];