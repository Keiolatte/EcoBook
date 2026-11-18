import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
