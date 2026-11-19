import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import Link from 'next/link';
// GREEN CODING: next/image otomatis lazy-load, resize, dan convert ke WebP/AVIF
import Image from 'next/image';
import { books, categories, stats } from '@/data/books';
import { Search, BookOpen, Upload, MessageCircle, ShoppingBag, Leaf, TreePine, Users, GraduationCap, ArrowRight, Recycle, TrendingDown } from 'lucide-react';

function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

export default function Home() {
  const featuredBooks = books.slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        {/* GREEN CODING: Hapus background image CSS yang berat (1920px Unsplash).
            Diganti gradient CSS murni yang 0 KB network transfer. */}
        <section className="relative overflow-hidden bg-forest">
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/90 to-sage/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                  <Leaf className="w-4 h-4 text-sage" />
                  <span className="text-sm text-white/80">Platform Ramah Lingkungan</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Buku Lama,<br />Kesempatan Baru!
                </h1>
                <p className="text-lg text-white/70 mb-8 max-w-lg">
                  Temukan buku kuliah bekas berkualitas dengan harga terjangkau. Kurangi jejak karbon sambil mendukung keberlanjutan lingkungan.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/jelajahi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-forest font-semibold rounded-lg hover:bg-offwhite transition-colors"
                  >
                    <Search className="w-5 h-5" />
                    Cari Buku Sekarang
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    <Upload className="w-5 h-5" />
                    Jual Buku Kamu
                  </button>
                </div>

                {/* Quick Stats in Hero */}
                <div className="flex gap-8 mt-10">
                  <div>
                    <p className="text-2xl font-bold text-white">{formatNumber(stats.booksSaved)}+</p>
                    <p className="text-sm text-white/50">Buku Tersedia</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{formatNumber(stats.usersActive)}+</p>
                    <p className="text-sm text-white/50">Pengguna Aktif</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stats.universitiesConnected}+</p>
                    <p className="text-sm text-white/50">Universitas</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    {/* GREEN CODING: next/image → auto lazy-load, WebP/AVIF, ukuran optimal */}
                    <Image
                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=500&fit=crop"
                      alt="Perpustakaan buku"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover"
                      priority={true}
                      sizes="(max-width: 1024px) 0vw, 50vw"
                    />
                  </div>
                  {/* Floating card */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-charcoal">CO₂ Berkurang</p>
                        <p className="text-xs text-muted">{formatNumber(stats.co2Reduced)} kg dihemat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-3">
                Jelajahi Berdasarkan Kategori
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Temukan buku sesuai program studi dan kebutuhanmu
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/jelajahi?category=${encodeURIComponent(cat.name)}`}
                  className="bg-white rounded-xl border border-border p-5 text-center hover:shadow-md hover:border-sage/50 transition-all group"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="text-sm font-semibold text-charcoal group-hover:text-forest transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted">{cat.count} buku</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-3">
                Kenapa Menggunakan EcoBook?
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Mudah, cepat, dan ramah lingkungan
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Search,
                  title: 'Cari & Temukan',
                  desc: 'Temukan buku kuliah yang kamu butuhkan berdasarkan jurusan, mata kuliah, atau judul buku.',
                },
                {
                  icon: MessageCircle,
                  title: 'Hubungi Penjual',
                  desc: 'Hubungi penjual langsung melalui WhatsApp untuk negosiasi harga dan detail pengiriman.',
                },
                {
                  icon: ShoppingBag,
                  title: 'Dapatkan Buku',
                  desc: 'Lakukan transaksi dan dapatkan buku bekas berkualitas dengan harga terjangkau.',
                },
                {
                  icon: Recycle,
                  title: 'Kurangi Limbah',
                  desc: 'Setiap buku yang dipakai kembali mengurangi kebutuhan produksi buku baru dan emisi karbon.',
                },
              ].map((step, i) => (
                <div
                  key={step.title}
                  className="relative bg-offwhite rounded-xl p-6 border border-border hover:border-sage/50 transition-all"
                >
                  <div className="absolute -top-3 -left-1 w-7 h-7 bg-forest text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 bg-sage/15 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-base font-semibold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-2">
                  Buku Terbaru
                </h2>
                <p className="text-muted">Buku yang baru saja ditambahkan oleh penjual</p>
              </div>
              <Link
                href="/jelajahi"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-forest hover:underline"
              >
                Lihat Semua
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <div className="sm:hidden mt-6 text-center">
              <Link
                href="/jelajahi"
                className="inline-flex items-center gap-1 text-sm font-semibold text-forest hover:underline"
              >
                Lihat Semua Buku
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 lg:py-20 bg-cream/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                  Satu Buku, Kesempatan untuk Mengurangi Karbon
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Setiap buku cetak baru menghasilkan sekitar 1,24 kg CO₂e. Dengan menggunakan kembali buku bekas melalui EcoBook, kita dapat mengurangi emisi gas rumah kaca secara signifikan.
                </p>
                <div className="bg-white rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-forest" />
                    </div>
                    <span className="font-semibold text-charcoal">Dampak Lingkungan</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    Berdasarkan kajian Life Cycle Assessment (Tahara dkk., 2018), satu buku cetak menghasilkan emisi sebesar 1,24 kg CO₂e. EcoBook telah membantu menghemat lebih dari <strong className="text-forest">{formatNumber(stats.co2Reduced)} kg CO₂</strong> melalui sirkulasi buku bekas.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, value: `${formatNumber(stats.booksSaved)}+`, label: 'Buku Diselamatkan', color: 'bg-forest' },
                  { icon: TreePine, value: `${formatNumber(stats.co2Reduced)} kg`, label: 'CO₂ Dihemat', color: 'bg-sage' },
                  { icon: Users, value: `${formatNumber(stats.usersActive)}+`, label: 'Pengguna Aktif', color: 'bg-forest' },
                  { icon: GraduationCap, value: `${stats.universitiesConnected}+`, label: 'Universitas', color: 'bg-sage' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-6 border border-border text-center">
                    <div className={`w-12 h-12 ${stat.color}/10 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className={`w-6 h-6 ${stat.color === 'bg-forest' ? 'text-forest' : 'text-sage'}`} />
                    </div>
                    <p className="text-xl font-bold text-charcoal">{stat.value}</p>
                    <p className="text-xs text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* GREEN CODING: Hapus background image Unsplash di CTA, ganti gradient CSS */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-forest rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/80 to-sage/20" />
              <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Yuk, Berikan Kesempatan Kedua untuk Buku!
                </h2>
                <p className="text-white/70 max-w-xl mx-auto mb-8">
                  Mulai menjual atau membeli buku kuliah bekas sekarang. Hemat uang, kurangi limbah, dan dukung keberlanjutan.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-forest font-semibold rounded-lg hover:bg-offwhite transition-colors">
                    Jual Buku
                  </button>
                  <Link
                    href="/jelajahi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Beli Buku
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}