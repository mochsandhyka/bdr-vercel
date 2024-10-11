import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SiMaildotru, SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import content from "./data/OfficeData";
export const Office = () => {
  const { language } = useLanguage();
  const [showMore, setShowMore] = useState(false);

  // Combine offices and training centers into one array
  const combinedItems = [
    ...content[language].offices,
    ...content[language].trainingCenters,
  ];

  // Function to determine how many items to show based on screen size
  const getItemsToShow = () => {
    const screenWidth = window.innerWidth;

    if (showMore) {
      return combinedItems; // Show all items when "show more" is true
    } else if (screenWidth >= 1536) {
      // 2xl size (1536px)
      return combinedItems.slice(0, 4); // Show 5 items on 2xl screens
    } else if (screenWidth >= 1280) {
      // xl size
      return combinedItems.slice(0, 3); // Show 3 items
    } else if (screenWidth >= 768) {
      // sm size
      return combinedItems.slice(0, 2); // Show 2 items
    } else if (screenWidth < 768) {
      // sm size
      return combinedItems.slice(0, 2); // Show 2 items
    } else {
      return combinedItems.slice(0, 1); // Show 1 item for smaller screens
    }
  };

  // Get the initial items to display based on the screen size
  const initialItems = getItemsToShow();

  return (
    <div id="office" className="pt-6 bg-gradient-to-b from-white to-slate-200">
      <div className="container mx-auto pt-16   ">
        <h1 className="pt-6 uppercase text-4xl font-black mb-3 text-center text-green-600">
          {content[language].title}
        </h1>
        <h2 className="text-xs font-semibold mb-12 pb-6 mt-0 text-center text-[#717171]">
          {language === "id"
            ? "Kami Siap Melayani Kebutuhan Administratif dan Membekali Anda dengan Keterampilan Profesional"
            : "We Are Ready to Serve Your Administrative Needs and Equip You with Professional Skills"}
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-6 px-4">
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

        <div className=" text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`bg-green-600 text-white mt-6 py-2 px-4 mb-2 rounded-lg shadow-lg transition-transform duration-200 
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
