import React, { Fragment } from 'react';
import { BareProps } from '@/types/page';
import { Tab as HeadlessuiTab } from '@headlessui/react'
import clsx from 'clsx';


// https://headlessui.com/react/tabs
export const TabGroup = HeadlessuiTab.Group;
export const TabList: React.FC<BareProps> = ({ children, className, ...props }) => {
  return (<HeadlessuiTab.List className={clsx('flex space-x-10', className)} {...props}>
    {children}
  </HeadlessuiTab.List>)
};

export const Tab: React.FC<BareProps> = ({ children }) => {
  return (<HeadlessuiTab as={Fragment}>
    {({ selected }) => (
      <div
        className={clsx('py-2 text-sm focus:outline-none cursor-pointer text-sub-black font-semibold', selected ? 'border-b-4 border-sub-network' : 'bg-white text-black')}
      >
        {children}
      </div>
    )}
  </HeadlessuiTab>)
};

export const TabPanels = HeadlessuiTab.Panels;
export const TabPanel = HeadlessuiTab.Panel;