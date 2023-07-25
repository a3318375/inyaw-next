import '@/assets/css/globals.css'
import '@/assets/css/APlayer.min.css'
import {Metadata} from "next";
import LayoutContent from "@/components/LayoutContent";

export const metadata: Metadata = {
    title: '心梦屋',
    description: '心梦屋',
    icons: "https://media.inyaw.com/icon/favicon.ico"
}

export default function SimpleLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <LayoutContent>
                    {children}
                </LayoutContent>
            </body>
        </html>
    )
}
