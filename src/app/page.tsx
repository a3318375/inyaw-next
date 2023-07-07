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
        <div>
            {(posts && posts.content && posts.content.length > 0) && posts.content.map((item, index) => {
                return (
                    <>
                        <div key={index} className="grid card rounded-box">
                            <Link href={'/article/' + item.id}>
                                <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-4xl flex">
                                    <figure
                                        className={clsx(index % 2 === 0 ? 'lg:w-1/2 overflow-hidden lg:order-2' : 'lg:w-1/2 overflow-hidden lg:order-4')}>
                                        <img src="https://media.inyaw.com/cover/test123.jpg"
                                             className="h-75 transform transition duration-700 hover:scale-110"/>
                                    </figure>
                                    <div
                                        className={clsx(index % 2 === 0 ? 'card-body lg:w-1/2 lg:float-left lg:order-4' : 'card-body lg:w-1/2 lg:float-left lg:order-2')}>
                                        <h2 className="card-title">
                                            {item.title}
                                        </h2>
                                        <p className="truncate ...">{item.summary}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="divider"/>
                    </>
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
