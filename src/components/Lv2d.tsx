"use client"
import Script from "next/script";

export function Lv2d() {
    return (
        <>
            <Script src='https://media.inyaw.com/css/APlayer/APlayer.min.js'
                    strategy="lazyOnload"
                    onLoad={() => {
                        const initAudio = () => {
                            // @ts-ignore
                            const ap = new APlayer({
                                container: document.getElementById('aplayer'),
                                fixed: true,
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
                        initAudio();
                        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                            document.documentElement.classList.add('dark')
                        } else {
                            document.documentElement.classList.remove('dark')
                        }
                    }}/>
            <Script src='https://media.inyaw.com/css/canvas-next/canvas-nest.js' strategy="lazyOnload" />
            <link rel="stylesheet" href="https://media.inyaw.com/css/APlayer/APlayer.min.css" />
        </>

    );
}
