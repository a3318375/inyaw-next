import Comment from "@/components/Comment";

async function getImage() {
    const res = await fetch('https://admin.inyaw.com/api/file/image?type=0')
    const post = await res.json()
    if (post && post.code && post.code === 1) {
        return post.data;
    } else {
        return {}
    }
}

export default async function Me() {
    const cover: string = await getImage()
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'/>
            <title>轻量化CI/CD工具drone的搭建</title>
            <meta name='keywords' content="关于我"/>
            <meta name='description' content="关于我"/>
            <div className="w-full">
                {/*<div className="bg-white bg-opacity-80">*/}
                <div className="relative w-full h-25rem bg-no-repeat bg-cover bg-center"
                     style={{backgroundImage: `url(${cover})`}}>
                    <div className="absolute w-full h-full bg-black bg-opacity-30">
                        <div className="absolute bottom-16 text-center w-full">
                            <h1 className="text-white text-4xl pb-2">关于我</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white bg-opacity-90 dark:bg-slate-900">
                <div className="flex items-stretch relative">
                    <div className="md:max-w-content mx-auto h-[65vh]">
                        <p>一个臭写java的，翻新过很多版本了，从微服务，到wordpress，又回到java</p>
                        <p>目前版本是react + nextjs</p>
                        <Comment id={114514}/>
                    </div>
                </div>
            </div>
        </>
    )
}

