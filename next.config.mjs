/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "http", hostname: "dr-rafael-mendes.local" },
      { protocol: "http", hostname: "rafaelmendes.great-site.net" },
    ],
  },
};

export default nextConfig;
