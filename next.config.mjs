/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    loader: 'custom',
    loaderFile: 'pages/loading.tsx',
  },
};

export default nextConfig;
