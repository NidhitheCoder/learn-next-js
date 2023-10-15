/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    STRAPI_ADDRESS: "http://127.0.0.1:1337/graphql"
  },
  nextConfig,
}
