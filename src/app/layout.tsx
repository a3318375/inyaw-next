import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const myFont = localFont({
    src: [
        {
            path: '../assets/font/MiSans-Thin.woff',
            weight: '100',
            style: 'thin',
        },
        {
            path: '../assets/font/MiSans-ExtraLight.woff',
            weight: '200',
        },
        {
            path: '../assets/font/MiSans-Light.woff',
            weight: '300',
        },
        {
            path: '../assets/font/MiSans-Normal.woff',
            weight: '400',
        },
        {
            path: '../assets/font/MiSans-Medium.woff',
            weight: '500',
        },
        {
            path: '../assets/font/MiSans-Demibold.woff',
            weight: '600',
        },
        {
            path: '../assets/font/MiSans-Semibold.woff',
            weight: '700',
        },
        {
            path: '../assets/font/MiSans-Bold.woff',
            weight: '800',
        },
        {
            path: '../assets/font/MiSans-Heavy.woff',
            weight: '900',
        },
    ],
})

export default function RootLayout({children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={myFont.className}>
         <body>{children}</body>
        </html>
    )
}