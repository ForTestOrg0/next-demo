'use client'

import { EMAIL, GITHUB, MEDIUM, RIOT, TWITTER } from '@/config/constants'
import { Container, Flex, Link, LinkRouter, Menu, MenuButton, MenuItem, MenuItems, PageContent, Text } from '@/ui'
import { Drawer } from '@/ui/Drawer'
import {
  ArrowDownFillingIcon,
  ArrowRightBoldIcon,
  EmailBlockIcon,
  GithubBlockIcon,
  HamburgerButtonIcon,
  MediumBlockIcon,
  RiotBlockIcon,
  TwitterBlockIcon,
} from '@/ui/Svg'
import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSsr } from 'usehooks-ts'
import { LanguageSwitcher } from '../Footer/Footer'
import { navTree } from './menu'
import { ChainSwitcher } from '../ChainSwitcher'
import { BareProps, BareServerSideProps } from '@/types/page'

function AutoLink({ label, href, external, className }: { label: string; href: string; external?: boolean; className?: string }) {
  if (external) {
    return (
      <Link className={className} href={href} external>
        {label}
      </Link>
    )
  }
  return (
    <LinkRouter className={className} href={href}>
      {label}
    </LinkRouter>
  )
}

interface Props extends BareProps, BareServerSideProps {}

const Header: React.FC<Props> = ({ chain, children, className }) => {
  const [drawerShowing, setDrawerShowing] = useState(false)
  const { isBrowser } = useSsr()

  return (
    <PageContent disablePadding className="bg-sub-network">
      {/* desktop */}
      <Container className="flex-1 justify-between items-center hidden lg:flex">
        <LinkRouter href="/">
          {/* <Image className="h-[25px]" width={119} height={25} src="/website/logo.png" alt="subscan" /> */}
          <img src="/website/logo.png" alt="subscan" width={119} height={25} />
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
                    {nav.menu?.map((link) => (
                      <MenuItem as="div" key={link.href}>
                        {({ active, close }) => (
                          <div onClick={close}>
                            <AutoLink
                              className={clsx({ 'bg-sub-b4': active }, 'menu-item text-sm')}
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
              )
            }
            if (nav.href) {
              return <AutoLink className="text-white text-sm" key={nav.href} label={nav.label} href={nav.href} external={nav.targetBlank} />
            }
            return null
          })}
          <ChainSwitcher chain={chain} />
        </Flex>
      </Container>

      {/* mobile */}
      <Container className="flex w-full justify-between lg:hidden">
        <Flex className="flex-1 justify-start"></Flex>
        <Flex className="flex-2 justify-center items-center">
          <LinkRouter href="/">
            <Image className="h-[25px]" width={119} height={25} src="/website/logo.png" alt="subscan" />
          </LinkRouter>
        </Flex>
        <Flex className="flex-1 justify-end">
          <HamburgerButtonIcon className="w-6 py-3 px-3 box-content cursor-pointer text-sub-white-light" onClick={() => setDrawerShowing(true)} />
        </Flex>
        {isBrowser ? (
          <Drawer show={drawerShowing} title="MENU" onClose={() => setDrawerShowing(false)} maskClosable>
            <Flex className="flex-col pl-7 pt-8 h-full overflow-y-auto">
              {navTree.map((nav) => {
                if (nav.menu) {
                  return (
                    <Disclosure key={nav.label}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full py-2 pr-2 justify-between focus:outline-none items-center">
                            <span className="font-medium text-sub-white-light">{nav.label}</span>
                            <ArrowRightBoldIcon className={`${open ? 'rotate-90 transform' : ''} h-3 w-3 text-sub-b2-light`} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            {nav.menu?.map((link) => (
                              <AutoLink
                                key={`${link.href}${link.label}`}
                                className="menu-item text-sm !text-sub-white-light"
                                label={link.label}
                                href={link.href}
                                external={link.targetBlank}
                              />
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                }
                if (nav.href) {
                  return (
                    <AutoLink
                      className="block text-sub-white-light text-base font-medium py-2"
                      key={nav.href}
                      label={nav.label}
                      href={nav.href}
                      external={nav.targetBlank}
                    />
                  )
                }
                return null
              })}
            </Flex>
            <Flex className="px-2 py-4 justify-between bg-[#3a3545]">
              <Link href={TWITTER} external>
                <TwitterBlockIcon className="w-6 text-sub-white-light cursor-pointer" />
              </Link>
              <Link href={GITHUB} external>
                <GithubBlockIcon className="w-6 text-sub-white-light cursor-pointer" />
              </Link>
              <Link href={RIOT} external>
                <RiotBlockIcon className="w-6 text-sub-white-light cursor-pointer" />
              </Link>
              <Link href={MEDIUM} external>
                <MediumBlockIcon className="w-6 text-sub-white-light cursor-pointer" />
              </Link>
              <Link href={`mailto:${EMAIL}`} external>
                <EmailBlockIcon className="w-6 text-sub-white-light cursor-pointer" />
              </Link>
              <LanguageSwitcher className="w-6 text-sub-white-light cursor-pointer" />
            </Flex>
          </Drawer>
        ) : null}
      </Container>
    </PageContent>
  )
}

export default Header
