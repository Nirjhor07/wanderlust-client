/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  experimental: {
    // Fixed typo: "kesely" -> "kysely"
    serverComponentsExternalPackages: ["@better-auth/kysely-adapter"],
  },
};

export default nextConfig;
