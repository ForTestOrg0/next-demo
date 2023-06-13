import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { XCM } from '@/types/api'

interface Props extends BareProps {
  value: XCM
}

const Parameters: React.FC<Props> = ({ value, className }) => (
  <div className={clsx('flex', className)}>{`${value.origin_para_id}->${value.dest_para_id}`}</div>
)

export default Parameters
