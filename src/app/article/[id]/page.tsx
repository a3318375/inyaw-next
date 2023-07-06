import {BlogInfoType} from "@/api/service";
import {ChatBubbleBottomCenterTextIcon, ClockIcon, FireIcon, WalletIcon} from '@heroicons/react/24/outline';
import {Metadata} from "next";
import Markdown from "@/components/Markdown";

async function findBlogInfo(id: number) {
    const res = await fetch('https://admin.inyaw.com/api/blog/web/info?id=' + id)
    const post = await res.json()
    if (post && post.code && post.code === 1) {
        return post.data;
    } else {
        return {}
    }
}

export async function generateMetadata({params: {id}}: { params: { id: number } }): Promise<Metadata> {
    const blogInfo: BlogInfoType = await findBlogInfo(id)
    return {
        title: blogInfo.title,
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        keywords: blogInfo.title,
        description: blogInfo.summary,
    }
}

export default async function Article({params: {id}}: { params: { id: number } }) {
    const blogInfo: BlogInfoType = await findBlogInfo(id)
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'/>
            <meta name='keywords' content={blogInfo.title}/>
            <meta name='description' content={blogInfo.summary}/>
            <div>
                <div className="card w-full glass rounded-none static overflow-hidden">
                    <figure><img src={blogInfo.cover + '!inyaa'} alt="car!"/></figure>
                    <div
                        className="card-body w-full absolute bottom-0 bg-neutral bg-opacity-60 text-white p-3 transition duration-500 translate-y-8 hover:translate-y-0">
                        <h2 className="card-title block w-full">
                            <a>{blogInfo.title}</a>
                        </h2>
                        <div className="text-xs">
                            <ClockIcon
                                className="text-sm inline-block bg-base-500 w-4 h-4"/><span> 发表于 {blogInfo.createTime}</span>
                            <FireIcon
                                className="text-sm ml-1 inline-block bg-base-500 w-4 h-4"/><span> {blogInfo.views} 热度</span>
                            <ChatBubbleBottomCenterTextIcon
                                className="text-sm ml-1 inline-block bg-base-500 w-4 h-4"/><span> {blogInfo.comments} 条评论</span>
                            <WalletIcon
                                className="text-sm ml-1 inline-block bg-base-500 w-4 h-4"/><span> {blogInfo.type?.name}</span>
                        </div>
                        <p className="truncate ...">{blogInfo.summary}</p>
                    </div>
                </div>
                <div className="bg-base-100 opacity-80 shadow-md">
                    <article className="prose max-w-none p-4">
                        <Markdown context={blogInfo.article.context} />
                    </article>
                </div>
                <div className="pt-5">
                    <div
                        className="card w-full rounded-none bg-base-100 opacity-80 shadow-xl lg:grid lg:grid-cols-12 px-5 py-4">
                        <div className="col-span-2">
                            <img src="https://media.inyaw.com/icon/avatar.png!inyaa" className="w-12 rounded-full"/>
                        </div>
                        <div className="col-span-10">
                            <div className="flex flex-col">
                                <div className="font-bold">调试评论人</div>
                                <div className="text-sm opacity-70">2021-10-06 16:37</div>
                                <div className="text-sm">目前无法评论，只是在调试样式</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="user" className="pt-5">
                    <div className="card w-full rounded-none bg-base-100 opacity-80 shadow-xl">
                        <div className="card-body">
                            <textarea className="textarea textarea-bordered" placeholder="还在测试中"></textarea>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">发布</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

