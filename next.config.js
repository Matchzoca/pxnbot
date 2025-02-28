/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'pxnbot-j68r5rqn8-slowpixels.vercel.app'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
}

module.exports = nextConfig
