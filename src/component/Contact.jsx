import { Link } from "react-scroll";
import { FormContact } from "./ContactUs";
import { useLanguage } from "../context/LanguageContext"; // Sesuaikan path dengan file LanguageContext Anda
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa"; // Import ikon dari react-icons

export const Contact = () => {
  const { language, toggleLanguage } = useLanguage();

  const text = {
    en: {
      title: "Contact Us",
      subtitle: "If You have Any Query, feel Free To Contact Us",
      phoneText: "Call to ask any question",
      emailText: "Email to get free quote",
      officeText: "Visit Our Office",
      facebookText: "Follow Our Facebook",
      address: "Jl. Bunga Maya 16 Malang - Indonesia",
      phoneNumber: "+(62) - 341 - 400799",
      email: "official@dinamitarama.com",
      facebookPage: "Binadinamitarama",
    },
    id: {
      title: "Hubungi Kami",
      subtitle:
        "Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami",
      phoneText: "Telepon untuk bertanya",
      emailText: "Email untuk mendapatkan penawaran gratis",
      officeText: "Kunjungi Kantor Kami",
      facebookText: "Ikuti Facebook Kami",
      address: "Jl. Bunga Maya 16 Malang - Indonesia",
      phoneNumber: "+(62) - 341 - 400799",
      email: "official@dinamitarama.com",
      facebookPage: "Binadinamitarama",
    },
  };

  return (
    <div className="bg-slate-200 pt-10 pb-10" id="contact">
      <div className="contact container mx-auto pt-16 mb-[500px] md:mb-[600px] lg:mb-[650px]">
        <div className="text-center">
          <h1 className="uppercase text-4xl font-black mb-3 text-center text-green-600">
            {text[language].title}
          </h1>
          <h2 className="text-xs font-semibold mb-12 mt-0 text-center text-[#717171]">
            {text[language].subtitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 mt-10">
          {/* Phone Section */}
          <div className="phone flex flex-col items-center justify-center text-center mb-4">
            <div className="icon-container bg-white p-3 rounded-full shadow-md flex items-center justify-center">
              <FaPhone className="h-8 w-8 text-[#29BF08]" />
            </div>
            <div className="detail-phone mt-4">
              <p className="text-sm md:text-base text-black font-bold">
                {text[language].phoneText}
              </p>
              <a
                href={`tel:${text[language].phoneNumber}`}
                className="text-sm md:text-base text-[#29BF08] font-bold"
              >
                {text[language].phoneNumber}
              </a>
            </div>
          </div>

          {/* Email Section */}
          <div className="email flex flex-col items-center justify-center text-center mb-4">
            <div className="icon-container bg-white p-3 rounded-full shadow-md flex items-center justify-center">
              <FaEnvelope className="h-8 w-8 text-[#29BF08]" />
            </div>
            <div className="detail-email mt-4">
              <p className="text-sm md:text-base text-black font-bold">
                {text[language].emailText}
              </p>
              <a
                href={`mailto:${text[language].email}`}
                className="text-sm md:text-base text-[#29BF08] font-bold"
              >
                {text[language].email}
              </a>
            </div>
          </div>

          {/* Office Section */}
          <div className="office flex flex-col items-center justify-center text-center mb-4">
            <div className="icon-container bg-white p-3 rounded-full shadow-md flex items-center justify-center">
              <FaMapMarkerAlt className="h-8 w-8 text-[#29BF08]" />
            </div>
            <div className="detail-office mt-4">
              <p className="text-sm md:text-base text-black font-bold">
                {text[language].officeText}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bunga+Maya+16,+Malang+-+Indonesia"
                className="text-sm md:text-base text-[#29BF08] font-bold"
              >
                {text[language].address}
              </a>
            </div>
          </div>

          {/* Facebook Section */}
          <div className="facebook flex flex-col items-center justify-center text-center mb-4">
            <div className="icon-container bg-white p-3 rounded-full shadow-md flex items-center justify-center">
              <FaFacebook className="h-8 w-8 text-[#29BF08]" />
            </div>
            <div className="detail-facebook mt-4">
              <p className="text-sm md:text-base text-black font-bold">
                {text[language].facebookText}
              </p>
              <a
                href="https://www.facebook.com/people/PT-Bina-Dinamita-Rama/61566561283480/"
                className="text-sm md:text-base text-[#29BF08] font-bold"
              >
                {text[language].facebookPage}
              </a>
            </div>
          </div>
        </div>
      </div>
      <FormContact />
    </div>
  );
};
