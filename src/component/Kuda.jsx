import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Kuda = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Kuda Page",
      description: "Content for the Kuda page.",
    },
    id: {
      title: "Halaman Kuda",
      description: "Konten untuk halaman Kuda.",
    },
  };

  return (
    <div id="kuda" className="min-h-screen">
      <h1>{content[language].title}</h1>
      <p>{content[language].description}</p>
    </div>
  );
};
