"use client"

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {Lv2d} from "@/components/Lv2d";

export default function LayoutContent({children}: { children: React.ReactNode }) {
    const [nowScroll, setNowScroll] = useState(0)
    const [navShow, setNavShow] = useState(true)
    const [menuShow, setMenuShow] = useState(true)
    let ticking = false;

    const bindHandleScroll = () => {
        const scrollTopOj = document.getElementById('pageContent')
        const scrollTop = scrollTopOj ? scrollTopOj.scrollTop : 0
        if (nowScroll > scrollTop) {
            setMenuShow(true)
        } else {
            setMenuShow(false)
        }
        setNowScroll(scrollTop)
        const myTop = scrollTopOj ? scrollTopOj.scrollHeight : 0
        if (scrollTop > myTop / 10) {
            setNavShow(false)
        } else {
            setNavShow(true)
        }
        ticking = false;
    }
    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(bindHandleScroll);
            ticking = true;
        }
    }
    useEffect(() => {
        document.getElementById('pageContent')?.addEventListener('scroll', onScroll, false);
    }, [nowScroll]);
    return (
        <div className="w-full h-screen grid overflow-hidden">
            <img
                className={clsx(navShow ? 'fixed w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover' : 'fixed filter blur-sm w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover')}/>
            <div id="pageContent" className="overflow-y-auto">
                <GlobalNav menuShow={menuShow}/>
                <div>
                    <div className="w-full min-h-screen"/>
                    <div id="mainContent" className="lg:grid lg:grid-cols-12 lg:gap-4 px-4 py-8">
                        <div className="w-full sm:col-start-4 sm:col-end-10 lg:col-start-5 lg:col-end-9">
                            {children}
                        </div>
                    </div>
                    <Lv2d />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
