/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: ["cdn.sanity.io"]
    }
};

export default nextConfig;