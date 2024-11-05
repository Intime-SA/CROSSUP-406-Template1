/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "firebasestorage.googleapis.com",
      "acdn.mitiendanube.com",
    ],
  },
};

export default nextConfig;
