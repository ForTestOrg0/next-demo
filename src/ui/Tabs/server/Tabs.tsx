import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { BareProps } from '@/types/page';
import { Flex } from '../../Box';
import styles from './Tabs.module.css'

interface TabItem {
  value: string;
  label: React.ReactNode;
}

interface Props extends BareProps {
  items: TabItem[];
}

const Tabs: React.FC<Props> = ({ children, className, items, ...props }) => {
  const router = useRouter();
  
  return <Flex className={clsx(className)} {...props}>
    {items.map((item) => {
      return (<Link className={clsx('font-semibold', styles.tabItem, {
        [styles.active]: router.pathname === item.value
      })} key={item.value} href={`${item.value}`}>{item.label}</Link>)
    })}
  </Flex>
};

export default Tabs;
