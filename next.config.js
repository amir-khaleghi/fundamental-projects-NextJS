/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // next config for image
  images: {
    domains: ['images.unsplash.com', 'course-api.com', 'www.course-api.com'],
  },
};

module.exports = nextConfig;
