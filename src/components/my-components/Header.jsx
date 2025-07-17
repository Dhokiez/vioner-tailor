// File: components/my-components/Header.jsx

'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Logika untuk hide/show on scroll (fade effect)
  useEffect(() => {
  let lastScrollY = window.scrollY;
  let isAtTop = false;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Jika scroll berada di bagian atas (misalnya < 10px)
    if (currentScrollY <= 10) {
      isAtTop = true; // Posisi sudah di atas
    } else {
      isAtTop = false; // Jika scroll turun, reset posisi
    }

    // Jika scroll ke bawah dan bukan di bagian atas, sembunyikan header
    if (currentScrollY > lastScrollY && !isAtTop) {
      setIsHeaderVisible(false);
    }
    // Jika scroll ke atas dan sudah di posisi atas (<= 10px), tampilkan header
    else if (currentScrollY < lastScrollY && isAtTop) {
      setIsHeaderVisible(true);
    }

    // Update last scroll position
    lastScrollY = currentScrollY;
  };

  // Add event listener untuk mendeteksi scroll
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Clean up saat komponen unmount
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const pathname = usePathname();
  const pageTitles = {
    '/': 'Vioner Tailor',
    '/layanan': 'Layanan Kami',
    '/kontak': 'Kontak Kami',
    '/galeri': 'Galeri & Testimoni',
    '/pesan': 'Pemesanan'
  };
  const currentTitle = pageTitles[pathname] || 'Vioner Tailor';

  return (
    // Kita tidak lagi perlu class .is-open di sini
    <header className={!isHeaderVisible ? 'hide' : ''}>
      
      <div className="logo-container">
        <Link href="/">
        <Image src="/images/logo1.png" alt="Logo Vioner Tailor" className="logo-header" width={150} height={150} />
        </Link>
      </div>

      <div className="header-center">
        <h1 className={`judul ${pathname === '/' ? 'font-cinzel' : 'font-playfair'}`}>
          {currentTitle}
        </h1>
      </div>
      
      {/* Tombol ini akan mengontrol langsung className di <ul> */}
      <button 
      className={`menu-icon-button ${isMenuOpen ? 'is-open' : ''}`} 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
      </button>

      <nav>
        {/* Logika 'hidden' kembali ke sini, cara yang lebih simpel */}
        <ul id="menu-list" className={isMenuOpen ? '' : 'hidden'}>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Beranda</Link></li>
            <li><Link href="/layanan" onClick={() => setIsMenuOpen(false)}>Layanan</Link></li>
            <li><Link href="/kontak" onClick={() => setIsMenuOpen(false)}>Kontak</Link></li>
            <li><Link href="/galeri" onClick={() => setIsMenuOpen(false)}>Galeri</Link></li>
            <li><Link href="/pesan" onClick={() => setIsMenuOpen(false)}>Pemesanan</Link></li>
        </ul>
      </nav>
    </header>
  );
}