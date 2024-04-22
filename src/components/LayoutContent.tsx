"use client"

import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import {Lv2d} from "@/components/Lv2d";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"
import {useEffect, useState} from "react";


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
                <div className="relative w-full min-h-screen hidden md:block bg-no-repeat bg-cover bg-center"
                     style={{backgroundImage: `url(https://admin.inyaw.com/api/file/image?type=0&random=${Math.random()})`}}>
                    <div className="absolute w-full h-full bg-black bg-opacity-30">
                        <div className="absolute top-[43%] text-center w-full">
                            <h1 className="text-white text-4xl pb-2">INYAW BLOG</h1>
                            <div className="text-white pt-2">学习也是生活的一部分</div>
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
