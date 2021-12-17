/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['drive.google.com', 'res.cloudinary.com'],
  },
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};
