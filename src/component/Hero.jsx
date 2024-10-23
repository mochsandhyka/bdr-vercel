import { useLanguage } from "../context/LanguageContext";
import React, { useState, useEffect } from "react";
import "animate.css";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCards,
  EffectFlip,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";

SwiperCore.use([
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectFlip,
  EffectCards,
  EffectCoverflow,
]);

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Memulai animasi di slide pertama setelah komponen di-mount
    setIsAnimating(true);
  }, []);

  const img1 =
    "https://res.cloudinary.com/dlmfx6nxx/image/upload/v1727959321/hero-bg_n2fybp.png";
  const img2 =
    "https://res.cloudinary.com/dlmfx6nxx/image/upload/v1729210482/gedung_t5yg9q.jpg";
  const img3 =
    "https://res.cloudinary.com/dlmfx6nxx/image/upload/v1729210573/anggota_dtbxxg.jpg";
  const images = [img1, img2, img3];

  // Title yang konsisten untuk setiap slide
  const title = {
    en: (
      <div className="tracking-wider ">
        -Bina{" "}
        <span className="text-white" key="1">
          Dinamita{" "}
        </span>
        Rama LTD.
      </div>
    ),
    id: (
      <div className="tracking-wider ">
        -PT Bina{" "}
        <span className="text-white" key="1">
          Dinamita{" "}
        </span>
        Rama
      </div>
    ),
  };

  const slideTexts = [
    {
      english: (
        <div className="tracking-wider ">
          Indonesia
          <span className="text-red-500" key="2">
            {" "}
            Migrant Workers
          </span>
          <br />
          <span className="text-white">Placement Agencies</span>
        </div>
      ),
      indonesian: (
        <div className="tracking-wider">
          Perusahaan Penempatan Kerja
          <br />
          <span className="text-red-500" key="2">
            {" "}
            Migran{" "}
          </span>
          <span className="text-white">Indonesia</span>
        </div>
      ),
    },
    {
      english: (
        <div>
          Collaboration and Partnership <br />
          for a <span className="text-red-500">Better Future</span>
        </div>
      ),
      indonesian: "Kolaborasi dan Kemitraan untuk masa depan yang lebih baik",
    },
    {
      english: (
        <div>
          Creating the Future
          <br /> with <span className="text-red-500">Professionalism</span>
        </div>
      ),
      indonesian: "Membangun masa depan dengan profesionalisme",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsAnimating(false); // Reset animasi sebelum mulai transisi
  };

  const handleTransitionEnd = () => {
    setIsAnimating(true); // Aktifkan animasi setelah transisi selesai
  };

  const { language } = useLanguage();

  return (
    <div
      className="relative min-h-screen h-[calc(100vh-80px)] mt-1 w-full z-10 font-black flex flex-col gap-5 items-center justify-center"
      id="home"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Swiper
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={handleSlideChange}
          onTransitionEnd={handleTransitionEnd}
          className="w-full h-screen relative"
        >
          {images.map((image, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-100 ${
                    isAnimating && activeIndex === index
                      ? "zoom-in-animation"
                      : ""
                  }`}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

                {/* Title yang konsisten untuk setiap slide */}
                <h1
                  className={`absolute top-1/3 left-1/2 text-xs md:text-3xl xl:text-xl font-bold text-green-400 -translate-x-1/2 -translate-y-1/2 text-center z-[30] uppercase tracking-wide transition-all duration-1000 ease-in-out ${
                    isAnimating && activeIndex === index
                      ? "opacity-100 translate-y-0" // Animasi masuk
                      : "opacity-0 translate-y-[-50px]" // Animasi keluar
                  }`}
                >
                  {language === "id" ? title.id : title.en}
                </h1>

                {/* Teks konten untuk setiap slide */}
                <h2
                  className={`absolute top-1/2 left-1/2 text-xl md:text-5xl -translate-x-1/2 -translate-y-1/2 text-white text-center z-[30] tracking-wide ${
                    isAnimating && activeIndex === index
                      ? "bounce-in-animation"
                      : ""
                  }`}
                >
                  {language === "id"
                    ? slideTexts[index].indonesian
                    : slideTexts[index].english}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
