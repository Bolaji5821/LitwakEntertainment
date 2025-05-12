/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
    experimental: {
        serverActions: true,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.externals.push('pg-native');
        }
        return config;
    },
};

module.exports = nextConfig;