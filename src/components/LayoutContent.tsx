"use client"

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {Lv2d} from "@/components/Lv2d";

export default function LayoutContent({children}: { children: React.ReactNode }) {
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
        console.log('滚动中')
        const myTop = scrollTopOj ? scrollTopOj.scrollHeight : 0
        if (scrollTop > myTop / 10) {
            if (navShow) {
                setNavShow(false)
            }
        } else {
            if (!navShow) {
                setNavShow(true)
            }
        }
        if (tick) {
            setTick(false)
        }
    }

    function toStop() {
        const scrollTopOj = document.getElementById('pageContent')
        const scrollTop = scrollTopOj ? scrollTopOj.scrollTop : 0
        setOldScroll(scrollTop)
        if (oldScroll == nowScroll) {
            console.log('滚动结束了')
            if (!menuShow) {
                setMenuShow(true)
            }
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
        <div className="w-full h-screen grid overflow-hidden">
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
                </div>
            </div>
        </div>
    )
}
