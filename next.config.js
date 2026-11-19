/** @type {import('next').NextConfig} */
const nextConfig = {
  // GREEN CODING: Aktifkan kompresi gzip untuk mengurangi ukuran transfer
  compress: true,

  images: {
    // GREEN CODING: Gunakan format modern yang lebih kecil ukurannya
    formats: ['image/avif', 'image/webp'],
    // GREEN CODING: Batasi ukuran device agar tidak generate gambar terlalu besar
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // GREEN CODING: Izinkan domain Unsplash untuk next/image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // GREEN CODING: Aktifkan React strict mode untuk mendeteksi masalah performa
  reactStrictMode: true,

  // GREEN CODING: Header cache control agar browser caching optimal
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;