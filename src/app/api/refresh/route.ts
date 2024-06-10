import {revalidateTag} from "next/cache";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    if (type) {
        revalidateTag(type)
    }

    return new Response('刷新成功', {
        status: 200,
    })
}