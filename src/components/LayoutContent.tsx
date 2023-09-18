"use client"

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import clsx from "clsx";
import {useState} from "react";
import {Lv2d} from "@/components/Lv2d";
import {ArrowUpIcon, Cog6ToothIcon, MoonIcon, SunIcon, ArrowDownIcon} from "@heroicons/react/20/solid";


export default function LayoutContent({children}: { children: React.ReactNode }) {
    const [buttonShow, setButtonShow] = useState(false)
    const [theme, setTheme] = useState('light')

    const updateTheme = () => {
        if (theme === 'light') {
            document.documentElement.classList.remove(localStorage.theme)
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.remove(localStorage.theme)
            localStorage.theme = 'light'
            document.documentElement.classList.add('light')
            setTheme('light')
        }
    }
    const toTop = () => {
        window.scrollTo(0,0)
    }
    return (
        <div className="w-full h-screen dark:bg-slate-800">
            <GlobalNav/>
            <div>
                <div className="relative w-full min-h-screen hidden md:block bg-no-repeat bg-cover bg-center"
                     style={{backgroundImage: `url(https://media.inyaw.com/cover/cover1.png-inyaa)`}}>
                    <div className="absolute w-full h-full bg-black bg-opacity-30">
                        <div className="absolute top-[43%] text-center w-full">
                            <h1 className="text-white text-4xl pb-2">INYAW BLOG</h1>
                            <div className="text-white pt-2">一个个人小屋</div>
                        </div>
                        <div className="absolute bottom-8 w-full">
                            <div className="text-white animate-bounce w-full text-center m-auto">
                                <button>
                                    <ArrowDownIcon className="w-5 h-5"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div id="mainContent" className="mx-0 md:p-8 md:max-w-content">
                        {children}
                    </div>
                </div>
                <Lv2d/>
                <Footer/>
                <div className="fixed bottom-10 right-10 z-999 hidden md:block">
                    <button
                        className={clsx('block mb-2 w-9 h-9 rounded-md bg-sky-400 text-center', buttonShow ? '' : 'hidden')}
                        onClick={updateTheme}>
                        {theme && theme === 'light'
                            ? <SunIcon className="inline-block w-4 h-4 text-white"/>
                            : <MoonIcon className="inline-block w-4 h-4 text-white"/>
                        }
                    </button>
                    <button className="block mb-2 w-9 h-9 rounded-md bg-sky-400 text-center"
                            onClick={() => setButtonShow(!buttonShow)}>
                        <Cog6ToothIcon className="inline-block w-4 h-4 text-white animate-spin"/>
                    </button>
                    <button className="block mb-2 w-9 h-9 rounded-md bg-sky-400 text-center" onClick={toTop}>
                        <ArrowUpIcon className="inline-block w-4 h-4 text-white"/>
                    </button>
                </div>
            </div>
            <div id="aplayer" className="hidden md:block"/>
        </div>
    )
}
