// File: src/components/my-components/AnimasiPage.jsx

'use client';

import { useSpring, animated, config } from '@react-spring/web';

export default function PageTransitionWrapper({ children }) {
  // Kita gunakan useSpring untuk mendefinisikan animasi
  const animationProps = useSpring({
    // Properti Awal (Saat komponen pertama kali muncul)
    from: { 
      opacity: 0, 
      transform: 'translateY(40px)' 
    },
    // Properti Akhir (Tujuan animasi)
    to: { 
      opacity: 1, 
      transform: 'translateY(0px)' 
    },
    // Konfigurasi tambahan
    config: config.gentle, // Memberikan efek "fisika" yang lembut pada animasi
    delay: 200, // Beri jeda 200ms sebelum animasi dimulai
  });

  // 'animated.div' adalah div khusus dari React Spring
  // yang bisa menerima properti animasi dari 'useSpring'.
  // Kita bungkus 'children' (konten halaman kita) dengan div ini.
  return (
    <animated.div style={animationProps}>
      {children}
    </animated.div>
  );
}