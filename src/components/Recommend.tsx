"use client"

import {BlogInfoType} from "@/api/service";
import clsx from "clsx";
import Link from "next/link";
import {useState} from "react";


export default function Recommend({blogInfo}: { blogInfo: BlogInfoType }) {
    const [lastBlur, setLastBlur] = useState(true)
    const [nextBlur, setNextBlur] = useState(true)

    function hideBlur(type: number) {
        if (type === 0) {
            setLastBlur(false)
        } else {
            setNextBlur(false)
        }
    }

    function showBlur(type: number) {
        if (type === 0) {
            setLastBlur(true)
        } else {
            setNextBlur(true)
        }
    }

    return (
        <div className="overflow-hidden w-full mt-6 rounded-xl h-40">
            {blogInfo.previousBlog &&
                <div className={clsx('h-full', blogInfo.nextBlog ? 'md:float-left md:w-1/2' : 'md:float-left md:w-full')}>
                    <Link href={'/article/' + blogInfo.previousBlog?.id}
                          onMouseLeave={() => showBlur(0)}
                          onMouseOver={() => hideBlur(0)}
                          className="w-full h-full inline-block">
                        <div className="relative w-full h-full relative bg-cover"
                             style={{backgroundImage: `url(${blogInfo.previousBlog.cover}-inyaa)`}}>
                            <div className={clsx('absolute top-0 left-0 w-full h-full  bg-black', lastBlur ? 'bg-opacity-40' : 'bg-opacity-20')}/>
                            <div className="absolute z-99 left-10 top-7">
                                <span className="text-white z-99">上一篇</span>
                                <h3 className="text-white mt-1">{blogInfo.previousBlog?.title}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            }
            {blogInfo.nextBlog &&
                <div className={clsx('h-full', blogInfo.previousBlog ? 'md:float-left md:w-1/2' : 'md:float-left md:w-full')}>
                    <Link href={'/article/' + blogInfo.nextBlog?.id}
                          onMouseLeave={() => showBlur(1)}
                          onMouseOver={() => hideBlur(1)}
                          className="w-full h-full inline-block">
                        <div className="relative w-full h-full relative bg-cover"
                             style={{backgroundImage: `url(${blogInfo.nextBlog.cover}-inyaa)`}}>
                            <div className={clsx('absolute top-0 left-0 w-full h-full  bg-black', nextBlur ? 'bg-opacity-40' : 'bg-opacity-20')}/>
                            <div className="absolute z-99 right-10 top-7 text-right">
                                <span className="text-white z-99">下一篇</span>
                                <h3 className="text-white mt-1">{blogInfo.nextBlog.title}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}

