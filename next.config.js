/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stimg2.cardekho.com'
      },
      // {
      //   protocol: 'https',
      //   hostname: '*.cardekho.com'
      //   // any subdomain of githubusercontent.com
      // }
    ]
  }
}

module.exports = nextConfig
