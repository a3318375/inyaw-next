import Link from 'next/link'
import clsx from 'clsx';
import type {PostsPage} from '@/api/service'
import {ClockIcon, FireIcon, ChatBubbleBottomCenterTextIcon, WalletIcon} from '@heroicons/react/24/outline'


async function findBlogList(page: number) {
    const res = await fetch('https://admin.inyaw.com/api/blog/web/page?page=' + page)
    const post = await res.json()
    if (post && post.code && post.code === 1) {
        return post.data;
    } else {
        return []
    }
}

export default async function Page({params: {page}}: { params: { page: number } }) {
    const posts: PostsPage = await findBlogList(page)
    return (
        <div>
            {(posts && posts.content && posts.content.length > 0) && posts.content.map((item, index) => {
                return (
                    <div key={index} className="grid card rounded-box">
                        <Link href={'/article/' + item.id}>
                            <div className="card w-full h-4/5 glass static overflow-hidden">
                                <figure>
                                    <img src={item.cover + '!inyaa'}
                                         className="transform transition duration-700 hover:scale-110" alt="car!"/>
                                </figure>
                                <div
                                    className="card-body w-full absolute bottom-0 bg-base-content bg-opacity-60 text-base-100 p-3 transition duration-500 translate-y-8 hover:translate-y-0">
                                    <h2 className="card-title block w-full">
                                        {item.title}
                                    </h2>
                                    <div className="text-xs">
                                        <ClockIcon
                                            className="text-sm inline-block bg-base-500 w-4 h-4"/><span> 发表于 {item.createTime}</span>
                                        <FireIcon
                                            className="text-sm ml-1 inline-block bg-base-500 w-4 h-4"/><span> {item.views} 热度</span>
                                        <ChatBubbleBottomCenterTextIcon
                                            className="text-sm ml-1 inline-block bg-base-500 w-4 h-4"/><span> {item.comments} 条评论</span>
                                        <WalletIcon
                                            className="text-sm ml-1 inline-block bg-base-500 w-4 h-4"/><span> {item.type?.name}</span>
                                    </div>
                                    <p className="truncate ...">{item.summary}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
            <div className="flex justify-center">
                <Link className={clsx(posts.number + 1 > posts.totalPages ? '' : 'none')} href={'/blog/' + (page + 1)}>
                    <button className="btn btn-outline text-base-100">下一页</button>
                </Link>
            </div>
        </div>
    )
}
