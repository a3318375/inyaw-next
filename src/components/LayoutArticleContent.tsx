"use client"

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {Lv2d} from "@/components/Lv2d";

export default function LayoutArticleContent({children}: { children: React.ReactNode }) {
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


    useEffect(() => {
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
            <img
                className={clsx(navShow ? 'fixed w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover' : 'fixed filter blur-sm w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover')}/>
            <div id="pageContent" className="overflow-y-auto relative">
                <GlobalNav menuShow={menuShow}/>
                <div className="w-full">
                    {children}
                </div>
                <Lv2d/>
                <Footer layoutType={false}/>
            </div>
        </div>
    )
}
