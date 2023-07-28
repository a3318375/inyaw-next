import clsx from "clsx";

export default function ArticleToc({ toc }: { toc: string }) {
    return (
        <div className={clsx('sticky px-6 py-5 bg-base-100 opacity-80 shadow-md rounded-xl mt-5', toc ? '' : 'hidden')}>
            <div dangerouslySetInnerHTML={{__html: toc}} />
        </div>
    );
}
