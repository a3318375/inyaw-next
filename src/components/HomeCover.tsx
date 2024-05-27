"use client"

import {ArrowDownIcon} from "@radix-ui/react-icons";
import {memo} from "react";

export default memo(function HomeCover() {
    return (
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
    )
})
