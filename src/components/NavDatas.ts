type UserNavType = {
    name: string;
    path: string;
};

export const userNoLoginNav: UserNavType[] = [
    {
        name: '登录',
        path: '/login',
    }
]
export const userLoginNav: UserNavType[] = [
    {
        name: '消息',
        path: '/message',
    },
    {
        name: '设置',
        path: '/setting',
    },
    {
        name: '登出',
        path: '/logout',
    },
]
