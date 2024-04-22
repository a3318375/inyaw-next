"use client"

import {BlogInfoType} from "@/api/service";
import clsx from "clsx";
import Link from "next/link";

export default function Recommend({blogInfo}: { blogInfo: BlogInfoType }) {
    return (
        <div className="overflow-hidden w-full mt-6 rounded-xl h-40">
            {blogInfo.previousBlog &&
                <div className={clsx('h-full', blogInfo.nextBlog ? 'md:float-left md:w-1/2' : 'md:float-left md:w-full')}>
                    <Link href={'/article/' + blogInfo.previousBlog?.id}
                          className="w-full h-full inline-block group">
                        <div className="relative w-full h-full bg-cover"
                             style={{backgroundImage: `url(https://admin.inyaw.com/api/file/image?type=0&random=${Math.random()})`}}>
                            <div className='absolute top-0 left-0 w-full h-full  bg-black bg-opacity-40 group-hover:bg-opacity-20' />
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
                          className="w-full h-full inline-block group">
                        <div className="relative w-full h-full bg-cover"
                             style={{backgroundImage: `url(https://admin.inyaw.com/api/file/image?type=0&random=${Math.random()})`}}>
                            <div className='absolute top-0 left-0 w-full h-full  bg-black bg-opacity-40 group-hover:bg-opacity-20'/>
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

