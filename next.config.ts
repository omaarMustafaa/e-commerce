import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "https://ecommerce.routemisr.com",
    AUTH_SECRET: process.env.AUTH_SECRET || "3caf59787df9e79a01267aa5c43e863939dd9e5bbe02e3a2ef78d6273d09dd00",
  },
  // reactCompiler: true, // Disabled — causes React Error #441 with async Server Components in production
  images:{
    remotePatterns:[
      {
        protocol : "https",
        hostname : "ecommerce.routemisr.com",
        pathname : "/Route-Academy-categories/**"
      },
      {
        protocol : "https",
        hostname : "ecommerce.routemisr.com",
        pathname : "/Route-Academy-products/**"
      },
      {
        protocol : "https",
        hostname : "ecommerce.routemisr.com",
        pathname : "/Route-Academy-brands/**"
      },
    ]
  }
};

export default nextConfig;
