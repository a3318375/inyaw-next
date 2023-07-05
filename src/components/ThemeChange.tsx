"use client"

import { useEffect } from 'react';
import { themeChange } from 'theme-change'
import { themes } from './ThemeDatas'
import { SwatchIcon } from '@heroicons/react/24/outline'

export default function ThemeChange() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])
    return (
        <div className='ml-4 flex items-center md:ml-6'>
            <div title='Change Theme' className='dropdown dropdown-end'>
                <div tabIndex={0} className='btn btn-ghost gap-1 normal-case'>
                    <SwatchIcon className='w-6 h-6'/>
                </div>
                <div className='scrollbar dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl'>
                    <div className='grid grid-cols-1 gap-3 p-3' tabIndex={0}>
                        {themes.map((theme) => {
                            return (
                                <div key={theme.id} className='overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-base-content'
                                     tabIndex={0} data-set-theme={theme.id} data-act-class='outline'>
                                    <div data-theme={theme.id} className='w-full cursor-pointer bg-base-100 font-sans text-base-content'>
                                        <div className='grid grid-cols-5 grid-rows-3'>
                                            <div className='col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4'>
                                                <div className='flex-grow text-sm font-bold'>
                                                    {theme.id}
                                                </div>
                                                <div className='flex flex-shrink-0 flex-wrap gap-1'>
                                                    <div className='w-2 rounded bg-primary' />
                                                    <div className='w-2 rounded bg-secondary' />
                                                    <div className='w-2 rounded bg-accent' />
                                                    <div className='w-2 rounded bg-neutral' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}