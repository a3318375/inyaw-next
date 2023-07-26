"use client"

import {Popover, Transition} from '@headlessui/react'
import {SunIcon, MoonIcon, ComputerDesktopIcon} from '@heroicons/react/24/outline'
import {Fragment} from 'react'

export default function Theme() {
    const updateTheme = (theme: string) => {
        document.documentElement.classList.remove(localStorage.theme)
        localStorage.theme = theme
        document.documentElement.classList.add(theme)
    }
    return (
        <Popover>
            {({open}) => (
                <>
                    <Popover.Button
                        className={`
                ${open ? '' : 'text-opacity-90'}
                items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                        <SunIcon
                            className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                            aria-hidden="true"
                        />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            className="absolute z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-8 bg-white p-7">
                                    <a
                                        href="javaScript:void(0);"
                                        onClick={() => updateTheme('light')}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                        <SunIcon
                                            className="flex h-5 w-5 shrink-0 items-center justify-center sm:h-5 sm:w-5"/>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">
                                                light
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="javaScript:void(0);"
                                        onClick={() => updateTheme('dark')}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                        <MoonIcon
                                            className="flex h-5 w-5 shrink-0 items-center justify-center sm:h-5 sm:w-5"/>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">
                                                dark
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="javaScript:void(0);"
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                        <ComputerDesktopIcon
                                            className="flex h-5 w-5 shrink-0 items-center justify-center sm:h-5 sm:w-5"/>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">
                                                computer
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
