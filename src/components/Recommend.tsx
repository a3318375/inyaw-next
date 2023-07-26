"use client"

import {BlogInfoType} from "@/api/service";
import clsx from "clsx";
import Link from "next/link";
import {useState} from "react";


export default async function Recommend({
                                            previousBlog,
                                            nextBlog
                                        }: { previousBlog?: BlogInfoType, nextBlog?: BlogInfoType }) {
    const [lastBlur, setLastBlur] = useState(true)
    const [nextBlur, setNextBlur] = useState(true)

    function hideBlur(type: number) {
        if (type === 0) {
            setLastBlur(false)
        } else {
            setNextBlur(false)
        }
    }

    function showBlur(type) {
        if (type === 0) {
            setLastBlur(true)
        } else {
            setNextBlur(false)
        }
    }

    return (
        <div className="overflow-hidden w-full mt-6 rounded-xl bg-gray-400 h-[150px]">
            {previousBlog &&
                <div className={clsx(nextBlog ? 'md:float-left md:w-1/2' : 'md:float-left md:w-full')}>
                    <Link href={'/article/' + previousBlog?.id}
                          onMouseLeave={() => showBlur(0)}
                          onMouseOver={() => hideBlur(0)}
                          className="w-full h-[150px] relative inline-block pt-[40px] px-[40px]">
                        <div id="previousBlog"
                             className={lastBlur ? 'absolute z-50 top-0 left-0 w-full h-full text-center bg-cover opacity-40' : 'absolute z-50 top-0 left-0 w-full h-full text-center bg-cover opacity-40 filter blur-sm'}
                             style={{backgroundImage: `url(${previousBlog.cover})`}}/>
                        <div className="absolute z-99 left-[40px]">
                            <span className="text-white z-99">上一篇</span>
                            <h3 className="text-white mt-[5px]">{previousBlog?.title}</h3>
                        </div>
                    </Link>
                </div>
            }
            {nextBlog &&
                <div className={clsx(previousBlog ? 'md:float-left md:w-1/2' : 'md:float-left md:w-full')}>
                    <Link href={'/article/' + nextBlog.id}
                          onMouseLeave={() => showBlur(1)}
                          onMouseOver={() => hideBlur(1)}
                          className="w-full h-150px relative inline-block pt-40px px-40px">
                        <div id="previousBlog"
                             className={nextBlur ? 'absolute z-50 top-0 left-0 w-full h-full text-center bg-cover opacity-40' : 'absolute z-50 top-0 left-0 w-full h-full text-center bg-cover opacity-40 filter blur-sm'}
                             style={{backgroundImage: `url(${nextBlog.cover})`}}/>
                        <div className="absolute z-99 left-40px">
                            <span className="text-white z-99">上一篇</span>
                            <h3 className="text-white mt-5px">{nextBlog.title}</h3>
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}

