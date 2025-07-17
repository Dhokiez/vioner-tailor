import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <Image 
            src="/images/logo.png" 
            alt="Logo Vioner Tailor" 
            className="logo"
            width={150} // Ganti dengan lebar gambar asli Anda
            height={150} // Ganti dengan tinggi gambar asli Anda
            priority // Prioritaskan gambar ini karena penting (LCP)
          />
        </div>
        <h2>Jasa Jahit & Permak Pakaian</h2>
        <p>Menyediakan Berbagai Layanan Jahit & Permak Pakaian.</p>
        <Link href="/layanan" className="btn">Lihat Layanan</Link>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang">
        <h2>Tentang Kami</h2>
        <div className="tentang-kami">
          <div className="deskripsi">
            <h3 className="tulisan-tentang">Vioner Tailor</h3>
            <p>Sejak 2003, Vioner Tailor telah menjadi pilihan utama bagi mereka yang mengutamakan kualitas dan gaya dalam setiap pakaian.</p>
            <p>
              Dengan pengalaman selama 2 dekade, kami ahli dalam menyediakan berbagai macam layanan jahitan sesuai dengan keinginan Anda.
            </p>
            <p>
              Kami menggabungkan teknik jahit tradisional dengan teknologi modern untuk memastikan hasil yang sempurna, nyaman, dan tahan lama. Setiap jahitan adalah bukti komitmen kami untuk memberikan yang terbaik.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}