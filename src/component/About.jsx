import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { SiGooglemaps } from "react-icons/si";
import image1 from "../assets/img/perawat.jpg";
import image2 from "../assets/img/tukanglas.jpg";
import direkturImg from "../assets/img/direktur.jpg";
import image3 from "../assets/img/pabrik2.jpg";
import { Office } from "./Office";

export const About = () => {
  const images = [image1, image2, image3];
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const content = {
    id: {
      title: "tentang kami",
      title2: [
        "PT. Bina ",
        <span className="text-red-500">Dinamita</span>,
        " Rama",
      ],
      subTitle: "Kami telah bekerja dengan 200+ klien",
      paragraph: [
        "Perusahaan kami didirikan dengan tekad untuk melatih dan menghasilkan sumber daya manusia yang berkualitas. Hal ini bertujuan untuk memenuhi kebutuhan tenaga kerja di kancah internasional sesuai dengan kualifikasi yang ada. Selain menyalurkan tenaga kerja secara global, perusahaan kami juga fokus dalam membantu perbaikan kehidupan masyarakat melalui pelayanan pemberian tenaga kerja. Kami selalu berkomitmen untuk mempertahankan kualitas rekrutmen sumber daya manusia yang berdasarkan nilai profesionalisme. Dedikasi yang kami berikan melalui peningkatan dan pengembangan sumber daya adalah untuk memberikan sumber daya manusia yang terlatih dan kompeten. Diharapkan dengan semangat dan usaha yang baik, kami dapat memberikan pelayanan yang terbaik dan memuaskan untuk klien kami.",
        "Kami selalu berkomitmen untuk mempertahankan kualitas rekrutmen sumber daya manusia yang berdasarkan nilai profesionalisme. Dedikasi yang kami berikan melalui peningkatan dan pengembangan sumber daya adalah untuk memberikan sumber daya manusia yang terlatih dan kompeten. Diharapkan dengan semangat dan usaha yang baik, kami dapat memberikan pelayanan yang terbaik dan memuaskan untuk klien kami.",
      ],
      vision:
        "Menjunjung tinggi nilai profesionalisme dan mengekspresikan komitmen kami melalui layanan yang terbaik",
      mission: [
        "Memberikan layanan yang komprehensif dan cepat kepada mitra luar negeri",
        "Memastikan hak-hak pekerja kami di setiap aspek kesejahteraan mereka serta melindungi martabat mereka sebagai pekerja migran",
        "Mempertahankan kualitas pekerja melalui proses seleksi, pelatihan, dan pendidikan yang tepat",
        "Mendukung kebijakan negara dalam mengurangi tingkat pengangguran nasional melalui layanan kami",
      ],
      directorMessage: [
        "Adanya kesenjangan antara angkatan siap kerja dan ketersediaan pekerja menyebabkan ancaman secara sosial ekonomi di Indonesia. Salah satu solusi yang dinilai efektif terhadap permasalahan ini adalah melalui pengiriman tenaga kerja ke luar negeri. Melalui cara ini, diharapkan tingkat pengangguran dapat menurun yang diikuti dengan perbaikan ekonomi masyarakat. Perusahaan kami percaya bahwa setiap individu berhak untuk mendapatkan pekerjaan melalui cara yang baik dan resmi.",
        "PT Bina Dinamita Rama adalah perusahaan yang dilengkapi dengan metode pembelajaran yang modern dan komunikatif. Disamping itu, perusahaan kami juga ditopang oleh karyawan dengan motivasi tinggi dengan kualifikasi yang sesuai. Kami bergerak dengan menjunjung nilai ketulusan dan dedikasi yang tinggi sebagai bagian dari profesionalitas sebagai fondasi membangun kepercayaan dan reputasi di kancah internasional.",
        "Tujuan utama kami adalah untuk memenuhi kebutuhan sesuai dengan permintaan tenaga kerja dari negara yang berkembang maupun negara maju. Kami berkomitmen untuk mempertahankan sistem rekrutmen kami yang berkualitas dan detail sebagai bagian dari usaha kami untuk menjamin kompetensi dan kualitas pihak-pihak yang terlibat.",
        "Perusahaan kami mendedikasikan seluruh usaha kami dalam bidang pemajuan dan pengembangan sumber daya manusia secara profesional. Kami menjunjung prinsip ini sebagai penggerak perusahaan kami dalam memenuhi kebutuhan sesuai dengan permintaan dari berbagai sektor asing baik industri, formal, maupun privat.",
        "Kami juga bertekad untuk terus membuka peluang kerja sama dengan berbagai lembaga dalam berbagai bentuk. Perusahaan kami percaya bahwa apapun bentuk kolaborasi dapat membantu kami untuk meningkatkan kualitas dan komitmen dari pekerja yang kami bina. Kami percaya dan dapat menjamin bahwa perusahaan kami merupakan pilihan yang sangat baik dan terpercaya dalam menyelami dunia pekerja di tingkat global.",
        "Terima kasih.",
        "Zainur Rahmad",
        "Direktur",
      ],
    },
    en: {
      title: "about us",
      title2: [
        "Bina ",
        <span className="text-red-500">Dinamita</span>,
        " Rama Ltd.",
      ],
      subTitle: "We have worked with over 200+ clients",
      paragraph: [
        "Ever since its first establishment, our company has always focused on training and delivering the best human resource in order to fulfill the demand of labor from overseas. Aside from making our movement in other countries, our company also focuses on improving the living standard of our people through providing employment.",
        "We commit to maintain our recruitment system based on professionalism. Through dedication to advancement and development of the resources, our company strives to deliver trained and capable human resources based on the requirement and needs of our clients.",
      ],
      vision:
        "Upholding the value of professionalism and expressing our commitment through excellent services",
      mission: [
        "Provide comprehensive and fast service to overseas partners",
        "Ensuring our workers’ rights in every aspect of their wellbeing and also protecting their dignity as immigrant workers",
        "Maintaining the quality of the workers through proper selection, training and education process",
        "Supporting the country's policy of reducing the national unemployment rate through our services",
      ],
      directorMessage: [
        "Indonesia is under the threat of a high unemployment rate caused by the imbalance between workers and domestic vacancies. In order to solve this problem, one of the optimal solutions is by sending workers overseas. This method hopefully would be able to reduce unemployment rate and improve people’s living standards. Our company trusts that attaining jobs through proper and official steps will be the correct choice for every individual.",
        "Bina Dinamita Rama is a company which is well equipped with modern learning and communication systems. On top of that, our company is also supported by highly motivated and qualified staff. Our sincere and dedicated service with a high standard of professionalism will always be our foundation to build trust and earn a good reputation both in our country and abroad.",
        "Our aim is to fulfill the needs and requirements of laborers in the developing and developed countries. We are committed to maintain our outstanding and thorough recruitment system as a means to guarantee the competencies and quality of both workers and clients.",
        "Our company is professionally dedicated to the advancement and development of human resources. We highly regard this principle to drive the company to fulfill the needs and requirements from the industrial or formal sectors as well as the private sector abroad.",
        "We are mostly welcome to all respective organizations and clients to form any shape of partnership with Bina Dinamita Rama. We believe that any form of collaboration could provide more qualified and committed Indonesian employees. We assure you that our company is your reliable partner in the global workforce.",
        "Thank you.",
        "Zainur Rahmad",
        "Director",
      ],
    },
  };

  return (
    <div id="about" className="pt-6">
      <div className="pt-16 min-h-screen bg-white">
        <h1 className="uppercase text-4xl font-black mb-3 text-center text-green-600">
          {content[language].title}
        </h1>
        <h2 className="text-xs font-semibold mb-12 mt-0 text-center text-[#717171]">
          {content[language].subTitle}
        </h2>
        <h1 className="uppercase ml-3 text-sm font-bold text-black mb-4 tracking-wide">
          {content[language].title2.map((text, index) => (
            <React.Fragment key={index}>{text}</React.Fragment>
          ))}
        </h1>
        {content[language].paragraph.map((text, index) => (
          <p
            key={index}
            className="mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed"
          >
            {text}
          </p>
        ))}
        <div className="container mx-auto px-4 gap-1">
          <Swiper
            navigation
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
                    alt={`Gambar ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          id="vision"
          className="pt-6 mt-8 bg-gradient-to-r from-black to-gray-800 text-white p-8 shadow-lg "
        >
          <div className="container mx-auto pt-16">
            <h1 className="text-2xl font-bold mb-4 border-b-2 border-red-500">
              {language === "id" ? "Visi" : "Vision"}
            </h1>
            <p className="text-sm mb-6 text-slate-400">
              {content[language].vision}
            </p>
            <h1 className="text-2xl font-bold mb-4 border-b-2 border-red-500">
              {language === "id" ? "Misi" : "Missions"}
            </h1>
            <ul className="list-inside space-y-2 text-sm mb-6 text-slate-400">
              {content[language].mission.map((item, index) => (
                <li key={index} className="text-sm text-slate-400">
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div></div>
        {/* Director's Message Section */}
        <div id="message" className="pt-20 bg-white p-6 text-gray-800">
          {/* Add Director's Image */}
          <div className="flex justify-center mb-4">
            <img
              src={direkturImg}
              alt="Director"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500">
            {language === "en" ? "Director’s Message" : "Pesan dari Direktur"}
          </h2>
          {content[language].directorMessage
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
              {content[language].directorMessage
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
                {content[language].directorMessage
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
            className="text-sm font-bold text-blue-500 cursor-pointer mt-4"
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
  );
};
