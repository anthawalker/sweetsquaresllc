import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        staleTimes: {
            dynamic: 30,
            static: 180,
        },
    },
    // output: "export",
    // images: {
    //     unoptimized: true, // Disable Next.js Image Optimization
    // },
};

export default nextConfig;
