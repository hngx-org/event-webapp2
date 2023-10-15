/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "wetindeysup-api.onrender.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/auth",
      },
    ];
  },
};
module.exports = nextConfig;
