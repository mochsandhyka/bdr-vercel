import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import about from "./data/AboutData";
import hospitalityImg from "../assets/img/about/hospitality.png";
import householdImg from "../assets/img/about/household.png";
import spaImg from "../assets/img/about/spa-therapist.png";
import directorImg from "../assets/img/about/director.png";
import direkturImg from "../assets/img/about/direktur.png";

import "swiper/swiper-bundle.css";

export const NewAbout = () => {
  const images = [hospitalityImg, householdImg, spaImg];
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="about">
      <div className="pt-20 min-h-screen bg-gradient-to-t from-white to-slate-200 dark:bg-black">
        {/* Title About Us */}
        <h1 className="uppercase font-black mb-3 text-center text-green-600 text-4xl">
          {language === "id" ? about.titleId : about.titleEn}
        </h1>
        {/* Sub Title */}
        <h2 className="text-xs font-semibold mb-12 mt-0 text-center text-[#717171]">
          {language === "id" ? about.subTitleId : about.subTitleEn}
        </h2>
        {/* Title for Text Phone only*/}
        <h1 className="sm:block md:hidden uppercase ml-3 text-sm font-bold text-black mb-4 tracking-wide">
          {language === "id" ? (
            <>
              PT. Bina <span className="text-red-500">Dinamita</span> Rama
            </>
          ) : (
            <>
              Bina <span className="text-red-500">Dinamita</span> Rama Ltd
            </>
          )}
        </h1>
        {/* Text for About Us except Phone*/}
        <div className="hidden md:block bg-gradient-to-b from-slate-200 to-white">
          <div className="container bg-transparent grid grid-cols-1 sm:grid-cols-2 mx-auto pt-4 pb-8  text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed gap-6">
            <div>
              <h1 className="uppercase text-sm font-bold text-black mb-4 tracking-wide">
                {language === "id" ? (
                  <>
                    PT. Bina <span className="text-red-500">Dinamita</span> Rama
                  </>
                ) : (
                  <>
                    Bina <span className="text-red-500">Dinamita</span> Rama Ltd
                  </>
                )}
              </h1>
              {language === "id"
                ? about.textId.map((text, index) => (
                    <p key={index} className="mb-4">
                      {text}
                    </p>
                  ))
                : about.textEn.map((text, index) => (
                    <p key={index} className="mb-4">
                      {text}
                    </p>
                  ))}
            </div>
            <div className="h-full w-full ">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full">
                      <img
                        src={image}
                        alt={`Image ${[index]}`}
                        className="w-full h-1/2 object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* Text for About Us Medium */}
        <div className="block sm:hidden mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed ">
          {language === "id"
            ? about.textId.map((text, index) => (
                <p key={index} className="mb-4">
                  {text}{" "}
                </p>
              ))
            : about.textEn.map((text, index) => (
                <p key={index} className="mb-4">
                  {text}{" "}
                </p>
              ))}
        </div>
        {/* Slide for Phone Container */}
        <div className="block sm:hidden mx-auto px-4 gap-1 ">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64">
                  <img
                    src={image}
                    alt={`Image ${[index]}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* mobile */}
        <div
          id="vision"
          className="pt-6  bg-transparent text-sm font-semibold text-slate-500 tracking-wide leading-relaxed p-8 xl:bg-gradient-to-t from-slate-200 to-white "
        >
          <div className="block container mx-auto pt-16 xl:hidden">
            <h1 className="text-2xl text-green-500 font-bold mb-4 border-b-2 border-green-500">
              {language === "id" ? "Visi" : "Vision"}
            </h1>
            <p className="text-sm mb-6">
              {language === "id" ? about.visionId : about.visionEn}
            </p>
            <h1 className="text-2xl text-green-500 font-bold mb-4 border-b-2 border-green-500">
              {language === "id" ? "Misi" : "Missions"}
            </h1>
            <ul className="list-inside space-y-2 text-sm mb-6">
              {(language === "id" ? about.missionId : about.missionEn).map(
                (item, index) => (
                  <li key={index} className="text-sm">
                    {index + 1}. {item}
                  </li>
                )
              )}
            </ul>
          </div>
          {/* visi dekstop */}
          <div id="vision" className="hidden xl:block container mx-auto pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Visi */}
              <div className="flex flex-col">
                <h1 className="text-2xl text-green-500 font-bold mb-4 border-b-2 border-green-500">
                  {language === "id" ? "Visi" : "Vision"}
                </h1>
                <p className="text-sm mb-6">
                  {language === "id" ? about.visionId : about.visionEn}
                </p>
              </div>

              {/* Misi */}
              <div className="flex flex-col">
                <h1 className="text-2xl text-green-500 font-bold mb-4 border-b-2 border-green-500">
                  {language === "id" ? "Misi" : "Missions"}
                </h1>
                <ul className="list-inside space-y-2 text-sm mb-6">
                  {(language === "id" ? about.missionId : about.missionEn).map(
                    (item, index) => (
                      <li key={index} className="text-sm">
                        {index + 1}. {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Director's Message Section */}
        <div
          id="message"
          className=" pt-20  mx-auto bg-transparent p-6 text-gray-800 xl:bg-gradient-to-b from-slate-200 to-white"
        >
          {/* Layar XL */}
          <div id="message" className="hidden xl:block container mx-auto ">
            <div className="flex md:grid-cols-2 gap-6">
              <div className="h-[200%] w-[100%] justify-center mb-4">
                <img
                  src={direkturImg}
                  alt="Director"
                  className="w-full h-full rounded-3xl object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className=" text-2xl font-bold mb-4 border-b-2 text-green-500 border-green-500">
                  {language === "en"
                    ? "Director’s Message"
                    : "Pesan dari Direktur"}
                </h2>

                {(language === "id"
                  ? about.directorMessageId
                  : about.directorMessageEn
                ).map((index) => (
                  <p
                    key={index}
                    className=" mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed"
                  >
                    {index}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="block xl:hidden">
            {/* Add Director's Image */}
            <div className="flex justify-center mb-4">
              <img
                src={directorImg}
                alt="Director"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 text-green-500 border-green-500">
              {language === "en" ? "Director’s Message" : "Pesan dari Direktur"}
            </h2>
            {(language === "id"
              ? about.directorMessageId
              : about.directorMessageEn
            )
              .slice(0, 2) // Show the first two paragraphs
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            {isExpanded && (
              <>
                {(language === "id"
                  ? about.directorMessageId
                  : about.directorMessageEn
                )
                  .slice(2, -3) // Exclude the last three lines
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                {/* Add a separate div for the last three lines with the same spacing */}
                <div className="mt-12"></div>
                <div className="mx-3 mb-4 text-justify text-sm font-semibold text-slate-500 tracking-wide leading-relaxed">
                  {(language === "id"
                    ? about.directorMessageId
                    : about.directorMessageEn
                  )
                    .slice(-3)
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p> // Use mb-4 for spacing
                    ))}
                </div>
              </>
            )}

            <p
              className="text-sm font-bold text-green-500 cursor-pointer mt-4"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded
                ? language === "id"
                  ? "Baca Lebih Sedikit"
                  : "Read Less"
                : language === "id"
                ? "Baca Lebih Banyak"
                : "Read More"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
