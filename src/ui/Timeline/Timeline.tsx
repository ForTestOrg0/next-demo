import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'

interface Props extends BareProps {
  timelines: any[]
}

const Component: React.FC<Props> = ({ children, className, timelines, ...props }) => {
  return (
    <div className={clsx('w-14', className)} {...props}>
      <div className="h-[52px] bg-sub-b4 mb-[22px]"></div>
      {timelines.map((item, index) => {
        return (
          <div className="group" key={index}>
            <div className="flex justify-center">
              <div className="w-2.5 h-2.5 bg-sub-network rounded-[50%]"></div>
            </div>
            <div className="flex justify-center group-last-of-type:hidden">
              <div className="my-1 w-px h-[35px] bg-sub-network"></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Component
