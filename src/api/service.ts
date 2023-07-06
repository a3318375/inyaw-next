export const findBlogPage = async (page: number) => {
    return await fetch('https://admin.inyaw.com/api/blog/web/page?page=' + page)
        .then(response => response.json())
        .then(data => {
            if (data && data.code && data.data && data.code === 1) {
                return data.data;
            } else {
                return {content: []};
            }
        })
}
export const getBlogInfo = async (id: number) => {
    return await fetch('https://admin.inyaw.com/api/blog/web/info?id=' + id)
        .then(response => response.json())
        .then(data => {
            if (data && data.code && data.data && data.code === 1) {
                return data.data;
            } else {
                return {};
            }
        })
}
export const findBlogList = async (isHot?: boolean) => {
    return await fetch('https://admin.inyaw.com/api/blog/web/list' + (isHot ? '?isHot=true' : ''))
        .then(response => response.json())
        .then(data => {
            if (data && data.code && data.data && data.code === 1) {
                return data.data;
            } else {
                return [];
            }
        })
}

export const findNavList = async () => {
    return await fetch('https://admin.inyaw.com/api/menu/findMenuList')
        .then(response => response.json())
        .then(data => {
            if (data && data.code && data.data && data.code === 1) {
                return data.data;
            } else {
                return [];
            }
        })
}

export const getImage = async () => {
    return await fetch('https://api.inyaw.com/inyaa-picture/file/image?type=0')
        .then(response => response.json())
        .then(data => {
            if (data && data.code && data.data && data.code === 1) {
                return data.data;
            } else {
                return '';
            }
        })
}

export const getConfig = async () => {
    return await fetch('https://admin.inyaw.com/api/config/findAll')
        .then(response => response.json())
        .then(data => {
            if (data && data.code && data.data && data.code === 1) {
                return data.data;
            } else {
                return {};
            }
        })
}

export type ImageType = {
    image?: string
}

export type BlogArchiveType = {
    image?: string
    blogInfo?: BlogInfoType[]
}

export type BlogArticleType = {
    blogInfo?: BlogInfoType
}

export type BlogInfoType = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: boolean;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: number;
    isComment?: boolean;
    isHot?: boolean;
    type?: InyaaBlogType;
    article: InyaaBlogArticle;
}

type InyaaBlogType = {
    id?: number;
    name?: string;
    createTime?: string;
    remark?: string;

    value?: number;
    label?: string;
}

type InyaaBlogArticle = {
    id: number;
    context: string;
}

export const findArchiveList = async () => {
    return await fetch('https://admin.inyaw.com/api/blog/web/archive/list')
        .then(response => response.json())
        .then(data => {
            if (data && data.code && data.data && data.code === 1) {
                return data.data;
            } else {
                return [];
            }
        })
}

export type PostsPage = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: InyaaBlogVo[];
    number?: number;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}

export type InyaaBlogVo = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: boolean;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: number;
    isComment?: boolean;
    isHot?: boolean;
    type?: InyaaBlogType;
}

export type PageDataType = {
    posts?: PostsPage;
}
