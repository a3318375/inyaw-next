"use client"

import clsx from "clsx";
import {useEffect, useState} from "react"

export function Scroll() {
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
        const myTop = scrollTopOj.scrollHeight
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
        <img
            className={clsx(navShow ? 'fixed w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover' : 'fixed filter blur-sm w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover')}/>
    );
}
