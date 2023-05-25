import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

const Flex: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx('flex', className)} {...props}>
    {children}
  </div>
)

export default Flex
