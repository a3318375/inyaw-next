import clsx from "clsx";

export default function Footer({layoutType}: { layoutType: boolean }) {
    return (
        <footer
            className={clsx('lg:text-left text-center', layoutType ? 'text-white' : 'bg-white bg-opacity-90 dark:bg-slate-900 text-neutral-700 dark:text-neutral-200')}>
            <div className="p-4 text-center">
                <div>
                    © 2023 Copyright:
                    <a href="https://tailwind-elements.com/"> yuxh</a>
                </div>
                <div>
                    <a href="https://beian.miit.gov.cn" target="_blank">吉ICP备20004270号-2</a>
                </div>
                <div>
                    <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral">本网站由 <img
                        src="https://media.inyaw.com/icon/%E5%8F%88%E6%8B%8D%E4%BA%91_logo5.png"
                        className="inline h-6" alt="又拍"/> 提供CDN加速/云存储服务</a>
                </div>
            </div>
        </footer>
    );
}
