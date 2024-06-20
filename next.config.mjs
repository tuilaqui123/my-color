/** @type {import('next').NextConfig} */

// next.config.js

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/vi/home',
                permanent: true, // 301 redirect (permanent)
            },
        ];
    },
};

export default nextConfig;

