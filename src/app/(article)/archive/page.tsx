import {BlogInfoType} from "@/api/service";

async function findBlogList() {
    const res = await fetch('https://admin.inyaw.com/api/blog/web/list', {next: {tags: ['collection']}}  )
    const post = await res.json()
    if (post && post.code && post.code === 1) {
        return post.data;
    } else {
        return {}
    }
}
async function getImage() {
    const res = await fetch('https://admin.inyaw.com/api/file/image?type=0')
    const post = await res.json()
    if (post && post.code && post.code === 1) {
        return post.data;
    } else {
        return {}
    }
}

export default async function Archive() {
    const blogInfo: BlogInfoType[] = await findBlogList()
    const cover: string = await getImage()
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'/>
            <title>轻量化CI/CD工具drone的搭建</title>
            <meta name='keywords' content="归档"/>
            <meta name='description' content="归档"/>
            <div className="w-full">
                {/*<div className="bg-white bg-opacity-80">*/}
                <div className="relative w-full h-25rem bg-no-repeat bg-cover bg-center"
                     style={{backgroundImage: `url(${cover}-inyaa)`}}>
                    <div className="absolute w-full h-full bg-black bg-opacity-30">
                        <div className="absolute bottom-16 text-center w-full">
                            <h1 className="text-white text-4xl pb-2">归档</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white bg-opacity-90 dark:bg-slate-900">
                <div className="flex items-stretch relative">
                    <div className="md:max-w-content mx-auto">
                        <ol className="border-l-2 border-blue-600 pt-10">
                            {(blogInfo && blogInfo.length > 0) && blogInfo.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="flex flex-start items-center">
                                            <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2" />
                                            <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                                                <a href={'/article/' + item.id}>{item.title}</a>
                                            </h4>
                                        </div>
                                        <div className="ml-6 mb-6 pb-6">
                                            <a
                                                href="#!"
                                                className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                                            >发布于
                                                {item.createTime}</a>
                                            <p className="text-gray-700 mt-2 mb-4">
                                                {item.summary}
                                            </p>
                                            <button
                                                type="button"
                                                className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                Read more
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

