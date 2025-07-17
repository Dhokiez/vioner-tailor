// File: src/components/my-components/LayananSlider.jsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import CSS dasar untuk Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function LayananSlider() {
  const sliderImages = [
    '/images/slider/slide1.jpg',
    '/images/slider/slider4.jpg',
  
  ];

  return (
    <div className="slider-container">
      <Swiper
        // Install modul yang kita butuhkan
        modules={[Navigation, Pagination, Autoplay]}
        // Opsi slider
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {sliderImages.map((src, index) => (
          <SwiperSlide key={index}>
            <Image 
              src={src} 
              alt={`Slider Image ${index + 1}`} 
              fill 
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}