import '@/assets/css/globals.css'
import '@/assets/css/github.css'
import '@/assets/css/APlayer.min.css'
import 'gitalk/dist/gitalk.css'
import {Metadata} from "next";
import LayoutArticleContent from "@/components/LayoutArticleContent";

export const metadata: Metadata = {
    title: '心梦屋',
    description: '心梦屋',
    icons: "https://media.inyaw.com/icon/favicon.ico"
}

export default function ArticleLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <LayoutArticleContent>
                    {children}
                </LayoutArticleContent>
            </body>
        </html>
    )
}
