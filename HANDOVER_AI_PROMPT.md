# EcoBook — AI Handover & Context Document

> **Petunjuk Penggunaan Dokumen Ini:**
> Jika Anda menggunakan AI lain (ChatGPT, Claude, Cursor, GitHub Copilot, dll.), Anda cukup menyalin (copy-paste) bagian **"PROMPT UNTUK AI SELANJUTNYA"** di bawah ini ke chat AI tersebut.

---

## 📋 PROMPT UNTUK AI SELANJUTNYA (Copy-Paste Text di Bawah)

```markdown
Halo! Saya sedang mengembangkan webapp bernama **EcoBook** (Katalog Jual-Beli Buku Kuliah Bekas / Preloved Mahasiswa Universitas Brawijaya untuk Mengurangi Jejak Karbon).

Aplikasi ini sudah diinisialisasi dan di-build menggunakan **Next.js 14 (App Router), TypeScript, dan Tailwind CSS**. Seluruh kode tersimpan rapi dan berhasil di-compile tanpa error.

Berikut adalah spesifikasi proyek, apa yang sudah selesai dibuat, dan apa yang perlu kamu lanjutkan:

### 1. Konteks & Tujuan Proyek
- **Aplikasi**: Web "EcoBook" (Katalog Jual-Beli Buku Kuliah Bekas, bukan marketplace penuh dengan payment gateway/escrow).
- **Target Pengguna**: Mahasiswa Universitas Brawijaya (verifikasi email @student.ub.ac.id).
- **Transaksi**: Di luar sistem secara langsung (WhatsApp / Cash on Delivery - COD di kampus).
- **Filosofi**: Green Software Engineering (GSE) & Triple Bottom Line (People, Planet, Profit).
- **Kalkulasi Emisi Karbon**: Acuan 1.24 kg CO₂e dihindari per buku bekas yang digunakan kembali (menggantikan produksi buku cetak baru).

### 2. Design System yang Diterapkan
- **Primary / Forest Green**: `#244B3C` (Brand, tombol utama, menu aktif)
- **Secondary / Sage Green**: `#6F9278` (Aksen & elemen pendukung)
- **Accent / Warm Cream**: `#E8DCC5` (Highlight / background dekoratif)
- **Background / Off White**: `#F8F7F2` (Background utama)
- **Surface / White**: `#FFFFFF` (Card dan container)
- **Primary Text / Charcoal**: `#252B27` (Heading & teks utama)
- **Secondary Text / Muted Gray**: `#68736C` (Deskripsi & subteks)
- **Border**: `#E3E7E1`
- **Font**: Plus Jakarta Sans

### 3. Struktur Folder Saat Ini
```
ecobook/
├── src/
│   ├── app/
│   │   ├── globals.css          # Setup Tailwind & font Plus Jakarta Sans
│   │   ├── layout.tsx           # Root Layout & Metadata
│   │   ├── page.tsx             # Halaman Beranda (Hero, Kategori, Cara Kerja, Buku Terbaru, Dampak CO2)
│   │   ├── jelajahi/
│   │   │   ├── page.tsx         # Halaman Katalog (Search bar, Kategori pills, Filter kondisi & harga, Grid buku)
│   │   │   └── [id]/
│   │   │       └── page.tsx     # Halaman Detail Buku (Galeri, Info buku, Info penjual, Estimasi CO2, Tombol WhatsApp)
│   │   └── tentang/
│   │       └── page.tsx         # Halaman Tentang Kami (Misi lingkungan, TBL, Dampak, Profil Tim UB)
│   ├── components/
│   │   ├── Navbar.tsx           # Navbar konsisten sesuai Design System
│   │   ├── Footer.tsx           # Footer dengan identitas Forest Green
│   │   └── BookCard.tsx         # Kartu katalog buku dengan badge kondisi & diskon
│   └── data/
│       └── books.ts             # Mock database buku kuliah, kategori, dan statistik dampak
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── vercel.json / README.md
```

### 4. Fitur yang SUDAH Selesai Dibuat
1. ✅ **Design System Lengkap**: Warna dan tipografi sesuai Figma & guideline laporan.
2. ✅ **Responsive Navbar & Footer**: Navigasi ke Beranda, Jelajahi Buku, Tentang Kami, tombol Masuk/Daftar.
3. ✅ **Halaman Beranda (`/`)**: Hero section, statistik dampak karbon, kategori jurusan, keunggulan GSE, dan featured books.
4. ✅ **Halaman Katalog (`/jelajahi`)**: Real-time search by title/author/jurusan, filter berdasarkan kategori kuliah, filter kondisi (Seperti Baru, Baik, Cukup Baik), dan sorting harga.
5. ✅ **Halaman Detail Buku (`/jelajahi/[id]`)**: Detail spesifikasi (ISBN, Halaman, Fakultas, Berat), banner edukasi CO₂e (1.24 kg dihemat), profil penjual, dan tombol CTA WhatsApp.
6. ✅ **Halaman Tentang Kami (`/tentang`)**: Latar belakang limbah kertas SIPSN, data tim mahasiswa UB (Alchalisa, Sabitha, Ayesha - Sistem Informasi FILKOM UB 2026).
7. ✅ **Build & Deployment Ready**: Siap di-deploy langsung ke Vercel.

### 5. Task yang Perlu Kamu Lanjutkan
Tolong bantu saya mengimplementasikan fitur-fitur lanjutan berikut:
1. **Modal / Halaman Autentikasi**:
   - Form Login & Registrasi dengan validasi email kampus (`@student.ub.ac.id`).
2. **Form Jual / Tambah Buku (`/jual` atau modal Tambah Buku)**:
   - Input judul buku, mata kuliah, fakultas/jurusan, harga asli, harga jual, kondisi fisik (seperti baru, baik, cukup baik), foto buku, deskripsi, dan nomor WhatsApp penjual.
3. **State Management / Database Persistence**:
   - Buat state persistent (menggunakan React Context / Zustand / LocalStorage atau integrasi Supabase / Firebase / Prisma) agar buku yang di-upload penjual langsung muncul di halaman `/jelajahi`.
4. **Penanda Status Ketersediaan Buku**:
   - Fitur toggle status: `Tersedia` atau `Terjual`.
   - Jika `Terjual`, otomatis menambah counter statistik total emisi karbon yang dihemat (+1.24 kg CO₂e).
5. **Kalkulator Interaktif Emisi CO₂**:
   - Komponen kalkulator di mana mahasiswa bisa memasukkan jumlah buku kuliah bekas yang mereka miliki/beli, dan sistem menghitung estimasi kg CO₂e yang berhasil dihindari beserta padanannya (misal: setara dengan X pohon yang ditanam).

Mohon berikan kode implementasi yang bersih, modular, dan tetap konsisten dengan palet warna serta arsitektur yang sudah ada.
```

---

## 🛠️ Informasi Teknis untuk Developer / AI

### Menjalankan Project Secara Lokal
```bash
cd C:\Users\Ayesh\.gemini\antigravity\scratch\ecobook
npm run dev
```
Akses di browser: `http://localhost:3000`

### Build untuk Produksi
```bash
npm run build
```

### Deploy ke Vercel
1. Pastikan folder proyek sudah diinisialisasi Git:
   ```bash
   git init
   git add .
   git commit -m "feat: initial EcoBook webapp with complete design system"
   ```
2. Push ke GitHub repository pribadi Anda.
3. Buka [Vercel Dashboard](https://vercel.com/new), import repository tersebut, dan klik **Deploy**.
4. Atau langsung menggunakan Vercel CLI:
   ```bash
   npx vercel
   ```
