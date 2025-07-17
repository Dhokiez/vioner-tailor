// File: src/components/my-components/ServiceBox.jsx
'use client';

import { useInView } from 'react-intersection-observer';

export default function ServiceBox({ title, description, price }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`layanan-box ${inView ? 'is-visible' : ''}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Tampilkan harga jika ada */}
      {price && <p className="service-price">{price}</p>}
    </div>
  );
}
