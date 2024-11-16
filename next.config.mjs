/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static exports
    basePath: '/cycladesrecords', // Replace with your repository name
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;