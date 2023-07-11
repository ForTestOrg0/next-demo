import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { Text } from '@/ui'

interface Props extends BareProps {
  colorCls?: string
  title: string | number
  value: React.ReactNode
}

export const Legend01: React.FC<Props> = ({ style, children, title, value, colorCls, className }) => {
  return (
    <div className={clsx('flex', className)}>
      <div className={clsx('w-2 h-8 mr-2 rounded-sm', colorCls)} style={style}></div>
      <div>
        <Text block className="scale-[0.83] origin-[0%_50%] text-sub-network mt-[-4px]">
          {title}
        </Text>
        <Text className="whitespace-nowrap" block>
          {value}
        </Text>
      </div>
    </div>
  )
}
