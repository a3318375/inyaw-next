import {BlogInfoType, BlogListResult} from "@/api/service";
import {Metadata} from "next";
import rehypePrettyCode from "rehype-pretty-code";
import toc, {HtmlElementNode} from "@jsdevtools/rehype-toc";
import rehypeSlug from "rehype-slug";
import Recommend from "@/components/Recommend";
import {MDXRemote} from "next-mdx-remote/rsc";
import CopyButton from "@/components/CopyButton";
import Children from 'react-children-utilities'
import Comment from "@/components/Comment";
import dayjs from "dayjs";

async function findBlogInfo(id: number) {
    const res = await fetch('https://admin.inyaw.com/api/blog/web/info?id=' + id, {next: {tags: ['collection']}})
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

// export async function generateStaticParams() {
//     const posts: BlogListResult = await fetch('https://admin.inyaw.com/api/blog/web/list', {next: {tags: ['collection']}}).then((res) => res.json())
//     if (posts && posts.data && posts.code && posts.code === 1) {
//         return posts.data.map((post) => ({
//             id: post.id +'',
//         }))
//     } else {
//         return [{}]
//     }
// }


async function getCover() {
    const res = await fetch('https://admin.inyaw.com/api/file/image?type=0', { cache: 'no-store' })
    const post = await res.json()
    if (post && post.code && post.code === 1) {
        return post.data + '-inyaa'
    } else {
        return 'https://media.inyaw.com/cover/cover1.png-inyaa'
    }
}

export default async function Article({params: {id}}: { params: { id: number } }) {
    const blogInfo: BlogInfoType = await findBlogInfo(id)
    const cover: string = await getCover()
    const lastCover: string = await getCover()
    const nextCover: string = await getCover()
    const coverObj ={
        lastCover: lastCover,
        nextCover: nextCover,
    }
    const pre = ({children, ...props}: any) => {
        const code = Children.onlyText(children)
        return (
            <pre className="highlight-wrap" {...props}>
                <CopyButton code={code}/>
                {children}
            </pre>
        )
    }
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'/>
            <meta name='keywords' content={blogInfo.title}/>
            <meta name='description' content={blogInfo.summary}/>
            <div className="w-full relative">
                <div className="w-full">
                    {/*<div className="bg-white bg-opacity-80">*/}
                    <div className="relative w-full h-18rem md:h-25rem bg-no-repeat bg-cover bg-center"
                         style={{backgroundImage: `url(${cover})`}}>
                        <div className="absolute w-full h-full bg-black bg-opacity-30">
                            <div className="absolute bottom-16 text-center w-full">
                                <h1 className="text-white text-4xl pb-2">{blogInfo.title}</h1>
                                <span className="w-full h-px bg-white block"/>
                                <div className="text-white pt-2">发表于 {dayjs(blogInfo.createTime).format('YYYY-MM-DD') } | {blogInfo.type?.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:flex items-stretch relative">
                        <div className="md:max-w-content mx-auto">
                            <div className="prose max-w-none p-4 dark:prose-invert">
                                <div className="entry-content">
                                    <MDXRemote
                                        source={blogInfo.article.context}
                                        components={{pre: pre}}
                                        options={{
                                            parseFrontmatter: true,
                                            mdxOptions: {
                                                rehypePlugins: [rehypeSlug, [rehypePrettyCode, {
                                                    theme: 'one-dark-pro',
                                                }], [toc, {
                                                    cssClasses: {
                                                        list: 'toc-list',
                                                        listItem: 'toc-list-item'
                                                    },
                                                    customizeTOC: (tocAll: HtmlElementNode) => {
                                                        return {
                                                            type: "element",
                                                            tagName: "div",
                                                            properties: {className: "toc-container h-[89%] not-prose"},
                                                            children: [tocAll],
                                                        };
                                                    }
                                                }]],
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                            <Recommend blogInfo={blogInfo} cover={coverObj}/>
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

