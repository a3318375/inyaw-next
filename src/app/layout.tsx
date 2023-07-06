import '@/assets/css/globals.css'
import clsx from 'clsx'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Link from 'next/link'

export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Link rel='icon' href='https://media.inyaw.com/icon/favicon.ico'/>
                <div className="w-full h-screen grid overflow-hidden">
                    <img
                        className={clsx(true ? 'fixed w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover' : 'fixed filter blur-sm w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover')}/>
                    <div id="pageContent" className="overflow-y-auto">
                        <GlobalNav/>
                        <div>
                            <div id="mainContent" className="lg:grid lg:grid-cols-12 lg:gap-4 px-4 py-8">
                                <div className="w-full lg:col-start-2 md:col-end-9 lg:pr-3">
                                    {children}
                                </div>
                                {/*<div className="hidden lg:block lg:col-start-9 lg:col-end-12 lg:pl-0.75">*/}
                                {/*    <MyInfo articleNum={0} tagNum={0} typeNum={0}/>*/}
                                {/*    <TocAndHot toc={pageProps.blogInfo?.[id]?.topHtml} hotList={pageProps.hotList}/>*/}
                                {/*</div>*/}
                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

import GlobalNav from '@/components/GlobalNav'
