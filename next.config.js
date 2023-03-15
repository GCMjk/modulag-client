/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['modulag-ecommerce.s3.amazonaws.com', 'tailwindui.com'],
  },
}

module.exports = nextConfig
