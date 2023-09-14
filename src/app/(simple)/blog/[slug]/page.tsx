import Link from 'next/link'
import clsx from 'clsx';
import type {PostsPage} from '@/api/service'
import {ClockIcon, FireIcon, ChatBubbleBottomCenterTextIcon, WalletIcon} from '@heroicons/react/24/outline'
import {BlogPageResult} from "@/api/service";


export async function generateStaticParams() {
    const posts: BlogPageResult = await fetch('https://admin.inyaw.com/api/blog/web/page?page=1', {next: {tags: ['collection']}}).then((res) => res.json())
    if (posts && posts.data && posts.code && posts.code === 1) {
        return Array.from(new Array(posts.data.totalPages).keys()).map((page) => ({
            slug: page + '',
        }))
    } else {
        return [{}]
    }
}

async function findBlogList(slug: number) {
    const res = await fetch('https://admin.inyaw.com/api/blog/web/page?page=' + slug)
    const post = await res.json()
    if (post && post.code && post.code === 1) {
        return post.data;
    } else {
        return []
    }
}

export default async function Page({params: {slug}}: { params: { slug: number } }) {
    const posts: PostsPage = await findBlogList(slug)
    return (
        <div className="w-full grid gap-8">
            {(posts && posts.content && posts.content.length > 0) && posts.content.map((item, index) => {
                return (
                    <div key={index}
                         className="w-full mx-auto bg-white bg-opacity-60 rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div
                                className={clsx('md:shrink-0 md:w-1/2', index % 2 === 0 ? 'md:order-2' : 'md:order-4')}>
                                <Link href={'/article/' + item.id}>
                                    <img
                                        className="h-72 w-full object-cover transform transition duration-700 hover:scale-110"
                                        src={item.cover + '-inyaa'}
                                        alt="Modern building architecture"/>
                                </Link>
                            </div>
                            <div className={clsx('p-8', index % 2 === 0 ? 'md:order-4' : 'md:order-2')}>
                                <div className="w-max text-sm bg-rose-100 text-red-400 font-semibold rounded-lg p-1">
                                    <ClockIcon
                                        className="text-sm inline-block bg-base-500 w-4 h-4"/><span> 发表于 {item.createTime}</span>
                                </div>
                                <a href={'/article/' + item.id}
                                   className="block mt-3 text-lg leading-tight font-medium text-black">{item.title}</a>
                                <div className="w-full text-xs py-2">
                                    <FireIcon
                                        className="text-sm ml-1 inline-block bg-base-500 w-4 h-4 text-warning"/><span> {item.views} 热度</span>
                                    <ChatBubbleBottomCenterTextIcon
                                        className="text-sm ml-1 inline-block bg-base-500 w-4 h-4 text-warning"/><span> {item.comments} 条评论</span>
                                    <WalletIcon className="text-sm ml-1 inline-block bg-base-500 w-4 h-4 text-warning"/><span> {item.type?.name}</span>
                                </div>
                                <Link href={'/article/' + item.id}>
                                    <p>{item.summary}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="flex justify-center">
                <Link href={'/blog/' + posts.number}
                      className={clsx("relative inline-flex items-center rounded-md bg-white bg-opacity-60 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:text-red-400 focus-visible:outline-offset-0", posts.number == 0 ? 'none' : '')}
                >
                    上一页
                </Link>
                <Link href={'/blog/' + (posts.number + 2)}
                      className={clsx('relative ml-3 inline-flex items-center rounded-md bg-white bg-opacity-60 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:text-red-400 focus-visible:outline-offset-0', posts.number + 1 > posts.totalPages ? '' : 'none')}
                >
                    下一页
                </Link>
            </div>
        </div>
    )
}

