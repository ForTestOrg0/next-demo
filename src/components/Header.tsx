'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Flex, LinkRouter, Menu, MenuButton, MenuItem, MenuItems, PageContent } from '@/ui';
import Link from 'next/link';

const govLinks = [
  { href: "/democracy_proposal", label: "Democracy Proposals" },
  { href: "/referenda", label: "Democracy Referenda" },
  { href: "/council", label: "Council Motions" },
  { href: "/tech", label: "Tech. comm. Proposals" },
  { href: "/treasury", label: "Treasury Proposals" },
  { href: "/treasury_tip", label: "Treasury Tips" },
  { href: "/bounty", label: "Bounties" },
];

export default function Header() {
  return (
    <PageContent>
      <Container className='flex flex-1 justify-between'>
        <Image width={119} height={25} src='/website/logo.png' alt="subscan" />
        <Flex className='space-x-4'>
          <Link href={'/'}>Home</Link>
          <Menu>
            <MenuButton>Governance</MenuButton>
            <MenuItems>
              {govLinks.map((link) => (
                <MenuItem key={link.href}>
                  <LinkRouter href={link.href}>{link.label}</LinkRouter>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </Flex>
      </Container>
    </PageContent>
  );
}
