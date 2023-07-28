import {BlogInfoType} from "@/api/service";
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
            <div className="w-full">
                {/*<div className="bg-white bg-opacity-80">*/}
                <div className="relative w-full h-25rem bg-no-repeat bg-cover bg-center"
                     style={{backgroundImage: `url(${blogInfo.cover})`}}>
                    <div className="absolute w-full h-full bg-black bg-opacity-30">
                        <div className="absolute bottom-16 text-center w-full">
                            <h1 className="text-white text-4xl pb-2">{blogInfo.title}</h1>
                            <span className="w-full h-px bg-white block"/>
                            <div className="text-white pt-2">发表于 {blogInfo.createTime} | {blogInfo.views} 次阅读
                                | {blogInfo.comments} 条评论
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white bg-opacity-90 dark:bg-slate-900">
                <Markdown blogInfo={blogInfo}/>
            </div>
        </>
    )
}

