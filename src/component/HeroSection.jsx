import { useLanguage } from "../context/LanguageContext";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Autoplay, EffectFlip } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import HeroData from "./data/HeroData";

// Import SwiperCore and the required modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFlip]);

export const Carousel2 = () => {
  const img1 =
    "https://res.cloudinary.com/dlmfx6nxx/image/upload/v1727959321/hero-bg_n2fybp.png";
  const img2 =
    "https://res.cloudinary.com/dlmfx6nxx/image/upload/v1729210482/gedung_t5yg9q.jpg";
  const img3 =
    "https://res.cloudinary.com/dlmfx6nxx/image/upload/v1729210573/anggota_dtbxxg.jpg";
  const images = [img1, img2, img3];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const { language } = useLanguage();

  const content = {
    en: {
      title: [
        "Bina",
        <span className="text-white" key="1">
          Dinamita
        </span>,
        "Rama Ltd.",
      ],
      description2: ["Placement Agencies"],
      description1: [
        "Indonesia",
        <span className="text-red-500" key="2">
          {" "}
          Migrant Workers
        </span>,
      ],
    },
    id: {
      title: [
        "PT Bina",
        <span className="text-white" key="1">
          Dinamita
        </span>,
        "Rama",
      ],
      description1: ["Perusahaan Penempatan Kerja"],
      description2: [
        <span className="text-red-500" key="2">
          Migrant
        </span>,
        " Indonesia",
      ],
    },
  };

  const content2 = {
    en: [
      "Collaboration and partnership for a better future",
      <span className="text-red-500" key="2">
        {" Indonesia "}
        Migrant Workers
        {" Placement Agencies"}
      </span>,
    ],
    id: [
      "Kolaborasi dan kemitraan untuk masa depan yang lebih baik",
      <span className="text-red-500" key="2">
        {" Perusahaan Penempatan Kerja "}
        Migran
        {" Indonesia"}
      </span>,
    ],
  };
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    setAnimate(true);
  }, [activeIndex]);

  return (
    <div
      className="relative min-h-screen h-[calc(100vh-80px)] mt-1 w-full z-10 font-black flex flex-col gap-5 items-center justify-center"
      id="home"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Swiper
          effect="flip"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={handleSlideChange}
          className="w-full h-screen relative"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-100 ${
                    activeIndex === index ? "zoom-in-animation" : index === 0
                  }`}
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

                {/* Add slide-specific content inside the SwiperSlide */}
                <div className="absolute bottom-10 left-10 z-30 text-white text-2xl md:text-4xl">
                  {activeIndex === index && (
                    <h1 className="text-accent text-green-400 text-3xl md:text-7xl text-center z-20 uppercase tracking-wide m-0">
                      {content2[language].map((part, idx) => (
                        <span key={idx}>
                          {part}
                          {idx < content2[language].length - 1 && " "}
                        </span>
                      ))}
                    </h1>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h1 className="text-accent text-green-400 text-3xl md:text-7xl text-center z-20 uppercase tracking-wide m-0">
        {content[language].title.map((part, index) => (
          <span key={index}>
            {part}
            {index < content[language].title.length - 1 && " "}
          </span>
        ))}
      </h1>

      <h5 className="text-white text-base md:text-3xl normal-case z-20 tracking-wide">
        {content[language].description1.map((part, index) => (
          <span key={index}>
            {part}
            {index < content[language].description1.length - 1 && " "}
          </span>
        ))}
      </h5>

      <h5 className="text-white text-base md:text-3xl normal-case z-20 tracking-wide">
        {content[language].description2.map((part, index) => (
          <span key={index}>
            {part}
            {index < content[language].description2.length - 1 && " "}
          </span>
        ))}
      </h5>
    </div>
  );
};
