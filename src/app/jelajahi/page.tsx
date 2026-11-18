'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import { books, categories, stats } from '@/data/books';
import { Search, Filter, ChevronDown, Leaf, BookOpen, TreePine } from 'lucide-react';

function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

const conditions = ['Semua', 'Seperti Baru', 'Baik', 'Cukup Baik'];
const sortOptions = [
  { value: 'newest', label: 'Terbaru' },
  { value: 'price-low', label: 'Harga Terendah' },
  { value: 'price-high', label: 'Harga Tertinggi' },
];

export default function JelajahiPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedCondition, setSelectedCondition] = useState('Semua');
  const [sortBy, setSortBy] = useState('newest');

  const filteredBooks = useMemo(() => {
    let result = [...books];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'Semua') {
      result = result.filter((b) => b.category === selectedCategory);
    }

    if (selectedCondition !== 'Semua') {
      result = result.filter((b) => b.condition === selectedCondition);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedCondition, sortBy]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-forest relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&q=80')] bg-cover bg-center opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Temukan Buku Kuliah, Berikan Kesempatan Kedua.
                </h1>
                <p className="text-white/70 mb-8 max-w-lg">
                  Telusuri ribuan buku kuliah bekas dari berbagai jurusan dan universitas. Hemat biaya dan kurangi jejak karbon.
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-sage" />
                    <span className="text-sm text-white/80">{formatNumber(stats.booksSaved)}+ Buku</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-5 h-5 text-sage" />
                    <span className="text-sm text-white/80">{formatNumber(stats.co2Reduced)} kg CO₂</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=350&fit=crop"
                    alt="Buku-buku"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-forest rounded-xl p-4 sm:p-6 -mt-14 relative z-10 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    placeholder="Cari buku yang kamu cari di sini..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-sm text-charcoal placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-sage"
                  />
                </div>
                <button className="px-6 py-3 bg-cream text-forest font-semibold rounded-lg hover:bg-cream/80 transition-colors text-sm whitespace-nowrap">
                  Cari Buku
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-charcoal mb-3">Jelajahi Berdasarkan Kategori</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('Semua')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'Semua'
                      ? 'bg-forest text-white'
                      : 'bg-white text-charcoal border border-border hover:border-sage'
                  }`}
                >
                  Semua
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === cat.name
                        ? 'bg-forest text-white'
                        : 'bg-white text-charcoal border border-border hover:border-sage'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Books */}
        <section className="pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <p className="text-sm text-muted">
                Menampilkan <strong className="text-charcoal">{filteredBooks.length}</strong> buku
              </p>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="appearance-none bg-white border border-border rounded-lg px-4 py-2.5 pr-10 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sage cursor-pointer"
                  >
                    {conditions.map((c) => (
                      <option key={c} value={c}>{c === 'Semua' ? 'Semua Kondisi' : c}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                </div>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-border rounded-lg px-4 py-2.5 pr-10 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sage cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Books Grid */}
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-offwhite rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Buku Tidak Ditemukan</h3>
                <p className="text-muted text-sm">Coba ubah kata kunci atau filter pencarianmu</p>
              </div>
            )}
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-16 lg:py-20 bg-cream/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                  alt="Hutan hijau"
                  className="w-full h-[400px] object-cover"
                />
                <div className="bg-forest p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Leaf className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">± {formatNumber(stats.co2Reduced)} kg</p>
                      <p className="text-sm text-white/70">Total CO₂ yang telah dihemat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                  Satu Buku, Kesempatan untuk Mengurangi Karbon
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Setiap buku cetak baru menghasilkan sekitar 1,24 kg CO₂e per buku. Dengan setiap transaksi buku bekas di EcoBook, kamu berkontribusi langsung terhadap pengurangan emisi gas rumah kaca.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Mengurangi penebangan pohon untuk produksi kertas' },
                    { label: 'Menurunkan emisi CO₂ dari proses pencetakan' },
                    { label: 'Mengurangi limbah kertas yang berakhir di TPA' },
                    { label: 'Mendukung ekonomi sirkular di kampus' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-forest rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-charcoal">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-forest rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&q=80')] bg-cover bg-center opacity-5" />
              <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Yuk, Berikan Kesempatan Kedua untuk Buku!
                </h2>
                <p className="text-white/70 max-w-xl mx-auto mb-8">
                  Jual buku kuliahmu yang sudah tidak terpakai dan bantu mahasiswa lain mendapatkan buku dengan harga terjangkau.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-forest font-semibold rounded-lg hover:bg-offwhite transition-colors">
                    Jual Buku
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    Pelajari Selengkapnya
                  </button>
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
