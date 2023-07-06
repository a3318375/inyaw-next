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

export type PostsPage = {
    totalPages: number;
    totalElements?: number;
    size?: number;
    content?: InyaaBlogVo[];
    number: number;
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

export type InyaaSysMenu = {
    id?: number;
    name?: string;
    path?: string;
    icon?: string;
    component?: string;
    isShow?: boolean;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
};
