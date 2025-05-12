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
    webpack: (config, { isServer, dev }) => {
        if (isServer) {
            config.externals.push('pg-native');
        }

        // Skip database connection during build
        if (process.env.NEXT_PHASE === 'phase-production-build') {
            config.resolve.alias = {
                ...config.resolve.alias,
                'sequelize': 'sequelize/lib/sequelize',
                'pg': 'pg/lib/native',
            };
        }

        return config;
    },
};

module.exports = nextConfig;