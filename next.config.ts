import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.studioinnovarq.com" }],
        destination: "https://studioinnovarq.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
