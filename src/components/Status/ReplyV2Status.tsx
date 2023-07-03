import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { AyeIcon, NayIcon } from '@/ui/Svg'
import { Flex } from '@/ui'

interface Props extends BareProps {
  type: 'Ayes' | 'Nays' | 'Abstains'
  valid: boolean
}

const Component: React.FC<Props> = ({ children, type, className }) => {
  return (
    <div className={clsx('flex', className)}>
      {type === 'Ayes' && (
        <Flex className="justify-center items-center bg-sub-success-light p-[6px] rounded-full">
          <AyeIcon className="w-4 text-sub-white-light" />
        </Flex>
      )}
      {type === 'Nays' && (
        <Flex className="justify-center items-center bg-sub-error-light p-[6px] rounded-full">
          <NayIcon className="w-4 text-sub-white-light" />
        </Flex>
      )}
      {type === 'Abstains' && (
        <Flex className="justify-center items-center bg-sub-error-light p-[6px] rounded-full">
          <NayIcon className="w-4 text-sub-white-light" /> Abstains
        </Flex>
      )}
    </div>
  )
}

export default Component
