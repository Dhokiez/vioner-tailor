// File: app/layanan/page.jsx

import LayananSlider from '@/components/my-components/LayananSlider';
import ServiceBox from '@/components/my-components/ServiceBox';

export const metadata = {
  title: 'Layanan - Vioner Tailor',
  description: 'Pilihan layanan jahit dan permak profesional yang ditawarkan oleh Vioner Tailor.',
};

export default function LayananPage() {
  const services = [
    { title: 'Jahit Pakaian Baru', description: 'Jasa jahit pakaian dan celana sesuai desain dan ukuran Anda.', price: 'Harga: Rp 100.000' },
    { title: 'Permak Pakaian', description: 'Permak celana, baju, jaket, dan lainnya.', price: 'Harga: Rp 20.000 - Rp 200.000' },
    { title: 'Jahit Seragam', description: 'Pembuatan seragam kerja, sekolah, dan komunitas maupun organisasi.', price: 'Harga: Rp 200.000' },
    { title: 'Jahit Kostum', description: 'Pembuatan kostum untuk acara khusus, pertunjukan, dan cosplay.', price: 'Harga: Rp 500.000 - Rp 2.000.000' },
    { title: 'Jahit Setelan Jas', description: 'Jasa jahit setelan jas untuk acara formal.', price: 'Harga: Rp 400.000 - Rp 1.000.000' },
    { title: 'Jahit Gaun', description: 'Jasa jahit gaun pesta, pernikahan, dan acara khusus.', price: 'Harga: Rp 500.000 - Rp 1.500.000' },
  ];

  return (
    <div className="container">
      <LayananSlider />
      <h1 className="page-title">Pilihan Layanan</h1>

      <div className="services-list">
        {/* Tampilkan semua layanan menggunakan komponen ServiceBox */}
        {services.map((service, index) => (
          <ServiceBox
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}  // Passing harga ke ServiceBox
          />
        ))}
      </div>
    </div>
  );
}
