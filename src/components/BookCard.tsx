import Link from 'next/link';
// GREEN CODING: next/image → auto lazy-load, format WebP/AVIF, ukuran optimal
import Image from 'next/image';
import { Book } from '@/data/books';

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

export default function BookCard({ book }: { book: Book }) {
  const discount = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);

  return (
    <Link href={`/jelajahi/${book.id}`} className="group">
      <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-offwhite">
          {/* GREEN CODING: next/image otomatis:
              - lazy loading (hanya load saat masuk viewport)
              - konversi ke WebP/AVIF (50-70% lebih kecil dari JPEG)
              - responsive srcset (device tidak load gambar lebih besar dari layarnya)
              - placeholder blur bisa ditambahkan untuk UX */}
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getConditionColor(book.condition)}`}>
              {book.condition}
            </span>
          </div>
          {discount > 0 && (
            <div className="absolute top-3 right-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-500 text-white">
                -{discount}%
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <span className="text-xs font-medium text-sage mb-1">{book.category}</span>
          <h3 className="text-sm font-semibold text-charcoal line-clamp-2 mb-1 group-hover:text-forest transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-muted mb-3">{book.author}</p>
          <div className="mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-forest">{formatPrice(book.price)}</span>
              <span className="text-xs text-muted line-through">{formatPrice(book.originalPrice)}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
            <div className="w-6 h-6 bg-sage/20 rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-forest">{book.seller.avatar}</span>
            </div>
            <span className="text-xs text-muted truncate">{book.seller.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}