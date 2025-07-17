// File: app/galeri/page.jsx

import GalleryCarousel from '@/components/my-components/AnimasiGaleri';
import Link from 'next/link';

export const metadata = {
  title: 'Galeri & Testimoni - Vioner Tailor',
  description: 'Lihat galeri dan testimoni Vioner Tailor. Temukan hasil jahitan dengan sentuhan pengalaman selama 2 dekade.',
};

const allGalleryItems = [
    { category: 'Jahit Pakaian Baru', 
      src: "/images/galeri/jahit pakaian/kemeja1.jpg", 
      alt: "Kemeja Flanel", 
      title: "Kemeja Flanel" },
    { category: 'Jahit Pakaian Baru', 
      src: "/images/galeri/jahit pakaian/kemeja2.jpg", 
      alt: "Kemeja Flanel", 
      title: "Kemeja Flanel" },
    { category: 'Jahit Pakaian Baru',
      src: "/images/galeri/jahit pakaian/kemeja3.jpg", 
      alt: "Kemeja", 
      title: "Kemeja" },
    { category: 'Jahit Pakaian Baru', 
      src: "/images/galeri/jahit pakaian/kemeja4.jpg", 
      alt: "Kemeja", 
      title: "Kemeja" },
    { category: 'Jahit Pakaian Baru', 
      src: "/images/galeri/jahit pakaian/kemeja5.jpg", 
      alt: "Kemeja", 
      title: "Kemeja" },
    { category: 'Jahit Pakaian Baru', 
      src: "/images/galeri/jahit pakaian/kemeja6.jpg", 
      alt: "Kemeja Batik", 
      title: "Kemeja Batik" },
    { category: 'Jahit Pakaian Baru',
      src: "/images/galeri/jahit pakaian/celana1.jpg",
      alt: "Celana Formal",
      title: "Celana Formal" },
    { category: 'Permak', 
      src: "/images/galeri/permak/celana.jpg", 
      alt: "Permak Celana Jeans", 
      title: "Permak Celana" },
    { category: 'Permak', 
      src: "/images/galeri/permak/jaket.jpg", 
      alt: "Permak Jaket", 
      title: "Permak Jaket" },
    { category: 'Seragam', 
      src: "/images/galeri/seragam/kantor.jpg", 
      alt: "Seragam Kerja", 
      title: "Seragam Kantor" },
    { category: 'Seragam', 
      src: "/images/galeri/seragam/kantor2.jpg", 
      alt: "Seragam Kerja", 
      title: "Seragam Kantor" },
    { category: 'Seragam', 
      src: "/images/galeri/seragam/pramuka.jpg", 
      alt: "Seragam Sekolah Pramuka", 
      title: "Seragam Sekolah" },
    { category: 'Kostum', 
      src: "/images/galeri/kostum/pesulap.jpg", 
      alt: "Kostum Pesulap", 
      title: "Kostum Pesulap" },
    { category: 'Kostum',
      src: "/images/galeri/kostum/kimono.jpg", 
      alt: "Kostum Kimono",
      title: "Kostum Kimono" },
    { category: 'Jahit Jas', 
      src: "/images/galeri/jas/jas1.jpg", 
      alt: "Jahitan Jas Pria", 
      title: "Setelan Jas Modern" },
    { category: 'Jahit Jas',
      src: "/images/galeri/jas/jas2.jpg", 
      alt: "Jas Modern", 
      title: "Jas Modern" },
    { category: 'Jahit Jas', 
      src: "/images/galeri/jas/jas3.jpg", 
      alt: "Jas Formal", 
      title: "Jas Formal" },
    { category: 'Jahit Jas', 
      src: "/images/galeri/jas/jas4.jpg", 
      alt: "Jas Elegan", 
      title: "Jas Elegan" },
    { category: 'Jahit Gaun', 
      src: "/images/galeri/gaun/gaun.jpg", 
      alt: "Gaun Pengantin Mewah", 
      title: "Gaun Pengantin" },
    { category: 'Jahit Gaun', 
      src: "/images/galeri/gaun/gaun2.jpg", 
      alt: "Gaun Wanita Elegan", 
      title: "Gaun Pesta" },
];

const categories = ['Jahit Pakaian Baru', 'Permak', 'Seragam', 'Kostum', 'Jahit Jas', 'Jahit Gaun'];

export default function GaleriPage() {
  return (
    <section className="galeri">
      <h2>Galeri</h2>
      
      {categories.map((category) => {
        const itemsForCategory = allGalleryItems.filter(item => item.category === category);
        if (itemsForCategory.length === 0) return null;

        return (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <GalleryCarousel items={itemsForCategory} />
          </div>
        );
      })}

      <div className="testimoni">
        <h2>Testimoni Pelanggan Kami</h2>
        {/* ... */}
      </div>
      <div className="auth">
        <h3>Jika Anda Ingin Memberikan Testimoni</h3>
        <p>
          Silahkan <Link href="/login">login</Link> atau <Link href="/register">register</Link> terlebih dahulu.
        </p>
      </div>
    </section>
  );
}