import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { CopyIcon } from '@/ui/Svg'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { message } from '../Message'

interface Props extends BareProps {
  value: string
  msg?: string
}

const Component: React.FC<Props> = ({ children, className, msg, value, ...props }) => {
  const [copyVal, copy] = useCopyToClipboard()
  const copyFn = () => {
    copy(value)
    message['success'](msg || 'Copy Succeeded')
  }
  return (
    <div
      onClick={copyFn}
      className={clsx(
        'flex justify-center cursor-pointer w-5 h-5 text-sub-network/50 bg-sub-network/20 rounded-[50%] transition-opacity hover:opacity-80',
        className
      )}
      {...props}>
      <CopyIcon className="w-3" />
    </div>
  )
}

export default Component
