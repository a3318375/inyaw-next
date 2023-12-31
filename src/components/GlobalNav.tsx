import {Fragment} from 'react'
import Link from 'next/link'
import clsx from 'clsx';
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import Headroom from 'react-headroom';

export default function GlobalNav() {
    return (
        <Headroom className="fixed z-999 w-full">
            <Disclosure as="nav"
                        className={clsx('w-full bg-white bg-opacity-60 dark:bg-slate-900 shadow')}>
                {({open}) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-12 justify-between">
                                <div className="flex">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Logo/>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8 dark:text-white text-xs">
                                        <Link
                                            href="/"
                                            className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-semibold hover:text-orange-500"
                                        >
                                            首页
                                        </Link>
                                        <Link
                                            href="/"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold  hover:text-orange-500 hover:border-gray-300"
                                        >
                                            分类
                                        </Link>
                                        <Link
                                            href="/archive"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold  hover:text-orange-500 hover:border-gray-300"
                                        >
                                            归档
                                        </Link>
                                        <Link
                                            href="/me"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold  hover:text-orange-500 hover:border-gray-300"
                                        >
                                            关于我
                                        </Link>
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                    {/*<button*/}
                                    {/*    type="button"*/}
                                    {/*    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"*/}
                                    {/*>*/}
                                    {/*    <span className="sr-only">View notifications</span>*/}
                                    {/*    <BellIcon className="h-6 w-6" aria-hidden="true"/>*/}
                                    {/*</button>*/}
                                    <Search/>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button
                                                className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                                <div className="-mr-2 flex items-center sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center rounded-md p-2 text-black md:text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6 " aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                                >
                                    Dashboard
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black md:text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    Team
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black md:text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    Projects
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black md:text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    Calendar
                                </Disclosure.Button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </Headroom>
    );
}
