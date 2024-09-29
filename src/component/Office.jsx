import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SiMaildotru, SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
export const Office = () => {
  const content = {
    id: {
      showMoreText: "Tampilkan lebih banyak",
      showLessText: "Tampilkan lebih sedikit",
      title: "Kantor & Pusat Pelatihan",
      offices: [
        {
          title: "Kantor Pusat",
          address: "Bunga Maya 16, Malang - Indonesia",
          phone: "+62341400799 / +6281336226999",
          email: "office@dinamitarama.com (tentative)",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Bunga+Maya+16,+Malang+-+Indonesia",
        },
        {
          title: "Kantor Sulawesi Selatan",
          address: "Komp. Bukit Baruga, Rinjani 8, Antang, Manggala, Makassar",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Komp.+Bukit+Baruga,+Rinjani+8,+Antang,+Manggala,+Makassar",
        },
        {
          title: "Kantor Nusa Tenggara Timur",
          address:
            "Jend. Sudirman, Waloti, Alok Timur, Sikka, Nusa Tenggara Timur",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Jend.+Sudirman,+Waloti,+Alok+Timur,+Sikka,+Nusa+Tenggara+Timur",
        },
        {
          title: "Kantor Bali",
          address: "Gajah Sura 2, Denpasar Utara, Bali",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Gajah+Sura+2,+Denpasar+Utara,+Bali",
        },
        {
          title: "Kantor Sulawesi Utara",
          address: "Tanah Putih Lingkungan VII, Malalayang, Manado",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Tanah+Putih+Lingkungan+VII,+Malalayang,+Manado",
        },
      ],
      trainingCenters: [
        {
          title: "LPK Bina Dinamita Rama",
          address: "Bunga Maya 13, Malang - Indonesia",
          phone: "+62341400799",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Bunga+Maya+13,+Malang+-+Indonesia",
        },
        {
          title: "LPK Anugerah Usaha Jaya",
          address: "Teluk Pelabuhan Ratu 68, Arjosari, Malang",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Teluk+Pelabuhan+Ratu+68,+Arjosari,+Malang",
        },
        {
          title: "LPK BDR Training Center",
          address: "Tanah Putih Lingkungan VII, Malalayang, Manado",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Tanah+Putih+Lingkungan+VII,+Malalayang,+Manado",
        },
      ],
    },
    en: {
      showMoreText: "Show More",
      showLessText: "Show Less",
      title: "Office & Training Center",
      offices: [
        {
          title: "Head Office",
          address: "Bunga Maya 16, Malang - Indonesia",
          phone: "+62341400799 / +6281336226999",
          email: "office@dinamitarama.com (tentative)",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Bunga+Maya+16,+Malang+-+Indonesia",
        },
        {
          title: "South Sulawesi Office",
          address: "Komp. Bukit Baruga, Rinjani 8, Antang, Manggala, Makassar",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Komp.+Bukit+Baruga,+Rinjani+8,+Antang,+Manggala,+Makassar",
        },
        {
          title: "East Nusa Tenggara Office",
          address:
            "Jend. Sudirman, Waloti, Alok Timur, Sikka, East Nusa Tenggara",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Jend.+Sudirman,+Waloti,+Alok+Timur,+Sikka,+East+Nusa+Tenggara",
        },
        {
          title: "Bali Office",
          address: "Gajah Sura 2, Denpasar Utara, Bali",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Gajah+Sura+2,+Denpasar+Utara,+Bali",
        },
        {
          title: "North Sulawesi Office",
          address: "Tanah Putih Lingkungan VII, Malalayang, Manado",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Tanah+Putih+Lingkungan+VII,+Malalayang,+Manado",
        },
      ],
      trainingCenters: [
        {
          title: "LPK Bina Dinamita Rama",
          address: "Bunga Maya 13, Malang - Indonesia",
          phone: "+62341400799",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Bunga+Maya+13,+Malang+-+Indonesia",
        },
        {
          title: "LPK Anugerah Usaha Jaya",
          address: "Teluk Pelabuhan Ratu 68, Arjosari, Malang",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Teluk+Pelabuhan+Ratu+68,+Arjosari,+Malang",
        },
        {
          title: "LPK BDR Training Center",
          address: "Tanah Putih Lingkungan VII, Malalayang, Manado",
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Tanah+Putih+Lingkungan+VII,+Malalayang,+Manado",
        },
      ],
    },
  };

  const { language } = useLanguage();

  const [showMore, setShowMore] = useState(false);

  // Combine offices and training centers into one array
  const combinedItems = [
    ...content[language].offices,
    ...content[language].trainingCenters,
  ];

  // Get the initial items to display
  const initialItems = showMore ? combinedItems : combinedItems.slice(0, 3);

  return (
    <div id="office" className="pt-6">
      <div className="pt-16 min-h-screen bg-white">
        <h1 className="pt-6 pb-6 shadow-top uppercase text-4xl font-black mb-10 text-center text-green-600">
          {content[language].title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {initialItems.map((item, index) => (
            <div key={index} className="bg-slate-200 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <p className="flex items-center mb-2">
                <SiGooglemaps className="mr-2 text-green-600" />
                <a
                  href={item.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  {item.address}
                </a>
              </p>
              {item.phone && (
                <p className="flex items-center mb-2">
                  <FaPhone className="mr-2 text-green-600" />
                  {item.phone}
                </p>
              )}
              {item.email && (
                <p className="flex items-center">
                  <SiMaildotru className="mr-2 text-green-600" />
                  {item.email}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg transition-transform duration-200 
              hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500`}
          >
            {showMore
              ? content[language].showLessText
              : content[language].showMoreText}
          </button>
        </div>
      </div>
    </div>
  );
};
