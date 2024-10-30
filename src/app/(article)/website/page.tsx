import Comment from "@/components/Comment";

export default function Website() {
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'/>
            <title>关于本站</title>
            <meta name='keywords' content="关于我"/>
            <meta name='description' content="关于我"/>
            <div className="w-full">
                {/*<div className="bg-white bg-opacity-80">*/}
                <div className="relative w-full h-25rem bg-no-repeat bg-cover bg-center"
                     style={{backgroundImage: `url(https://admin.inyaw.com/api/file/image?type=0&random=${Math.random()})`}}>
                    <div className="absolute w-full h-full bg-black bg-opacity-30">
                        <div className="absolute bottom-16 text-center w-full">
                            <h1 className="text-white text-4xl pb-2">关于本站</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="md:flex items-stretch relative">
                    <div className="md:max-w-content mx-auto">
                        <div className="prose max-w-none p-4 dark:prose-invert">
                            <div className="entry-content">
                                <p className="mt-5"><strong>本站使用react开发，开源地址为：<a
                                    href="https://github.com/a3318375/inyaw-next/tree/shadcn"
                                    target="_blank">点我</a></strong></p>
                                <p><strong>本站使用技术:</strong></p>
                                <p>
                                    <ul>
                                        <li>
                                            <section><strong>nextjs14：</strong>服务器渲染</section>
                                        </li>
                                        <li>
                                            <section><strong>shadcn：</strong>个人比较喜欢的ui框架，本站导航用到了一些组件</section>
                                        </li>
                                        <li>
                                            <section><strong>tailwindcss：</strong>原子化css，用来写样式很方便</section>
                                        </li>
                                        <li>
                                            <section><strong>next-mdx-remote：</strong>处理正文中的markdown</section>
                                        </li>
                                        <li>
                                            <section><strong>rehype和shiki：</strong>用于正文中的代码渲染</section>
                                        </li>
                                        <li>
                                            <section><strong>dayjs和clsx：</strong>一些方便的小工具，前者是时间处理，后者是判断行内样式</section>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <Comment/>
                    </div>
                </div>
            </div>
        </>
    )
}

