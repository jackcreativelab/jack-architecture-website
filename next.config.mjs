/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/jack-architecture-website',
  assetPrefix: '/jack-architecture-website/',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/jack-architecture-website',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
