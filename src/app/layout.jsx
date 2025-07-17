// File: app/layout.jsx
'use client'; // <-- 1. UBAH MENJADI CLIENT COMPONENT

import { Poppins, Cinzel, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { usePathname } from 'next/navigation'; // <-- 2. IMPORT HOOK UNTUK MENDAPATKAN PATH URL SAAT INI

import './globals.css';
import Header from '@/components/my-components/Header';
import Footer from '@/components/my-components/Footer';
import PageTransitionWrapper from '@/components/my-components/PageTransitionWrapper';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});
const cinzel = Cinzel({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});


export default function RootLayout({ children }) {
  const pathname = usePathname(); // <-- 3. DAPATKAN PATH URL SAAT INI

  return (
    <html lang="id">
      {/* Karena ini Client Component, kita gunakan <head> secara manual 
        untuk metadata dasar. Metadata per halaman tetap bisa diatur di setiap page.jsx
      */}
      <head>
        <title>Vioner Tailor</title>
        <meta name="description" content="Jasa jahit dan permak pakaian profesional." />
      </head>
      
      <body className={`${poppins.variable} ${cinzel.variable} ${playfair.variable}`}>
        <Header />
        
        {/* 4. BERIKAN 'key' UNIK PADA PEMBUNGKUS ANIMASI */}
        <PageTransitionWrapper key={pathname}>
          <main>{children}</main>
        </PageTransitionWrapper>
        
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/@phosphor-icons/web" strategy="lazyOnload" />
      </body>
    </html>
  );
}