"use client"

import Giscus from '@giscus/react';
export default function Comment() {
    return (
        <div className="mt-6">
            <Giscus
                id="comments"
                repo="a3318375/inyaw-comment"
                repoId="R_kgDOKT4vbg"
                category="General"
                categoryId="DIC_kwDOKT4vbs4CZVgx"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="preferred_color_scheme"
                lang="zh-CN"
                loading="lazy"
            />
        </div>
    )
}
