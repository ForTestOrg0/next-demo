import React, { useState } from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import style from './Checkbox.module.scss'

interface Props extends BareProps {
  label?: string
  checked: boolean
  labelCls?: string
  onChange?: () => void
}

const CheckBox: React.FC<Props> = ({ children, className, checked, label, labelCls, onChange, ...props }) => {
  const defaultChecked = checked ? checked : false
  const [isChecked, setIsChecked] = useState(defaultChecked)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          // onChange={() => setIsChecked((prev) => !prev)}
          onChange={() => onChange && onChange()}
          className={clsx(style.checkboxWrapper, { checked: checked })}
          {...props}
        />
        <span className={labelCls}>{label}</span>
      </label>
    </div>
  )
}

export default CheckBox
