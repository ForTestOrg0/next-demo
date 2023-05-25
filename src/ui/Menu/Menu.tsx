import React from 'react';
import clsx from 'clsx';
import { Menu as HeadlessuiMenu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BareProps } from '@/types/page';

export const Menu: React.FC<BareProps> = ({ children, className }) => (
  <HeadlessuiMenu
    as="div"
    className={clsx('relative inline-block text-left', className)}
  >
    {children}
  </HeadlessuiMenu>
);

export const MenuButton = HeadlessuiMenu.Button;

export const MenuItems: React.FC<BareProps> = ({ children, className }) => (
  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <HeadlessuiMenu.Items
      className={clsx(
        'absolute origin-top-right divide-y divide-gray-100 rounded bg-sub-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        className
      )}
    >
      <div className="px-1 py-1">{children}</div>
    </HeadlessuiMenu.Items>
  </Transition>
);

export const MenuItem = HeadlessuiMenu.Item;

// export const MenuItem: React.FC<{ Component: ElementType } & BareProps> = ({ Component }) => {
//   return (<HeadlessuiMenu.Item>
//     {({ active }) => (
//       <Component
//         className={`${active ? "bg-sub-b4" : "text-sub-black"
//           } group flex w-full items-center rounded px-2 py-2 text-sm cursor-pointer whitespace-nowrap`}
//       />
//     )}
//   </HeadlessuiMenu.Item>)
// };
