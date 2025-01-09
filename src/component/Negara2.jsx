import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaDollarSign, FaUserTie } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import { useLanguage } from "../context/LanguageContext";
import CloseButton from "../component/modal/CloseButton";
import {
  GreenButton,
  Title,
  SubTitle,
  Text,
  ReadMore,
} from "../component/Component";

const MAX_DESCRIPTION_LENGTH = 1000;

const truncateDescription = (description) => {
  if (description.length > MAX_DESCRIPTION_LENGTH) {
    const truncated = description.slice(0, MAX_DESCRIPTION_LENGTH);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    return truncated.slice(0, lastSpaceIndex) + "...  ";
  }
  return description;
};

export const NewDestination = () => {
  const { language } = useLanguage();
  const [destinations, setDestinations] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/countries");
        const data = await response.json();
        if (data.success) {
          setDestinations(data.data); // Set the data to state
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  const handleReadMore = (country) => {
    setSelectedCountry(country);
  };

  const closePopup = () => {
    setSelectedCountry(null);
  };

  return (
    <div
      id="destinations"
      className="bg-gradient-to-t from-slate-200 to-white min-h-screen p-4 pt-8"
    >
      <div className="container pt-16 m-4 mx-auto xl:pt-8">
        <Title
          text={language === "id" ? "Destinasi Kerja" : "Work Destination"}
        />
        <SubTitle
          text={
            language === "id"
              ? "Letak mitra yang bekerja sama dengan perusahaan kami dalam kegiatan penyaluran tenaga kerja"
              : "Location of our company’s partner in human resource distribution"
          }
        />
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {destinations.map((country, index) => (
            <SwiperSlide key={country._id}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                <img
                  src={country.img.url}
                  alt={country[language === "id" ? "nameId" : "nameEn"]}
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="mx-3 p-6">
                  <h2 className="block text-2xl font-bold mb-3">
                    {language === "id" ? country.nameId : country.nameEn}
                  </h2>
                  <div className="block sm:hidden mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed">
                    <Text
                      text={
                        language === "id"
                          ? truncateDescription(country.descId[0])
                          : truncateDescription(country.descEn[0])
                      }
                    />
                    <ReadMore
                      clicked={() => handleReadMore(country)}
                      id="Baca Selengkapnya  »"
                      en="Read More  »"
                    />
                  </div>
                  <div className="hidden md:block text-justify text-sm font-semibold indent-3 text-slate-500 leading-relaxed 2xl:text-lg 2xl:pb-2">
                    {(language === "id" ? country.descId : country.descEn).map(
                      (desc, index) => (
                        <p className="mb-2" key={index}>
                          {desc}
                        </p>
                      )
                    )}
                    <ReadMore
                      clicked={() => handleReadMore(country)}
                      id="Lihat Lowongan Kerja »"
                      en="View Job Vacancies »"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedCountry && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
              <img
                src={selectedCountry.img.url}
                alt={selectedCountry[language === "id" ? "nameId" : "nameEn"]}
                className="w-full rounded-lg mb-4"
              />
              <h2 className="text-green-500 text-2xl font-bold mb-4">
                {language === "id"
                  ? selectedCountry.nameId
                  : selectedCountry.nameEn}
              </h2>
              {(language === "id"
                ? selectedCountry.descId
                : selectedCountry.descEn
              ).map((desc, index) => (
                <p
                  key={index}
                  className="text-sm font-semibold text-slate-500 mb-4"
                >
                  {desc}
                </p>
              ))}
              <CloseButton
                onClick={closePopup}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
