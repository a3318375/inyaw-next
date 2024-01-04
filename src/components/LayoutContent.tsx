"use client"

import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import {Lv2d} from "@/components/Lv2d";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"


export default function LayoutContent({children}: { children: React.ReactNode }) {
    const toTop = () => {
        window.scrollTo(0,0)
    }
    return (
        <div className="w-full dark:bg-slate-800">
            <MainHeader/>
            <div>
                <div className="relative w-full min-h-screen hidden md:block bg-no-repeat bg-cover bg-center"
                     style={{backgroundImage: `url(https://media.inyaw.com/cover/cover1.png-inyaa)`}}>
                    <div className="absolute w-full h-full bg-black bg-opacity-30">
                        <div className="absolute top-[43%] text-center w-full">
                            <h1 className="text-white text-4xl pb-2">INYAW BLOG</h1>
                            <div className="text-white pt-2">一个个人小屋</div>
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
