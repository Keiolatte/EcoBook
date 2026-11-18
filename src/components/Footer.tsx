import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EcoBook</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Platform katalog digital jual-beli buku kuliah bekas untuk mengurangi jejak karbon dan mendukung keberlanjutan lingkungan.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 text-sm hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/jelajahi" className="text-white/70 text-sm hover:text-white transition-colors">Jelajahi Buku</Link></li>
              <li><Link href="/tentang" className="text-white/70 text-sm hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Cara Kerja</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kategori Populer</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Teknik Informatika</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Ekonomi & Bisnis</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Kedokteran</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Hukum</a></li>
              <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Psikologi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-white/50 shrink-0" />
                <span className="text-white/70 text-sm">info@ecobook.id</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-white/50 shrink-0" />
                <span className="text-white/70 text-sm">+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-white/50 shrink-0" />
                <span className="text-white/70 text-sm">Universitas Brawijaya, Malang, Jawa Timur</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 EcoBook. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
