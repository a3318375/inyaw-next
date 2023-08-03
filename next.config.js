/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        serverComponentsExternalPackages: ['shiki']
    }
}
module.exports = nextConfig
