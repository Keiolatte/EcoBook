import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import Link from 'next/link';
// GREEN CODING: next/image untuk optimasi gambar otomatis
import Image from 'next/image';
import { books } from '@/data/books';
import { notFound } from 'next/navigation';
import { ArrowLeft, Heart, Share2, MessageCircle, MapPin, Shield, Truck, BookOpen } from 'lucide-react';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

function getConditionColor(condition: string): string {
  switch (condition) {
    case 'Seperti Baru': return 'bg-green-100 text-green-700';
    case 'Baik': return 'bg-blue-100 text-blue-700';
    case 'Cukup Baik': return 'bg-yellow-100 text-yellow-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
  }

  const relatedBooks = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4);
  const discount = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);
  const co2Saved = 1.24;

  return (
    <>
      <Navbar />
      <main className="pb-16 lg:pb-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted hover:text-forest transition-colors">Beranda</Link>
              <span className="text-muted">/</span>
              <Link href="/jelajahi" className="text-muted hover:text-forest transition-colors">Jelajahi Buku</Link>
              <span className="text-muted">/</span>
              <span className="text-charcoal font-medium truncate">{book.title}</span>
            </div>
          </div>
        </div>

        {/* Book Detail */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Book Image */}
              <div className="bg-white rounded-2xl border border-border p-6 lg:p-8">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-offwhite relative">
                  {/* GREEN CODING: next/image → auto lazy-load, WebP/AVIF, ukuran optimal
                      priority=true karena ini gambar utama (LCP - Largest Contentful Paint) */}
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-sage">{book.category}</span>
                    <h1 className="text-2xl lg:text-3xl font-bold text-charcoal mt-1">{book.title}</h1>
                    <p className="text-muted mt-1">oleh {book.author}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-offwhite rounded-lg flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors text-muted">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-offwhite rounded-lg flex items-center justify-center hover:bg-forest/5 hover:text-forest transition-colors text-muted">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-white rounded-xl border border-border p-6 mb-6">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-3xl font-bold text-forest">{formatPrice(book.price)}</span>
                    <span className="text-lg text-muted line-through">{formatPrice(book.originalPrice)}</span>
                    <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">-{discount}%</span>
                  </div>
                  <p className="text-sm text-muted">Hemat {formatPrice(book.originalPrice - book.price)} dari harga baru</p>
                </div>

                {/* Condition */}
                <div className="bg-white rounded-xl border border-border p-6 mb-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-3">Kondisi Buku</h3>
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold ${getConditionColor(book.condition)}`}>
                    {book.condition}
                  </span>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{book.description}</p>
                </div>

                {/* Book Details */}
                <div className="bg-white rounded-xl border border-border p-6 mb-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-3">Detail Buku</h3>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                    <div>
                      <p className="text-xs text-muted">Penerbit</p>
                      <p className="text-sm font-medium text-charcoal">{book.publisher}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Tahun Terbit</p>
                      <p className="text-sm font-medium text-charcoal">{book.year}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">ISBN</p>
                      <p className="text-sm font-medium text-charcoal">{book.isbn}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Jumlah Halaman</p>
                      <p className="text-sm font-medium text-charcoal">{book.pages} halaman</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Berat</p>
                      <p className="text-sm font-medium text-charcoal">{book.weight}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Fakultas</p>
                      <p className="text-sm font-medium text-charcoal">{book.faculty}</p>
                    </div>
                  </div>
                </div>

                {/* Environmental Impact */}
                <div className="bg-cream/50 rounded-xl border border-cream p-6 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-forest" />
                    <h3 className="text-sm font-semibold text-charcoal">Dampak Lingkungan</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    Dengan membeli buku bekas ini, kamu membantu menghemat sekitar <strong className="text-forest">{co2Saved} kg CO₂</strong> yang dihasilkan dari produksi buku cetak baru.
                  </p>
                </div>

                {/* Seller */}
                <div className="bg-white rounded-xl border border-border p-6 mb-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-4">Informasi Penjual</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-forest">{book.seller.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{book.seller.name}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-muted" />
                        <span className="text-xs text-muted">{book.seller.university}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest text-white font-semibold rounded-lg hover:bg-forest/90 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    Hubungi via WhatsApp
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-forest text-forest font-semibold rounded-lg hover:bg-forest/5 transition-colors">
                    <Heart className="w-5 h-5" />
                    Simpan
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sage" />
                    <span className="text-xs text-muted">Penjual Terverifikasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-sage" />
                    <span className="text-xs text-muted">COD / Kirim</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Books */}
            {relatedBooks.length > 0 && (
              <div className="mt-16">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal mb-6">Buku Serupa</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                  {relatedBooks.map((rb) => (
                    <BookCard key={rb.id} book={rb} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}