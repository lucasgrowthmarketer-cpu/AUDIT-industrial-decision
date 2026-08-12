/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Transpile Three.js packages for SSR compatibility
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  async redirects() {
    return [
      // Old WordPress / legacy redirects if any
      // La page d'accueil est /home : la racine y redirige en 301
      { source: '/', destination: '/home', permanent: true },
      { source: '/accueil', destination: '/home', permanent: true },
    ];
  },
};

module.exports = nextConfig;
