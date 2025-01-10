import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["localhost"],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svg/webpack"],
        });
        return config;
    },
};

export default nextConfig;
