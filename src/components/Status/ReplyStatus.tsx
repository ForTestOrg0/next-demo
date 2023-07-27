import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { AyeIcon, NayIcon } from '@/ui/Svg'
import { Flex } from '@/ui'

interface Props extends BareProps {
  type: boolean
  valid?: boolean
}

const Component: React.FC<Props> = ({ children, type, className, valid = true }) => {
  return (
    <div className={clsx('flex', className)}>
      {type ? (
        <Flex className={clsx('justify-center items-center  p-[6px] rounded-full', valid ? 'bg-sub-success-light' : 'bg-sub-b2-light')}>
          <AyeIcon className="w-4 text-sub-white-light" />
        </Flex>
      ) : (
        <Flex className={clsx('justify-center items-center  p-[6px] rounded-full', valid ? 'bg-sub-error-light' : 'bg-sub-b2-light')}>
          <NayIcon className="w-4 text-sub-white-light" />
        </Flex>
      )}
    </div>
  )
}

export default Component
