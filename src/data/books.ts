export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  condition: string;
  category: string;
  faculty: string;
  image: string;
  description: string;
  seller: {
    name: string;
    university: string;
    avatar: string;
  };
  isbn: string;
  publisher: string;
  year: number;
  pages: number;
  weight: string;
}

export const categories = [
  { name: 'Teknik Informatika', icon: '💻', count: 124 },
  { name: 'Ekonomi & Bisnis', icon: '📊', count: 98 },
  { name: 'Hukum', icon: '⚖️', count: 76 },
  { name: 'Kedokteran', icon: '🏥', count: 85 },
  { name: 'Psikologi', icon: '🧠', count: 67 },
  { name: 'Sastra', icon: '📖', count: 54 },
  { name: 'Teknik Sipil', icon: '🏗️', count: 43 },
  { name: 'Farmasi', icon: '💊', count: 39 },
  { name: 'Ilmu Komunikasi', icon: '📡', count: 61 },
  { name: 'Matematika', icon: '📐', count: 47 },
];

export const books: Book[] = [
  {
    id: '1',
    title: 'Algoritma dan Pemrograman',
    author: 'Rinaldi Munir',
    price: 45000,
    originalPrice: 120000,
    condition: 'Seperti Baru',
    category: 'Teknik Informatika',
    faculty: 'Ilmu Komputer',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=560&fit=crop',
    description: 'Buku algoritma dan pemrograman edisi terbaru. Kondisi masih sangat bagus, tidak ada coretan. Cocok untuk mahasiswa semester awal yang mengambil mata kuliah dasar pemrograman.',
    seller: {
      name: 'Ahmad Rizky',
      university: 'Universitas Brawijaya',
      avatar: 'AR',
    },
    isbn: '978-602-1514-07-1',
    publisher: 'Informatika Bandung',
    year: 2021,
    pages: 524,
    weight: '650g',
  },
  {
    id: '2',
    title: 'Pengantar Ekonomi Mikro',
    author: 'N. Gregory Mankiw',
    price: 55000,
    originalPrice: 150000,
    condition: 'Baik',
    category: 'Ekonomi & Bisnis',
    faculty: 'Ekonomi dan Bisnis',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop',
    description: 'Buku pengantar ekonomi mikro terjemahan. Ada beberapa highlight dengan stabilo di bab tertentu, namun secara keseluruhan kondisi masih bagus.',
    seller: {
      name: 'Siti Nurhaliza',
      university: 'Universitas Indonesia',
      avatar: 'SN',
    },
    isbn: '978-979-061-333-2',
    publisher: 'Salemba Empat',
    year: 2020,
    pages: 612,
    weight: '780g',
  },
  {
    id: '3',
    title: 'Hukum Tata Negara Indonesia',
    author: 'Jimly Asshiddiqie',
    price: 35000,
    originalPrice: 95000,
    condition: 'Baik',
    category: 'Hukum',
    faculty: 'Hukum',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=560&fit=crop',
    description: 'Buku hukum tata negara Indonesia yang komprehensif. Cover sedikit kusam tapi isi masih sangat baik, tidak ada halaman yang sobek.',
    seller: {
      name: 'Budi Santoso',
      university: 'Universitas Gadjah Mada',
      avatar: 'BS',
    },
    isbn: '978-602-232-123-4',
    publisher: 'Sinar Grafika',
    year: 2019,
    pages: 448,
    weight: '550g',
  },
  {
    id: '4',
    title: 'Anatomi Klinik',
    author: 'Keith L. Moore',
    price: 85000,
    originalPrice: 250000,
    condition: 'Seperti Baru',
    category: 'Kedokteran',
    faculty: 'Kedokteran',
    image: 'https://images.unsplash.com/photo-1576872381149-7847515ce5d8?w=400&h=560&fit=crop',
    description: 'Buku anatomi klinik edisi terjemahan Indonesia. Lengkap dengan ilustrasi berwarna. Kondisi masih sangat bagus, baru dibaca beberapa bab.',
    seller: {
      name: 'Dr. Maya Sari',
      university: 'Universitas Airlangga',
      avatar: 'MS',
    },
    isbn: '978-979-044-123-5',
    publisher: 'EGC',
    year: 2022,
    pages: 896,
    weight: '1200g',
  },
  {
    id: '5',
    title: 'Psikologi Umum',
    author: 'Sarlito W. Sarwono',
    price: 30000,
    originalPrice: 85000,
    condition: 'Cukup Baik',
    category: 'Psikologi',
    faculty: 'Psikologi',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop',
    description: 'Buku psikologi umum untuk pengantar. Ada beberapa catatan kecil di margin halaman, kondisi overall masih bagus untuk dipelajari.',
    seller: {
      name: 'Dina Kartika',
      university: 'Universitas Padjadjaran',
      avatar: 'DK',
    },
    isbn: '978-602-425-321-7',
    publisher: 'Rajawali Pers',
    year: 2021,
    pages: 376,
    weight: '450g',
  },
  {
    id: '6',
    title: 'Basis Data',
    author: 'Fathansyah',
    price: 40000,
    originalPrice: 110000,
    condition: 'Baik',
    category: 'Teknik Informatika',
    faculty: 'Ilmu Komputer',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=560&fit=crop',
    description: 'Buku basis data untuk mahasiswa informatika. Membahas konsep dasar hingga normalisasi. Kondisi masih baik, cocok untuk referensi mata kuliah basis data.',
    seller: {
      name: 'Rendi Pratama',
      university: 'Institut Teknologi Bandung',
      avatar: 'RP',
    },
    isbn: '978-602-1514-08-8',
    publisher: 'Informatika Bandung',
    year: 2020,
    pages: 486,
    weight: '580g',
  },
  {
    id: '7',
    title: 'Manajemen Keuangan',
    author: 'Eugene F. Brigham',
    price: 65000,
    originalPrice: 180000,
    condition: 'Seperti Baru',
    category: 'Ekonomi & Bisnis',
    faculty: 'Ekonomi dan Bisnis',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=560&fit=crop',
    description: 'Buku manajemen keuangan edisi terjemahan. Masih sangat bagus, belum ada coretan sama sekali. Cocok untuk mahasiswa semester atas.',
    seller: {
      name: 'Farah Diba',
      university: 'Universitas Brawijaya',
      avatar: 'FD',
    },
    isbn: '978-979-061-555-8',
    publisher: 'Salemba Empat',
    year: 2022,
    pages: 728,
    weight: '900g',
  },
  {
    id: '8',
    title: 'Fisika Dasar',
    author: 'Halliday, Resnick & Walker',
    price: 50000,
    originalPrice: 160000,
    condition: 'Baik',
    category: 'Matematika',
    faculty: 'MIPA',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=560&fit=crop',
    description: 'Buku fisika dasar jilid 1. Cover sedikit lecek di bagian sudut, tapi isi masih sangat baik. Dilengkapi soal-soal latihan.',
    seller: {
      name: 'Irfan Hakim',
      university: 'Universitas Brawijaya',
      avatar: 'IH',
    },
    isbn: '978-979-010-123-9',
    publisher: 'Erlangga',
    year: 2021,
    pages: 654,
    weight: '800g',
  },
];

export const stats = {
  booksSaved: 2400,
  co2Reduced: 2976,
  usersActive: 1850,
  universitiesConnected: 45,
};
