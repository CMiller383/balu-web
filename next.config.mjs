/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Strip all console.* calls in production builds
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
