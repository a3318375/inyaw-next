import '@/assets/css/globals.css'
import '@/assets/css/APlayer.min.css'
import {Metadata} from "next";
import LayoutContent from "@/components/LayoutContent";

export const metadata: Metadata = {
    title: '心梦屋',
    description: '心梦屋',
    icons: "https://media.inyaw.com/icon/favicon.ico"
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script src='https://media.inyaw.com/css/APlayer/APlayer.min.js' />
                <script src='https://media.inyaw.com/css/lv2d/live2dcubismcore.min.js' />
                <script src='https://media.inyaw.com/css/lv2d/pixi.min.js' />
                <script src='https://media.inyaw.com/css/lv2d/live2dv3.min.js' />
            </head>
            <body>
                <LayoutContent>
                    {children}
                </LayoutContent>
            </body>
        </html>
    )
}
