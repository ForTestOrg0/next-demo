import React from 'react'
import { BareProps } from '@/types/page'
import Image from 'next/image'
import { Container, Flex, Link, PageContent, Text } from '@/ui'
import { TwitterBlockIcon } from '@/ui/Svg'
import { TWITTER } from '@/config/constants'
import clsx from 'clsx'

const Component: React.FC<BareProps> = ({ className }) => {
  return (
    <PageContent disablePadding className={clsx('bg-sub-b4', className)}>
      <Container className="flex flex-1 justify-between items-center py-3 lg:py-5 z-10">
        <Flex className="w-full justify-between px-4 lg:px-0">
          <Image width={120} height={24} src="/website/logo-light.png" alt="subscan.io" />

          <Link href={TWITTER} external>
            <Flex className="justify-center items-center space-x-3">
              <TwitterBlockIcon className="w-6 text-sub-network cursor-pointer" />
              <Text className="text-sub-network font-semibold">@subscan_io</Text>
            </Flex>
          </Link>
        </Flex>
      </Container>
    </PageContent>
  )
}

export default Component
