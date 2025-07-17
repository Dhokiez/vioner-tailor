// File: src/components/my-components/Footer.jsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        {/* Kolom 1: Tentang Vioner Tailor */}
        <div className="footer-column">
          <h4>Vioner Tailor</h4>
          <p>
            Your trusted destination for custom tailoring and style.
          </p>
        </div>

        {/* Kolom 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/layanan">Layanan</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Jelajahi */}
        <div className="footer-column">
          <h4>Jelajahi</h4>
          <ul>
            <li><Link href="/galeri">Galeri</Link></li>
            <li><Link href="/pesan">Pemesanan</Link></li>
          </ul>
        </div>

        {/* Kolom 4: Akun */}
        <div className="footer-column">
          <h4>Akun</h4>
          <ul>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vioner Tailor. All rights reserved.</p>
      </div>
    </footer>
  );
}