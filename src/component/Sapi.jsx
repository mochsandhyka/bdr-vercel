import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Sapi = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Sapi Page",
      description: "Content for the Sapi page.",
    },
    id: {
      title: "Halaman Sapi",
      description: "Konten untuk halaman Sapi.",
    },
  };

  return (
    <div id="sapi" className="h-screen bg-black text-white">
      <h1>{content[language].title}</h1>
      <p>{content[language].description}</p>
    </div>
  );
};
