'use client'

import React, { HTMLAttributes, forwardRef, ReactNode } from 'react'
import clsx from 'clsx'

interface InputProps {
  className?: string
  prefixCls?: string
  prefix?: ReactNode
  suffixCls?: string
  suffix?: ReactNode
  value?: string
  readOnly?: boolean
}
interface InputRef {
  focus: (options: any) => void
  blur: () => void
  select: () => void
  input: HTMLInputElement | null
}
const Input = forwardRef<InputRef & HTMLInputElement, InputProps & HTMLAttributes<HTMLInputElement>>(function Input(
  { className, prefix, prefixCls, suffix, suffixCls, ...props },
  ref
) {
  // const { className, prefix, prefixCls, suffix, suffixCls } = props
  return (
    <div className={clsx('relative inline-block', className)}>
      <input
        ref={ref}
        className={clsx('rounded px-4 py-1 text-sm border w-full h-10 leading-10', {
          'pl-8': prefix,
          'pr-8': suffix,
        })}
        {...props}></input>
      {prefix && <span className={clsx('absolute top-0 left-2.5 h-full flex', prefixCls)}>{prefix}</span>}
      {suffix && <span className={clsx('absolute top-0 right-2.5 h-full flex', suffixCls)}>{suffix}</span>}
    </div>
  )
})

export default Input
