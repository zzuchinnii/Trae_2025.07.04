'use client';

import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Logo from '../atoms/Logo';
import { useCartStore } from '@/lib/store';

const navigation = [
  { 
    name: '智能選花', 
    href: '#',
    dropdown: [
      { name: '問答：找到您的花卉', href: '/quiz' },
      { name: '心理測驗：找到你的命定花卉', href: '/personality-quiz' },
      { name: '依場合選購', href: '/shop/occasion' },
      { name: '依風格選購', href: '/shop/style' },
    ] 
  },
  { 
    name: '所有花禮', 
    href: '#',
    dropdown: [
      { name: '主題系列', href: '/shop/themes' },
      { name: '依主花分類', href: '/shop/flower-types' },
      { name: '依顏色分類', href: '/shop/colors' },
      { name: '客製工作室', href: '/shop/custom' },
    ] 
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const items = useCartStore((state) => state.items) || [];
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const total = items.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(total);
  }, [items]);

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Logo />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    item.dropdown ? (
                      <Menu as="div" className="relative" key={item.name}>
                        <Menu.Button className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                          {item.name}
                          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {item.dropdown.map((dropdownItem) => (
                                <Menu.Item key={dropdownItem.name}>
                                  {({ active }) => (
                                    <Link
                                      href={dropdownItem.href}
                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className="ml-4 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Link href="/cart" className="ml-4 flow-root lg:ml-6">
                    <div className="relative">
                        <ShoppingCartIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                        />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-xs text-white">{cartCount}</span>
                        )}
                    </div>
                </Link>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">開啟主選單</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div key={item.name}>
                    <Disclosure.Button
                      as="div"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      {item.name}
                    </Disclosure.Button>
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Disclosure.Button
                          key={dropdownItem.name}
                          as="a"
                          href={dropdownItem.href}
                          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >
                          {dropdownItem.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-4">
                    <button
                        type="button"
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="ml-4 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                        <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Link href="/cart" className="ml-4 flow-root">
                        <div className="relative">
                            <ShoppingCartIcon
                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-xs text-white">{cartCount}</span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}