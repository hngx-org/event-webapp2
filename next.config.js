/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: "https",
        hostname: "events-be-python-psi.vercel.app",
      },
    ]
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
