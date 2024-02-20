/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // {
      //   source: '/post/:slug(\\d{1,})',
      //   destination: '/news/:slug', // Matched parameters can be used in the destination
      //   permanent: false,
      // },
      // {
      //   source: '/:partner/:code',
      //   destination: '/activate',
      //   permanent: false,
      // },
      // {
      //   source: '/:code',
      //   destination: '/activate',
      //   permanent: false,
      // },
    ];
  },
};

export default nextConfig;
