"use client"

import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import {Lv2d} from "@/components/Lv2d";
import { ArrowUpIcon } from "@radix-ui/react-icons"
import {useEffect, useState} from "react";
import HomeCover from "@/components/HomeCover";


export default function LayoutContent({children}: { children: React.ReactNode }) {
    const [menuHide, setMenuHide] = useState(true)
    const toTop = () => {
        window.scrollTo(0,0)
    }
    useEffect(() => {
        const headerList = document.querySelectorAll("#topIndex");
        if (headerList && headerList.length > 0) {
            const menu = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    // Add 'active' class if observation target is inside viewport
                    if (entry.isIntersecting) {
                        setMenuHide(true)
                    } else {
                        setMenuHide(false)
                    }
                })
            })
            // 监听滚动
            Array.from(headerList).map(item => menu.observe(item));
        }
    }, []);

    return (
        <div className="w-full dark:bg-slate-800">
            <div id="topIndex" />
            <MainHeader menuHide={menuHide}/>
            <div>
                <HomeCover />
                <div className="w-full flex items-center justify-center">
                    <div id="mainContent" className="mx-0 md:p-8 md:max-w-content">
                        {children}
                    </div>
                </div>
            </div>
            <Lv2d/>
            <Footer/>
            <div className="fixed bottom-10 right-[4px] z-999 hidden md:block">
                <button className="block mb-2 w-9 h-9 rounded-md bg-sky-400 text-center" onClick={toTop}>
                    <ArrowUpIcon className="inline-block w-4 h-4 text-white"/>
                </button>
            </div>
            <div id="aplayer" className="hidden md:block"/>
        </div>
    )
}
