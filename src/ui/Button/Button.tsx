'use client'

import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  outline?: boolean
  small?: boolean
}

const Button: React.FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({ children, className, outline, small, ...props }) => (
  <button
    type="button"
    className={clsx(
      'rounded  text-sm border border-sub-network',
      { 'text-sub-network bg-sub-white': outline },
      { 'text-sub-white bg-sub-network': !outline },
      { 'px-8 py-1.5': !small },
      { 'px-4 py-0.5': small },
      className
    )}
    {...props}>
    {children}
  </button>
)

export default Button
