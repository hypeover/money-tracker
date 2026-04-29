import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'fantastic-bassoon-6wjgwr6pjq634w6g-3000.app.github.dev', // Twój adres z błędu
        'localhost:3000'
      ],
    },
  },
};

export default nextConfig;
