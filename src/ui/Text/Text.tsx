import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface TextProps {
  small?: boolean
  bold?: boolean
  block?: boolean
}

const Text: React.FC<TextProps & HTMLAttributes<HTMLDivElement>> = ({ children, className, small, bold, block, ...props }) => (
  <div className={clsx('text-sm', { 'inline-block': !block }, { 'text-xs': small }, { 'font-semibold': bold }, className)} {...props}>
    {children}
  </div>
)

export default Text
