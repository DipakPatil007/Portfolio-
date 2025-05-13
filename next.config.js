/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Disable image optimization since it's not supported in static exports
    images: {
        unoptimized: true,
    },
    // Add base path for GitHub Pages
    basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-' : '',
}

module.exports = nextConfig 