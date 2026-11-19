import type { Metadata } from 'next';
// GREEN CODING: Gunakan next/font untuk self-host font.
// Menghilangkan request ke Google Fonts CDN (hemat 1 round-trip DNS + koneksi).
// Hanya memuat weight yang benar-benar dipakai (400,500,600,700) vs semua (200-800).
// Font di-subset otomatis dan di-inline sebagai preload.
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'EcoBook — Katalog Jual-Beli Buku Kuliah Bekas',
  description: 'Platform katalog digital jual-beli buku kuliah bekas (preloved) untuk mengurangi jejak karbon. Temukan buku kuliah dengan harga terjangkau sambil menjaga lingkungan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}