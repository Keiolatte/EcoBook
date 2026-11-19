import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// GREEN CODING: next/image untuk optimasi gambar otomatis
import Image from 'next/image';
import { Leaf, Users, Target, Heart, BookOpen, TreePine, GraduationCap, Recycle } from 'lucide-react';
import { stats } from '@/data/books';

function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        {/* GREEN CODING: Hapus background image Unsplash (1920px), ganti CSS gradient */}
        <section className="bg-forest relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/90 to-sage/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-sage" />
              <span className="text-sm text-white/80">Tentang EcoBook</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Misi Kami: Kurangi Jejak Karbon Melalui Sirkulasi Buku
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              EcoBook adalah platform katalog digital jual-beli buku kuliah bekas yang didedikasikan untuk mendukung keberlanjutan lingkungan di lingkungan perguruan tinggi.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">Apa Itu EcoBook?</h2>
                <p className="text-muted leading-relaxed mb-4">
                  EcoBook adalah sebuah platform katalog digital yang dirancang untuk memfasilitasi jual-beli buku kuliah bekas (preloved) antar mahasiswa. Platform ini lahir dari kepedulian terhadap tingginya timbulan sampah kertas di Indonesia dan dampak lingkungan dari produksi buku cetak baru.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Berdasarkan data Sistem Informasi Pengelolaan Sampah Nasional (SIPSN) tahun 2024, timbulan sampah nasional Indonesia tercatat mencapai sekitar 33,79 juta ton, dengan komposisi sampah kertas dan karton sebesar 11,16%.
                </p>
                <p className="text-muted leading-relaxed">
                  Melalui EcoBook, kami percaya bahwa perpanjangan masa pakai buku kuliah cetak dapat menjadi langkah nyata dalam mendukung pengurangan limbah kertas dan emisi gas rumah kaca.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                {/* GREEN CODING: next/image → auto lazy-load, WebP/AVIF, ukuran optimal */}
                <Image
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=450&fit=crop"
                  alt="Perpustakaan"
                  width={600}
                  height={450}
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-3">Nilai-Nilai Kami</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Prinsip yang mendasari setiap aspek platform EcoBook
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Recycle,
                  title: 'Keberlanjutan',
                  desc: 'Mendorong ekonomi sirkular dengan memperpanjang siklus hidup buku kuliah cetak, mengurangi kebutuhan produksi buku baru.',
                },
                {
                  icon: Users,
                  title: 'Komunitas',
                  desc: 'Membangun jaringan mahasiswa yang saling membantu dalam mengakses buku kuliah dengan harga terjangkau.',
                },
                {
                  icon: Target,
                  title: 'Transparansi',
                  desc: 'Memberikan informasi lengkap tentang kondisi buku, dampak lingkungan, dan perhitungan penghematan karbon.',
                },
              ].map((value) => (
                <div key={value.title} className="bg-offwhite rounded-xl p-8 border border-border">
                  <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-forest" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{value.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 lg:py-20 bg-cream/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-3">Dampak Kami</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Kontribusi nyata EcoBook terhadap keberlanjutan lingkungan
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { icon: BookOpen, value: `${formatNumber(stats.booksSaved)}+`, label: 'Buku Tersirkulasi' },
                { icon: TreePine, value: `${formatNumber(stats.co2Reduced)} kg`, label: 'CO₂ Dihemat' },
                { icon: Users, value: `${formatNumber(stats.usersActive)}+`, label: 'Pengguna Aktif' },
                { icon: GraduationCap, value: `${stats.universitiesConnected}+`, label: 'Universitas Terhubung' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-6 lg:p-8 border border-border text-center">
                  <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-forest" />
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-charcoal">{stat.value}</p>
                  <p className="text-sm text-muted mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-3">Tim Kami</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Mahasiswa Sistem Informasi, Universitas Brawijaya
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'Alchalisa Fathinna', nim: '245150407111066', role: 'Project Lead' },
                { name: 'Sabitha Marsyarira Nayla', nim: '245150401111032', role: 'UI/UX Designer' },
                { name: 'Ayesha Kayla Wahyudi', nim: '245150400111045', role: 'Developer' },
              ].map((member) => (
                <div key={member.nim} className="bg-white rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-forest">
                      {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-charcoal">{member.name}</h3>
                  <p className="text-sm text-sage font-medium mt-1">{member.role}</p>
                  <p className="text-xs text-muted mt-2">NIM: {member.nim}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-muted">
                Mata Kuliah: Sistem Informasi Berkelanjutan (SIB) · Dosen Pengampu: Riswan Septriayadi Sianturi, Ph.D.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* GREEN CODING: Hapus background image Unsplash, ganti CSS gradient */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-forest rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/80 to-sage/20" />
              <div className="relative">
                <Heart className="w-10 h-10 text-sage mx-auto mb-4" />
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Bergabunglah dengan Gerakan EcoBook
                </h2>
                <p className="text-white/70 max-w-xl mx-auto mb-8">
                  Jadilah bagian dari komunitas mahasiswa yang peduli lingkungan. Jual atau beli buku bekas, kurangi limbah kertas, dan dukung masa depan yang lebih hijau.
                </p>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-forest font-semibold rounded-lg hover:bg-offwhite transition-colors">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}