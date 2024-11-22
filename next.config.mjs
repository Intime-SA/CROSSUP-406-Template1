import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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
      "downloads.intercomcdn.com",
    ],
  },
};

export default withNextIntl(nextConfig);
