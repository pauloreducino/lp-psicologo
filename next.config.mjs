/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Unsplash (imagens de fallback)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // WordPress local (Local by Flywheel)
      {
        protocol: "http",
        hostname: "dr-rafael-mendes.local",
      },
      // WordPress em produção (adicione seu domínio real aqui depois)
      // {
      //   protocol: "https",
      //   hostname: "cms.drrafaelmendes.com.br",
      // },
    ],
  },
};

export default nextConfig;
