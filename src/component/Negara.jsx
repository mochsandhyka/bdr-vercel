import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { FaDollarSign, FaUserTie, FaTimes } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import { useLanguage } from "../context/LanguageContext";
import destinations from "./data/DestinationsData";
// const MAX_DESCRIPTION_LENGTH = 280;
const MAX_DESCRIPTION_LENGTH = 1000;

const truncateDescription = (description) => {
  const finalDescription = description;
  if (description.length > MAX_DESCRIPTION_LENGTH) {
    const truncated = description.slice(0, MAX_DESCRIPTION_LENGTH);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    const finalDescription = truncated.slice(0, lastSpaceIndex);

    return finalDescription.slice(0, MAX_DESCRIPTION_LENGTH) + "...  ";
  }
  return finalDescription;
};

export const DestinationSlider = () => {
  const { language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(null);
};

export const NewDestination = () => {
  const { language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null); // Menyimpan pekerjaan yang dipilih
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  useEffect(() => {
    if (selectedCountry) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedCountry]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById("popupModal");
      if (modal && !modal.contains(event.target)) {
        closePopup();
      }
    };

    if (selectedCountry) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedCountry]);
  const toggleCard = (index) => {
    const job = (
      language === "id"
        ? selectedCountry.requirementsId
        : selectedCountry.requirementsEn
    )[index];
    setSelectedJob(job);
    setSelectedJobIndex(index);
  };

  const handleReadMore = (country) => {
    setSelectedCountry(country);
  };
  const handleJob = (country) => {
    setSelectedCountry(country);

    // Pilih pekerjaan pertama dalam daftar (jika ada)
    const defaultJob =
      language === "id" ? country.requirementsId[0] : country.requirementsEn[0];

    setSelectedJob(defaultJob);
    setSelectedJobIndex(0); // Menetapkan index pekerjaan pertama
  };

  const closePopup = () => {
    setSelectedCountry(null);
    setSelectedJob(null);
  };

  return (
    <div
      id="destinations"
      className=" bg-gradient-to-t from-slate-200 to-white min-h-screen p-4"
    >
      <div className="container pt-16 m-4 mx-auto xl:pt-8  ">
        <h1 className="  text-4xl font-black mb-4 text-center text-green-600 md:pt-0">
          {language === "id" ? "Destinasi Kerja" : "Work Destination"}
        </h1>
        <h2 className="text-xs font-semibold mb-6 pb-12 mt-0 text-center text-[#717171] md:mb-0">
          {language === "id"
            ? "Letak mitra yang bekerja sama dengan perusahaan kami dalam kegiatan penyaluran tenaga kerja"
            : "Location of our company’s partner in human resource distribution"}
        </h2>
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {destinations.map((country, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                <img
                  src={country.img}
                  alt={country[language === "id" ? "nameId" : "nameEn"]}
                  className="w-full rounded-lg shadow-lg "
                />
                <div className="mx-3 p-6">
                  <h2 className="block text-2xl font-bold mb-3">
                    {language === "id" ? country.nameId : country.nameEn}
                  </h2>
                  <p className="block md:hidden mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed">
                    {language === "id"
                      ? truncateDescription(country.descId[0])
                      : truncateDescription(country.descEn[0])}
                    <span
                      onClick={() => handleReadMore(country)}
                      className="text-green-500 pb-10 text-sm font-bold cursor-pointer mt-4"
                    >
                      {language === "id" ? (
                        <>
                          <br />
                          Baca Selengkapnya»
                        </>
                      ) : (
                        <>
                          <br />
                          Read More»
                        </>
                      )}
                    </span>
                  </p>
                  <div className="hidden md:block text-justify text-sm font-semibold indent-3 text-slate-500 leading-relaxed 2xl:text-lg 2xl:pb-2">
                    {language === "id"
                      ? country.descId.map((desc, index) => (
                          <p className="mb-2" key={index}>
                            {desc}
                          </p>
                        ))
                      : country.descEn.map((desc, index) => (
                          <p className="mb-2" key={index}>
                            {desc}
                          </p>
                        ))}
                    <span
                      onClick={() => handleJob(country)}
                      className="text-green-500 pb-10 text-sm font-bold cursor-pointer mt-4"
                    >
                      {language === "id"
                        ? "Lihat Lowongan Kerja »"
                        : "View Job Vacancies »"}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Popup Modal */}

        {selectedCountry && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="block xl:bg-slate-200 bg-white p-8 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto xl:min-h-[80%] min-w-[80%]">
              {/* Gambar negara */}
              <img
                src={selectedCountry.img}
                alt={selectedCountry[language === "id" ? "nameId" : "nameEn"]}
                className="xl:hidden w-full rounded-lg mb-4"
              />
              <div className="block text-green-500 text-2xl font-bold mb-4 xl:text-center xl:text-3xl 2xl:text-5xl ">
                {language === "id" ? (
                  <>
                    <span className="hidden xl:block mb-6">
                      Lowongan Kerja {selectedCountry.nameId}
                    </span>
                    <span className="block sm:hidden">
                      {selectedCountry.nameId}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="hidden xl:block mb-6">
                      {selectedCountry.nameEn} Job Vacancies
                    </span>
                    <span className="block sm:hidden">
                      {selectedCountry.nameEn}
                    </span>
                  </>
                )}
              </div>
              {(language === "id"
                ? selectedCountry.descId
                : selectedCountry.descEn
              ).map((item, index) => (
                <p
                  key={index}
                  className="block mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed xl:hidden "
                >
                  {item}
                </p>
              ))}
              <h1 className="block text-2xl font-bold mb-4 xl:text-center xl:hidden">
                {language === "id" ? "Lowongan Kerja" : "Job Vacancies"}
              </h1>

              {/* Untuk ukuran layar HP */}
              <div className="block bg-slate-100 rounded-lg xl:hidden">
                <Swiper
                  pagination={{ clickable: true }}
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Pagination, Autoplay]}
                  className="block mySwiper xl:hidden"
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                >
                  {(language === "id"
                    ? selectedCountry.requirementsId
                    : selectedCountry.requirementsEn
                  ).map((job, index) => (
                    <SwiperSlide
                      className="block mt-4 mb-14 xl:hidden"
                      key={index}
                    >
                      <div className="block xl:hidden" key={index}>
                        <h1 className="text-xl  font-semibold mb-3 mx-3 text-green-600">
                          {job.jobName}
                        </h1>
                        <h1 className="mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed">
                          {job.jobDesc}
                        </h1>
                        <h1 className="text-lg font-semibold mb-3 mx-3 text-green-600">
                          Requirements
                        </h1>
                        <ul className="list-disc pl-6 mx-3 mb-4 space-y-2 mt-2 text-sm font-semibold text-slate-500">
                          {job.jobReq.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                        <h1 className="text-lg font-semibold mb-3 mx-3 text-green-600">
                          Qualification
                        </h1>
                        <ul className="list-disc pl-6 mx-3 mb-4 space-y-2 mt-2 text-sm font-semibold text-slate-500">
                          {job.jobQualification.map((qua, index) => (
                            <li key={index}>{qua}</li>
                          ))}
                        </ul>
                        <div className="flex items-center mb-3">
                          <FaDollarSign className="text-green-600 mr-2 mx-3" />
                          <span className="text-sm font-semibold text-slate-500">
                            {job.salary}
                          </span>
                        </div>
                        <div className="flex items-center mb-3">
                          <FaUserTie className="text-green-600 mr-2 mx-3" />
                          <span className="text-sm font-semibold text-slate-500 ">
                            {job.status}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Untuk ukuran layar XL keatas */}
              <div className="hidden xl:block bg-slate-200">
                <div className=" gap-12 rounded-lg flex-wrap justify-center max-h-[80vh] overflow-y-auto">
                  <div className="grid grid-cols-2">
                    <div>
                      {(language === "id"
                        ? selectedCountry.requirementsId
                        : selectedCountry.requirementsEn
                      ).map((job, index) => (
                        <ul key={index} className="flex mx-3 my-3">
                          <li
                            className={`${
                              selectedJobIndex === index
                                ? "bg-slate-100 text-green-500"
                                : "bg-slate-200 text-green-600"
                            } px-4 py-2 rounded-lg mb-2 w-full`}
                          >
                            <button
                              key={index}
                              onClick={() => toggleCard(index)}
                              className={`${
                                selectedJobIndex === index
                                  ? "bg-slate-100 text-green-500"
                                  : "bg-slate-200 text-green-600"
                              }  rounded-lg `}
                            >
                              <h1 className="text-2xl font-semibold">
                                {job.jobName}
                              </h1>
                              <h1 className="text-sm font-semibold">
                                {job.status}
                              </h1>
                            </button>
                          </li>
                        </ul>
                      ))}
                    </div>
                    <div className="bg-slate-200">
                      <div className="bg-slate-200 p-4">
                        {selectedJob ? (
                          <>
                            <h1 className="text-2xl font-semibold text-green-600 mb-4">
                              {selectedJob.jobName}
                            </h1>
                            <h1 className="mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed">
                              {selectedJob.jobDesc}
                            </h1>
                            <h1 className="text-lg font-semibold mb-3 text-green-600">
                              Requirements
                            </h1>
                            <ul className="list-disc pl-6 mb-4 space-y-2 mt-2 text-sm font-semibold text-slate-500">
                              {selectedJob.jobReq.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                            <h1 className="text-lg font-semibold mb-3 text-green-600">
                              Qualification
                            </h1>
                            <ul className="list-disc pl-6 mb-4 space-y-2 mt-2 text-sm font-semibold text-slate-500">
                              {selectedJob.jobQualification.map(
                                (qua, index) => (
                                  <li key={index}>{qua}</li>
                                )
                              )}
                            </ul>
                            <div className="flex items-center mb-3">
                              <FaDollarSign className="text-green-600 mr-2" />
                              <span className="text-sm font-semibold text-slate-500">
                                {selectedJob.salary}
                              </span>
                            </div>
                            <div className="flex items-center mb-3">
                              <FaUserTie className="text-green-600 mr-2" />
                              <span className="text-sm font-semibold text-slate-500">
                                {selectedJob.status}
                              </span>
                            </div>
                          </>
                        ) : (
                          "Pilih Job disamping"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tombol untuk menutup popup */}
              <button
                onClick={closePopup}
                className="block xl:hidden mt-12 bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                {language === "id" ? "Tutup" : "Close"}
              </button>
              <button
                onClick={closePopup} // Calls the closePopup function to close the modal
                className="hidden xl:block absolute top-16 right-36 bg-green-400 text-white p-2 rounded-full hover:bg-green-600"
              >
                <FaTimes className="text-4xl" /> {/* Close icon */}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
