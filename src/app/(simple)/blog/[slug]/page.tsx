import Link from 'next/link'
import clsx from 'clsx';
import type {PostsPage} from '@/api/service'
import { CalendarIcon, ArchiveIcon } from "@radix-ui/react-icons"
import {BlogPageResult} from "@/api/service";
import dayjs from "dayjs";


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
                         className="w-full mx-auto bg-white bg-opacity-80 dark:bg-slate-900 rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div
                                className={clsx('md:shrink-0 md:w-1/2', index % 2 === 0 ? 'md:order-2' : 'md:order-4')}>
                                <Link href={'/article/' + item.id}>
                                    <img
                                        className="h-60 w-full object-cover transform transition duration-700 hover:scale-110"
                                        src={'https://admin.inyaw.com/api/file/image?type=0&random=' + Math.random()}
                                        alt="Modern building architecture"/>
                                </Link>
                            </div>
                            <div className={clsx('p-8 md:w-1/2', index % 2 === 0 ? 'md:order-4' : 'md:order-2')}>
                                <a href={'/article/' + item.id}
                                   className="block mt-3 text-lg leading-tight font-medium text-black dark:text-white">{item.title}</a>
                                <div className="w-full py-2 flex items-center dark:text-white text-describe text-sm">
                                    <CalendarIcon
                                        className="mr-1 w-5 h-5"/>{dayjs(item.createTime).format('YYYY-MM-DD')}
                                    <ArchiveIcon className="mx-1 w-5 h-5"/>{item.type?.name}
                                </div>
                                <Link href={'/article/' + item.id}>
                                    <p className="dark:text-white text-summary">{item.summary}</p>
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

