/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    output: 'standalone',
    assetPrefix: isProd ? 'https://media.inyaw.com/inyaw-nextjs' : undefined,
}
module.exports = nextConfig
