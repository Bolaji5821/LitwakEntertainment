/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },

    webpack: (config, { isServer, dev }) => {
        if (isServer) {
            config.externals.push('pg-native');
        }

        // Add @ alias
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': '.',
        };

        return config;
    },
};

module.exports = nextConfig;