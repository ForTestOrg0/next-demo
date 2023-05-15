import React from 'react';
import { BareProps, ChainProps } from '@/types/page';
import { PageContent, Container, Text, Flex, Link, Popover, PopoverTrigger, PopoverContent } from '@/ui';
import { COPYRIGHT_PERIOD } from '@/config/constants';
import { DonateIcon, EarthIcon, MailIcon, MoonIcon, SunIcon } from '@/ui/Svg';
import { AccountLink } from '../Links';

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

const Component: React.FC<Props> = ({ chain, children, className }) => {
  return (<PageContent className='bg-sub-b4'>
    <Container className="flex flex-1 justify-between items-center py-5">
      <Flex className='w-full justify-between'>
        <Text className='text-xs text-sub-b2'>Subscan © {COPYRIGHT_PERIOD} - Developed by Subscan Team</Text>
        <Flex className='space-x-5 items-center'>
          <Link className='text-xs text-sub-b2' href='https://medium.com/subscan/tagged/subscan-update'>Version History</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/privacy'>Privacy Policy</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/term'>Terms of Use</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/open-source-notices'>Open Source Notices</Link>
          <Link className='text-xs text-sub-b2' href='https://subscan.statuspage.io/'>Service Status</Link>
          <Link className='text-xs text-sub-b2' href='https://github.com/itering/subscan-issue-tracker/issues/new/choose'>Feedback</Link>
          {chain?.chainConf.donate ? <DonatePopver symbol={chain?.nativeTokenConf.symbol} address={chain?.chainConf.donate} /> : null}
          <MailIcon className='w-5 text-sub-b2' />
          <MoonIcon className='w-5 text-sub-b2' />
          <SunIcon className='w-5 text-sub-b2' />
          <EarthIcon className='w-5 text-sub-b2' />
        </Flex>
      </Flex>
    </Container>
  </PageContent>);
};

export default Component;
