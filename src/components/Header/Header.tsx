"use client";

import {
  Container,
  Flex,
  LinkRouter,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  PageContent,
  Text,
  Link,
} from "@/ui";
import { ArrowDownFillingIcon } from "@/ui/Svg";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type MenuType = {
  href: string;
  label: string;
  targetBlank?: boolean;
}[];

type NavTree = {
  href?: string;
  label: string;
  menu?: MenuType;
  targetBlank?: boolean;
}[];

const blockchainLinks = [
  { href: "/block", label: "Blocks" },
  { href: "/extrinsic", label: "Extrinsics" },
  { href: "/transfer", label: "Transfers" },
  { href: "/event", label: "Events" },
  { href: "/assets", label: "Assets" },
  { href: "/account", label: "Accounts" },
  { href: "/log", label: "Logs" },
];

const parachainLinks = [
  { href: "/auction_board", label: "PLO Dashboard" },
  { href: "/parachain", label: "Parachain" },
  { href: "/auction", label: "Auction" },
  { href: "/crowdloan", label: "Crowdloan" },
  { href: "/bid", label: "Bid" },
];

const xcmLinks = [
  { href: "/xcm_dashboard", label: "XCM Dashboard" },
  { href: "/xcm_message", label: "XCM Message" },
  { href: "/xcm_transfer", label: "XCM Transfers" },
  { href: "/xcm_channel", label: "XCM Channels" },
];

const govLinks = [
  { href: "/democracy_proposal", label: "Democracy Proposals" },
  { href: "/referenda", label: "Democracy Referenda" },
  { href: "/council", label: "Council Motions" },
  { href: "/tech", label: "Tech. comm. Proposals" },
  { href: "/treasury", label: "Treasury Proposals" },
  { href: "/treasury_tip", label: "Treasury Tips" },
  { href: "/bounty", label: "Bounties" },
];

const toolsLinks = [
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

const navTree: NavTree = [
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

function AutoLink({
  label,
  href,
  external,
  className,
}: {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
}) {
  if (external) {
    return (
      <Link className={className} href={href} external>
        {label}
      </Link>
    );
  }
  return (
    <LinkRouter className={className} href={href}>
      {label}
    </LinkRouter>
  );
}

export default function Header() {
  return (
    <PageContent disablePadding className="bg-sub-network">
      <Container className="flex flex-1 justify-between items-center">
        <LinkRouter href="/">
          <Image
            className="h-[25px]"
            width={119}
            height={25}
            src="/website/logo.png"
            alt="subscan"
          />
        </LinkRouter>
        <Flex className="items-center space-x-5 text-sub-white min-h-[50px]">
          {navTree.map((nav) => {
            if (nav.menu) {
              return (
                <Menu key={nav.label}>
                  <MenuButton className="h-[50px]">
                    <Text className="inline-block text-white">{nav.label}</Text>
                    <ArrowDownFillingIcon className="w-3 inline-block ml-1 text-white" />
                  </MenuButton>
                  <MenuItems>
                    {nav.menu.map((link) => (
                      <MenuItem as="div" key={link.href}>
                        {({ active, close }) => (
                          <div onClick={close}>
                            <AutoLink
                              className={clsx({ 'bg-sub-b4': active }, 'menu-item')}
                              label={link.label}
                              href={link.href}
                              external={link.targetBlank}
                            />
                          </div>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              );
            }
            if (nav.href) {
              return (
                <AutoLink
                  className="text-white"
                  key={nav.href}
                  label={nav.label}
                  href={nav.href}
                  external={nav.targetBlank}
                />
              );
            }
            return null;
          })}
        </Flex>
      </Container>
    </PageContent>
  );
}
