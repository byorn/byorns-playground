/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'byorns-playground.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '/byorns-playground/**',
      },
    ],
    domains: ['byorns-playground.com','byorns-playground.s3.ap-southeast-2.amazonaws.com']
  }
}

module.exports = nextConfig
