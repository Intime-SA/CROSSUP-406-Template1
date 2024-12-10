/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "picsum.photos",
      "firebasestorage.googleapis.com",
      "acdn.mitiendanube.com",
      "downloads.intercomcdn.com",
    ],
  },
};

export default nextConfig;
