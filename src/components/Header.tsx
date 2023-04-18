'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Flex, PageContent } from '@/ui';
import Link from 'next/link';

export default function Header() {
  return (
    <PageContent>
      <Container className='flex flex-1 justify-between'>
        <Image width={119} height={25} src='/website/logo.png' alt="subscan" />
        <Flex>
          <Link href={'/'}>Home</Link>
          <Link href={'/democracy_proposal'}>Governance</Link>
        </Flex>
      </Container>
    </PageContent>
  );
}
