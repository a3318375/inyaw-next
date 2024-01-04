import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const myFont = localFont({
    src: [
        {
            path: '../assets/font/MiSans-Normal.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/font/MiSans-Medium.woff',
            weight: '500',
            style: 'medium',
        },
        {
            path: '../assets/font/MiSans-Demibold.woff',
            weight: '600',
            style: 'demibold',
        },
        {
            path: '../assets/font/MiSans-Semibold.woff',
            weight: '700',
            style: 'semibold',
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