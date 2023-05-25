import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BareProps } from '@/types/page'
import { Flex } from '../../Box'
import styles from './Tabs.module.css'

interface TabItem {
  value: string
  label: React.ReactNode
  replace?: boolean
  active?: boolean
}

interface Props extends BareProps {
  items: TabItem[]
}

const Tabs: React.FC<Props> = ({ children, className, items, ...props }) => {
  const router = useRouter()

  return (
    <Flex className={clsx('border-b border-sub-b4 text-sm', className)} {...props}>
      {items.map((item) => {
        return (
          <Link
            replace={item.replace}
            className={clsx('font-semibold', styles.tabItem, {
              [styles.active]: item.active,
            })}
            key={item.value}
            href={`${item.value}`}>
            {item.label}
          </Link>
        )
      })}
    </Flex>
  )
}

export default Tabs
