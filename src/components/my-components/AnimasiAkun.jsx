// File: src/components/my-components/AnimasiAkun.jsx
'use client';

import { motion } from 'framer-motion';

export default function AnimatedLoginBar() {
  const barAnimation = {
    x: ['-100%', '100%'],  // Gerakan horizontal dari kiri (-100%) ke kanan (100%)
    opacity: [1, 0, 1],    // Mulai dengan opacity penuh (1), memudar (0), dan kembali ke opacity penuh (1)
    transition: {
      ease: 'easeInOut',    // Transisi yang lebih halus
      duration: 2,        // Durasi singkat untuk kilatan cepat
      repeat: Infinity,     // Ulangi animasi secara terus menerus
      repeatDelay: 1,       // Tunda sejenak sebelum mengulang
    },
  };

  return (
    <motion.div
      className="animated-bar"
      animate={barAnimation} // Terapkan animasi kilatan lewat
    />
  );
}
