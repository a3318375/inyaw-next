"use client"

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {Lv2d} from "@/components/Lv2d";
import {Cog6ToothIcon, ArrowUpIcon, SunIcon, MoonIcon} from "@heroicons/react/20/solid";

export default function LayoutArticleContent({children}: { children: React.ReactNode }) {

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

    const onScroll = () => {
        if (!tick) {
            requestAnimationFrame(bindHandleScroll);
            setTick(true)
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

    useEffect(() => {
        setTheme(localStorage.theme ? localStorage.theme : 'light')
        document.getElementById('pageContent')?.addEventListener('scroll', onScroll, false);
        const tocList = document.querySelectorAll(".entry-content h1, h2, h3, h4, h5, h6");
        if (tocList && tocList.length > 0) {
            const toc = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    // Add 'active' class if observation target is inside viewport
                    if (entry.isIntersecting) {
                        const tocLiList = document.querySelectorAll(".toc-list li");
                        Array.from(tocLiList, v => {
                            const aLink = v.querySelector('.toc-link');
                            if (aLink && aLink.getAttribute('href')?.replace('#', '') === entry.target.id) {
                                v.classList.add("is-active-link")
                                aLink.classList.add("is-active-link")
                            } else {
                                v.classList.remove("is-active-link")
                                aLink?.classList.remove("is-active-link")
                            }
                        });
                    }
                })
            })
            // 监听滚动
            Array.from(tocList).map(item => toc.observe(item));
        }
    }, []);
    return (
        <div className="w-full h-screen grid overflow-hidden">
            <div id="pageContent" className="overflow-y-auto relative">
                <GlobalNav menuShow={menuShow}/>
                <div className="w-full">
                    {children}
                </div>
                <Lv2d/>
                <Footer layoutType={false}/>
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
                <div id="aplayer" className="hidden md:block"/>
            </div>
        </div>
    )
}
