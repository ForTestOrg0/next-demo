import React, { useCallback, useEffect, useState } from 'react';
import { BareProps, ChainProps } from '@/types/page';
import { PageContent, Container, Text, Flex, Link, Popover, PopoverTrigger, PopoverContent, Menu, MenuButton, MenuItems, MenuItem } from '@/ui';
import { COPYRIGHT_PERIOD, EMAIL } from '@/config/constants';
import { DonateIcon, EarthIcon, EmailBlockIcon, MailIcon, MoonIcon, SunIcon } from '@/ui/Svg';
import { AccountLink } from '../Links';
import { useDarkMode } from 'usehooks-ts';
import { docCookies } from '@/utils/cookies';
import clsx from 'clsx';

interface Props extends BareProps {
  chain?: ChainProps | undefined;
}

function DonatePopver({ symbol, address }: { symbol: string; address: string }) {
  return (
    <Popover>
      <PopoverTrigger><DonateIcon className='w-5 text-sub-b2' /></PopoverTrigger>
      <PopoverContent>
        <Text block>Donate ({symbol})</Text>
        <AccountLink address={address} />
      </PopoverContent>
    </Popover>
  );
}

function ThemeSwitcher() {
  const [isDark, SetIsDark] = useState(true);
  const { isDarkMode, enable, disable } = useDarkMode()


  const enableDark = useCallback(() => {
    document.documentElement.classList.add('dark');
    docCookies.setItem('theme', 'dark')
    enable();
  }, [enable])

  const disableDark = useCallback(() => {
    document.documentElement.classList.remove('dark');
    docCookies.setItem('theme', '')
    disable();
  }, [disable])

  useEffect(() => {
    SetIsDark(isDarkMode);
    isDarkMode ? enableDark() : disableDark();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return (
    <>
      {isDark ? <SunIcon onClick={disableDark} className='w-5 text-sub-b2 cursor-pointer' /> : <MoonIcon onClick={enableDark} className='w-5 text-sub-b2 cursor-pointer' />}
    </>
  )
}

export function LanguageSwitcher({ className }: BareProps) {
  const languages = [{
    value: 'en',
    label: 'English'
  }, {
    value: 'zh',
    label: '简体中文'
  }];

  return (
    <Popover>
      <PopoverTrigger><EarthIcon className={clsx(className, { 'w-5 text-sub-b2 cursor-pointer': !className })} /></PopoverTrigger>
      <PopoverContent className='bg-sub-b4 p-3 rounded'>
        {languages.map((lang) => {
          return <div className='py-2 focus:bg-sub-b4/60' key={lang.value}>{lang.label}</div>
        })}
      </PopoverContent>
    </Popover>
  )
}

const Component: React.FC<Props> = ({ chain, children, className }) => {
  return (<PageContent disablePadding className='bg-sub-b4'>
    <Container className="flex flex-1 justify-between items-center py-3 lg:py-5">
      <Flex className='w-full justify-between px-4 lg:px-0'>
        <Text className='text-xs text-sub-b2'>Subscan © {COPYRIGHT_PERIOD} - Developed by Subscan Team</Text>
        <Flex className='space-x-5 items-center hidden lg:flex'>
          <Link className='text-xs text-sub-b2' href='https://medium.com/subscan/tagged/subscan-update'>Version History</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/privacy'>Privacy Policy</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/term'>Terms of Use</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/open-source-notices'>Open Source Notices</Link>
          <Link className='text-xs text-sub-b2' href='https://subscan.statuspage.io/'>Service Status</Link>
          <Link className='text-xs text-sub-b2' href='https://github.com/itering/subscan-issue-tracker/issues/new/choose'>Feedback</Link>
          {chain?.chainConf.donate ? <DonatePopver symbol={chain?.nativeTokenConf.symbol} address={chain?.chainConf.donate} /> : null}
          <Link href={`mailto:${EMAIL}`} external><EmailBlockIcon className='w-5 text-sub-b2' /></Link>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Flex>
        <Flex className='space-x-5 items-center lg:hidden'>
          <ThemeSwitcher />
          {chain?.chainConf.donate ? <DonatePopver symbol={chain?.nativeTokenConf.symbol} address={chain?.chainConf.donate} /> : null}
        </Flex>
      </Flex>
    </Container>
  </PageContent>);
};

export default Component;
