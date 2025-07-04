/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Prisma
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  
  // Configuración de imágenes
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'picsum.photos'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuración de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Configuración de ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Variables de entorno públicas
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig