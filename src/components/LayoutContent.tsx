"use client"

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {Lv2d} from "@/components/Lv2d";
import {ArrowUpIcon, Cog6ToothIcon, MoonIcon, SunIcon} from "@heroicons/react/20/solid";

export default function LayoutContent({children}: { children: React.ReactNode }) {
    const [buttonShow, setButtonShow] = useState(false)
    const [theme, setTheme] = useState('light')
    const [nowScroll, setNowScroll] = useState(0)
    const [oldScroll, setOldScroll] = useState(0)

    const [tick, setTick] = useState(false)
    const [navShow, setNavShow] = useState(true)
    const [menuShow, setMenuShow] = useState(true)


    let timer: number | null = null;
    const bindHandleScroll = () => {
        if (timer) {
            window.clearTimeout(timer) // 每次滚动前 清除一次
        }
        timer = window.setTimeout(toStop, 200);

        const scrollTopOj = document.getElementById('pageContent')
        const scrollTop = scrollTopOj ? scrollTopOj.scrollTop : 0
        if (menuShow) {
            setMenuShow(false)
        }
        setNowScroll(scrollTop)
        //console.log('滚动中')
        const myTop = scrollTopOj ? scrollTopOj.scrollHeight : 0
        if (scrollTop > myTop / 10) {
            setNavShow(false)
        } else {
            setNavShow(true)
        }
        setTick(false)
    }

    function toStop() {
        const scrollTopOj = document.getElementById('pageContent')
        const scrollTop = scrollTopOj ? scrollTopOj.scrollTop : 0
        setOldScroll(scrollTop)
        if (oldScroll == nowScroll) {
            //console.log('滚动结束了', menuShow)
            setMenuShow(true)
        }
    }
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
        const scrollTopOj = document.getElementById('pageContent')
        if(scrollTopOj && scrollTopOj.scrollTop){
            scrollTopOj.scrollTop = 0;
        }
    }
    const onScroll = () => {
        if (!tick) {
            requestAnimationFrame(bindHandleScroll);
            setTick(true)
        }
    }
    useEffect(() => {
        document.getElementById('pageContent')?.addEventListener('scroll', onScroll, false);
    }, []);
    return (
        <div className="w-full h-screen grid overflow-hidden dark:bg-slate-800">
            <img
                className={clsx(navShow ? 'fixed w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover' : 'fixed filter blur-sm w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover')}/>
            <div id="pageContent" className="overflow-y-auto">
                <GlobalNav menuShow={menuShow}/>
                <div>
                    <div className="w-full min-h-screen hidden md:block"/>
                    <div className="w-full flex items-center justify-center">
                        <div id="mainContent" className="mx-0 md:p-8 md:max-w-content">
                            {children}
                        </div>
                    </div>
                    <Lv2d/>
                    <Footer layoutType={true}/>
                    <div className="fixed bottom-10 right-10 z-999">
                        <button className={clsx('block mb-2 w-9 h-9 rounded-md bg-sky-400 text-center', buttonShow ? '' : 'hidden')}
                                onClick={updateTheme}>
                            {theme && theme === 'light'
                                ? <SunIcon className="inline-block w-4 h-4 text-white"/>
                                : <MoonIcon className="inline-block w-4 h-4 text-white"/>
                            }
                        </button>
                        <button className="block mb-2 w-9 h-9 rounded-md bg-sky-400 text-center" onClick={()=>setButtonShow(!buttonShow)}>
                            <Cog6ToothIcon className="inline-block w-4 h-4 text-white animate-spin"/>
                        </button>
                        <button className="block mb-2 w-9 h-9 rounded-md bg-sky-400 text-center" onClick={toTop}>
                            <ArrowUpIcon className="inline-block w-4 h-4 text-white"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
