import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaGlobeAsia, FaGlobeAmericas } from "react-icons/fa"; // Ikon untuk bumi Asia dan Amerika

export const LangToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className="flex items-center text-black dark:text-white bg-transparent rounded-lg text-xs text-center gap-0.5"
      onClick={toggleLanguage}
    >
      {language === "id" ? (
        <FaGlobeAsia className="w-5 h-5" title="Bahasa Indonesia" />
      ) : (
        <FaGlobeAmericas className="w-5 h-5 " title="English" />
      )}
      {language === "id" ? "ID" : "EN"}
    </button>
  );
};
