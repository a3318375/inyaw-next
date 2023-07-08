import Link from 'next/link'
import clsx from 'clsx';
import type {PostsPage} from '@/api/service'
import {ClockIcon, FireIcon, ChatBubbleBottomCenterTextIcon, WalletIcon} from '@heroicons/react/24/outline'


async function findBlogList() {
    const res = await fetch('https://admin.inyaw.com/api/blog/web/page?page=' + 1)
    const post = await res.json()
    if (post && post.code && post.code === 1) {
        return post.data;
    } else {
        return []
    }
}

export default async function Home() {
    const posts: PostsPage = await findBlogList()
    return (
        <div className="w-full grid gap-4">
            {(posts && posts.content && posts.content.length > 0) && posts.content.map((item, index) => {
                return (
                    <div key={index} className="grid card rounded-box gap-4">
                        <Link href={'/article/' + item.id}>
                            <div className="card lg:card-side bg-base-100 shadow-xl flex">
                                <figure
                                    className={clsx(index % 2 === 0 ? 'h-72 lg:w-1/2 overflow-hidden lg:order-2' : 'h-72 lg:w-1/2 overflow-hidden lg:order-4')}>
                                    <img src={item.cover + '!inyaa'}
                                         className="h-full transform transition duration-700 hover:scale-110"/>
                                </figure>
                                <div
                                    className={clsx(index % 2 === 0 ? 'card-body pt-0 lg:w-1/2 lg:float-left lg:order-4' : 'card-body pt-0 lg:w-1/2 lg:float-left lg:order-2')}>
                                    <div className="text-xs pt-4">
                                        <span className="bg-secondary-content rounded-lg p-1">
                                            <ClockIcon className="text-sm inline-block bg-base-500 w-4 h-4" /><span> 发表于 {item.createTime}</span>
                                        </span>
                                    </div>
                                    <h2 className="card-title">
                                        {item.title}
                                    </h2>
                                    <div className="text-xs">
                                        <FireIcon className="text-sm ml-1 inline-block bg-base-500 w-4 h-4 text-warning" /><span> {item.views} 热度</span>
                                        <ChatBubbleBottomCenterTextIcon className="text-sm ml-1 inline-block bg-base-500 w-4 h-4 text-warning" /><span> {item.comments} 条评论</span>
                                        <WalletIcon className="text-sm ml-1 inline-block bg-base-500 w-4 h-4 text-warning" /><span> {item.type?.name}</span>
                                    </div>
                                    <p className="text-ellipsis overflow-hidden ...">{item.summary}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
            <div className="flex justify-center">
                <Link className={clsx(posts.number + 1 > posts.totalPages ? '' : 'none')} href={'/blog/' + 2}>
                    <button className="btn btn-outline text-base-100">下一页</button>
                </Link>
            </div>
        </div>
    )
}
