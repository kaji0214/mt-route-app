/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mountains',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })
    return config
  },
}

module.exports = nextConfig
