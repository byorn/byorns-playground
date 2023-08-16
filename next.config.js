/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'byorns-playground.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
    ],
    domains: ['byorns-playground.s3.ap-southeast-2.amazonaws.com']
  }
}

module.exports = nextConfig
