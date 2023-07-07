"use client"

import {useEffect} from "react";

export function Lv2d() {
    const initLv2d = () => {
        // @ts-ignore
        new l2dViewer({
            el: document.getElementById('L2dCanvas'), // 要添加Live2d的元素, 支持dom选择器和jq选择器
            basePath: 'https://media.inyaw.com/lv2d/moc3', // 模型根目录
            width: 1000,
            height: 800,
            modelName: 'xuefeng_3', // 模型名称
            sounds: [ // 触摸播放声音
                'sounds/demo.mp3', // 相对路径是相对于模型文件夹
                'https://cdn.jsdelivr.net/npm/live2dv3@latest/assets/biaoqiang_3/sounds/demo.mp3', // 也可以是网址
            ],
        })
    }
    useEffect(() => {
        initLv2d()
    }, []);
    return (
        <div id="L2dCanvas"
             className="Canvas hidden md:block fixed opacity-100 pointer-events-none bottom-[-110px] right-[-250px] -z-999"/>
    );
}
