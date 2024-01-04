"use client"

import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {Lv2d} from "@/components/Lv2d";
import { ArrowUpIcon, GearIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons"

export default function LayoutArticleContent({children}: { children: React.ReactNode }) {
    const [menuHide, setMenuHide] = useState(true)
    const toTop = () => {
        window.scrollTo(0,0)
    }

    useEffect(() => {
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
            <div className="w-full">
                {children}
            </div>
            <Lv2d/>
            <Footer/>
            <div className="fixed bottom-10 right-10 z-999 hidden md:block">
                <button className="block mb-2 w-9 h-9 rounded-md bg-sky-400 text-center" onClick={toTop}>
                    <ArrowUpIcon className="inline-block w-4 h-4 text-white"/>
                </button>
            </div>
            <div id="aplayer" className="hidden md:block"/>
        </div>
    )
}
