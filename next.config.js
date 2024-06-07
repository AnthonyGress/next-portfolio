/** @type {import('next').NextConfig} */
const nextConfig = {
    // static build
    // output: 'export',
    // distDir: 'dist',
    // trailingSlash: false,
    // staticPageGenerationTimeout: 1000,
    // reactStrictMode: false

    async redirects() {
        return [
          {
            source: '/color-id',
            destination: '/portfolio/color-id',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
