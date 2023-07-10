"use client"

import {useEffect} from "react";
import Script from "next/script";

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
    const initAudio = () => {
        // @ts-ignore
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            listFolded: true,
            audio: [ // 歌曲列表
                {
                    name: '星茶会',
                    artist: '灰澈-星茶会',
                    url: 'https://media.inyaw.com/icon/test_music.mp3',
                    cover: 'http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg',
                    lrc: '',
                    theme: '#baf',
                },
            ],
        })
    }
    useEffect(() => {
        initAudio()
        initLv2d()
    }, []);
    return (
        <>
            <Script src='https://media.inyaw.com/css/APlayer/APlayer.min.js' strategy="beforeInteractive" />
            <Script src='https://media.inyaw.com/css/lv2d/live2dcubismcore.min.js' strategy="beforeInteractive" />
            <Script src='https://media.inyaw.com/css/lv2d/pixi.min.js' strategy="beforeInteractive" />
            <Script src='https://media.inyaw.com/css/lv2d/live2dv3.min.js' strategy="beforeInteractive" />

            <div id="L2dCanvas1"
                 className="Canvas hidden md:block fixed opacity-100 pointer-events-none bottom-[-130px] right-[-250px] -z-999"/>
        </>

    );
}
