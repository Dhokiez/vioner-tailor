// File: src/components/my-components/GalleryCarousel.jsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function GalleryCarousel({ items }) {
  if (!items || items.length === 0) {
    return <div className="gallery-empty">Tidak ada gambar untuk kategori ini.</div>;
  }

  return (
    <div className="gallery-carousel-container">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false} // <-- PERBAIKAN 1: Diubah menjadi false agar panah kanan berfungsi
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="gallery-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {/* PERBAIKAN 2: Bungkus seluruh .gambar-box dengan tag <a> */}
            <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Lihat gambar ${item.title} lebih besar`}>
              <div className="gambar-box">
                <Image src={item.src} alt={item.alt} width={400} height={400} />
                <h3>{item.title}</h3>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}