/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Transpile Three.js packages for SSR compatibility
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  async redirects() {
    return [
      // Old WordPress / legacy redirects if any
      { source: '/accueil', destination: '/home', permanent: true },
    ];
  },
};

module.exports = nextConfig;
